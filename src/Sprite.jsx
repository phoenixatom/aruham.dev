import { useEffect, useRef } from 'react'

// ── Spring physics ───────────────────────────────────────────────────
function stepSpring(s, dt) {
  const steps = Math.ceil(dt / 0.008)
  const sub = dt / steps
  for (let i = 0; i < steps; i++) {
    const f = -1800 * (s.v - s.t) - 35 * s.d
    s.d += f * sub
    s.v += s.d * sub
  }
  s.v = Math.max(-20, Math.min(20, s.v))
  s.d = Math.max(-800, Math.min(800, s.d))
  if (Math.abs(s.v - s.t) < 0.01 && Math.abs(s.d) < 0.1) { s.v = s.t; s.d = 0 }
}

// ── Sprite sheet (96x96 per frame) ───────────────────────────────────
const SF = 96
const FRAMES = {
  idle:  { sx: 0,      sy: 0 },
  jump:  { sx: SF,     sy: 0 },
  walk1: { sx: SF * 2, sy: 0 },
  walk2: { sx: SF * 3, sy: 0 },
  climb: { sx: SF * 2, sy: SF },
}

const DRAW = 36            // sprite render size
const LADDER_TILE = 64     // ladder tile source size
const LADDER_DRAW = 22     // ladder tile render size
const LADDER_RUNGS = 6     // how many ladder tiles stacked
const LADDER_H = LADDER_DRAW * LADDER_RUNGS
const LEFT_PAD = LADDER_DRAW + 8
const TOP_PAD = DRAW + 10

const WALK_SPEED = 65
const GRAVITY = 500
const STRIDE = 20
const MAX_DEPRESS = 4
const FOOT_HALF = 8
const TAPER = 8

export default function SpriteWalker({ children }) {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current, canvas = canvasRef.current
    if (!wrap || !canvas) return
    const bio = wrap.querySelector('[data-bio]')
    if (!bio) return

    // Load images
    const sheet = new Image()
    sheet.src = '/images/sprite.png'
    const ladderImg = new Image()
    ladderImg.src = '/images/ladder.png'
    let ready = 0
    const onLoad = () => { ready++; if (ready >= 2 && lines.length) raf = requestAnimationFrame(loop) }
    sheet.onload = onLoad
    ladderImg.onload = onLoad

    // Split text into character spans (word-aware)
    const spans = []
    const tw = document.createTreeWalker(bio, NodeFilter.SHOW_TEXT)
    const nodes = []
    while (tw.nextNode()) nodes.push(tw.currentNode)
    nodes.forEach(node => {
      const frag = document.createDocumentFragment()
      const words = node.textContent.split(/(\s+)/)
      for (const word of words) {
        if (!word) continue
        if (!word.trim()) { frag.appendChild(document.createTextNode(word)); continue }
        const wordWrap = document.createElement('span')
        wordWrap.style.whiteSpace = 'nowrap'
        wordWrap.style.display = 'inline'
        for (const c of word) {
          const span = document.createElement('span')
          span.textContent = c
          span.style.display = 'inline-block'
          span.style.willChange = 'transform'
          wordWrap.appendChild(span)
          spans.push(span)
        }
        frag.appendChild(wordWrap)
      }
      node.parentNode.replaceChild(frag, node)
    })

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    let platforms = [], lines = []

    function measure() {
      const wr = wrap.getBoundingClientRect()
      platforms = spans.map(el => {
        const r = el.getBoundingClientRect()
        return {
          el, x: r.left - wr.left + LEFT_PAD, y: r.top - wr.top + TOP_PAD,
          w: r.width, h: r.height, spring: { v: 0, d: 0, t: 0 },
        }
      })
      lines = []
      let cur = [], curY = -999
      for (const p of platforms) {
        if (Math.abs(p.y - curY) > 3) {
          if (cur.length) lines.push(cur)
          cur = [p]; curY = p.y
        } else cur.push(p)
      }
      if (cur.length) lines.push(cur)
    }

    function resize() {
      const br = bio.getBoundingClientRect()
      const cw = br.width + LEFT_PAD
      const ch = br.height + TOP_PAD + 10
      canvas.width = cw * dpr
      canvas.height = ch * dpr
      canvas.style.width = cw + 'px'
      canvas.style.height = ch + 'px'
      measure()
    }

    // Draw sprite frame (flipped when walking left)
    function drawFrame(name, x, y, flipH) {
      if (ready < 2) return
      const f = FRAMES[name]
      ctx.save()
      ctx.imageSmoothingEnabled = false
      if (flipH) {
        ctx.translate(x + DRAW / 2, y - DRAW * 0.75)
        ctx.scale(-1, 1)
        ctx.drawImage(sheet, f.sx, f.sy, SF, SF, 0, 0, DRAW, DRAW)
      } else {
        ctx.drawImage(sheet, f.sx, f.sy, SF, SF, x - DRAW / 2, y - DRAW * 0.75, DRAW, DRAW)
      }
      ctx.restore()
    }

    // Draw ladder (stack of tiles) on right side
    function drawLadder(x, bottomY) {
      if (ready < 2) return
      ctx.imageSmoothingEnabled = false
      for (let i = 0; i < LADDER_RUNGS; i++) {
        const ty = bottomY - (i + 1) * LADDER_DRAW
        ctx.drawImage(ladderImg, 0, 0, LADDER_TILE, LADDER_TILE, x, ty, LADDER_DRAW, LADDER_DRAW)
      }
    }

    // Sprite state
    const sp = { x: 0, y: 0, vy: 0, line: 0, phase: 'climb', progress: 0, dist: 0, dir: 1 } // dir: 1=right, -1=left
    let lastT = 0, raf

    function loop(ts) {
      if (!lastT) { lastT = ts; raf = requestAnimationFrame(loop); return }
      const dt = Math.min((ts - lastT) / 1000, 0.05)
      lastT = ts
      if (!lines.length) { raf = requestAnimationFrame(loop); return }

      const br = bio.getBoundingClientRect()
      const canvasW = br.width + LEFT_PAD
      const canvasH = br.height + TOP_PAD + 10

      // Ladder position: left side, bottom aligned with last line of text
      const lastLine = lines[lines.length - 1]
      const ladderBottomY = lastLine[0].y + lastLine[0].h
      const ladderX = 4
      const line0Y = lines[0][0].y

      if (sp.phase === 'climb') {
        // Climb UP from bottom of ladder to first text line
        sp.x = ladderX + LADDER_DRAW / 2
        const startY = ladderBottomY
        const endY = line0Y
        sp.progress += dt * 0.5
        sp.y = startY + sp.progress * (endY - startY)
        if (sp.progress >= 1) {
          sp.phase = 'walk'
          sp.x = lines[0][0].x - 5
          sp.y = line0Y
          sp.dist = 0
        }
      } else if (sp.phase === 'walk') {
        // Walk in current direction
        const dx = WALK_SPEED * dt
        sp.x += dx * sp.dir
        sp.dist += dx
        sp.y = lines[sp.line][0].y

        // Depression
        const cx = sp.x
        const curLine = lines[sp.line]
        const lineY = curLine[0].y
        for (const p of platforms) {
          if (Math.abs(p.y - lineY) > 3) { p.spring.t = 0; continue }
          const d = Math.abs((p.x + p.w / 2) - cx)
          if (d < FOOT_HALF) p.spring.t = MAX_DEPRESS
          else if (d < FOOT_HALF + TAPER) p.spring.t = MAX_DEPRESS * (1 - (d - FOOT_HALF) / TAPER)
          else p.spring.t = 0
        }

        // End of line
        const first = curLine[0]
        const last = curLine[curLine.length - 1]
        const pastEnd = sp.dir === 1
          ? sp.x > last.x + last.w + 10
          : sp.x < first.x - 10

        if (pastEnd) {
          platforms.forEach(p => { p.spring.t = 0 })
          if (sp.line < lines.length - 1) {
            sp.phase = 'fall'
            sp.vy = 0
          } else {
            sp.phase = 'pause'
            sp.progress = 0
          }
        }
      } else if (sp.phase === 'fall') {
        sp.vy += GRAVITY * dt
        sp.y += sp.vy * dt
        const nextLine = lines[sp.line + 1]
        if (sp.y >= nextLine[0].y) {
          sp.y = nextLine[0].y
          sp.vy = 0
          sp.line++
          sp.dir *= -1 // flip direction
          const nl = lines[sp.line]
          // Land on the side we fell from
          if (sp.dir === 1) {
            sp.x = nl[0].x - 5
          } else {
            const last = nl[nl.length - 1]
            sp.x = last.x + last.w + 5
          }
          sp.phase = 'walk'
          sp.dist = 0
        }
      } else { // pause
        sp.progress += dt * 0.4
        if (sp.progress >= 1) {
          sp.phase = 'climb'
          sp.progress = 0
          sp.line = 0
          sp.dist = 0
          sp.dir = 1
        }
      }

      // Update springs
      for (const p of platforms) {
        stepSpring(p.spring, dt)
        if (Math.abs(p.spring.v) > 0.05)
          p.el.style.transform = `translateY(${p.spring.v.toFixed(1)}px)`
        else if (p.el.style.transform)
          p.el.style.transform = ''
      }

      // ── Render ──
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, canvasW, canvasH)

      // Ladder
      drawLadder(ladderX, ladderBottomY)

      // Sprite
      if (sp.phase === 'climb') {
        drawFrame('climb', sp.x, sp.y, false)
      } else if (sp.phase === 'walk') {
        const walkFrame = Math.floor(sp.dist / (STRIDE / 2)) % 2 === 0 ? 'walk1' : 'walk2'
        drawFrame(walkFrame, sp.x, sp.y, sp.dir === -1)
      } else if (sp.phase === 'fall') {
        drawFrame('jump', sp.x, sp.y, sp.dir === -1)
      }

      raf = requestAnimationFrame(loop)
    }

    document.fonts.ready.then(() => {
      resize()
      if (ready >= 2) raf = requestAnimationFrame(loop)
    })
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      spans.forEach(s => { s.style.transform = '' })
    }
  }, [])

  return (
    <div ref={wrapRef} className="relative" style={{ overflow: 'visible' }}>
      {children}
      <canvas
        ref={canvasRef}
        className="absolute pointer-events-none"
        style={{ left: `${-LEFT_PAD}px`, top: `${-TOP_PAD}px`, zIndex: 10 }}
      />
    </div>
  )
}
