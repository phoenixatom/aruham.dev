import './App.css'

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.808 10.469L20.88 2h-1.676l-6.142 7.353L8.158 2H2.5l7.418 11.12L2.5 22h1.676l6.486-7.765L15.842 22H21.5l-7.693-11.531zm-2.296 2.748l-.752-1.107L4.78 3.3h2.575l4.826 7.11.751 1.107 6.273 9.242h-2.574l-5.12-7.541z" />
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634 3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388zm-5.5 10.403h3.208V9.25H4.208v10.54zM7.875 5.812a2.063 2.063 0 1 1-4.125 0 2.063 2.063 0 0 1 4.125 0z" />
  </svg>
)

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const BlogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
)

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
)

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const PlaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
)

function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center mb-8 pt-12 pb-4">
      <img
        src="/images/aruham.png"
        alt="Mohamed Aruham"
        className="w-24 h-24 rounded-full object-cover mb-4 ring-2 ring-white/10"
      />
      <h1 className="text-2xl font-bold mb-3">Mohamed Aruham</h1>
      <p className="text-sm text-gray-400 max-w-md leading-relaxed px-4">
        A software developer and startup co-founder, I turn bold ideas into powerful, user-friendly products. I love building clean, scalable systems that solve real problems. Currently leading SeaStack, where we create tech that works beautifully and grows with purpose.
      </p>
    </div>
  )
}

function BentoCard({ href, icon, title, subtitle, accent, className = '' }) {
  const content = (
    <div className="p-5 flex flex-col justify-between h-full" style={{ background: `${accent}12` }}>
      <div className="flex items-start justify-between">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${accent}25` }}>
          <span style={{ color: accent }}>{icon}</span>
        </div>
        {href && <span className="text-white/40"><ArrowUpRightIcon /></span>}
      </div>
      <div className="mt-auto pt-4">
        <p className="font-semibold text-sm text-white">{title}</p>
        {subtitle && <p className="text-xs mt-0.5" style={{ color: `${accent}bb` }}>{subtitle}</p>}
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`bento-card ${className}`}>
        {content}
      </a>
    )
  }
  return <div className={`bento-card ${className}`}>{content}</div>
}

function QuoteCard() {
  return (
    <div className="bento-card col-span-2 md:col-span-4" style={{ background: '#f5a62312' }}>
      <div className="p-6 flex flex-col justify-center items-center text-center">
        <p className="text-gray-300 text-sm italic leading-relaxed">
          "And on, and off, and on, and off, and on, and off, and on, and off, and on, and off."
        </p>
        <p className="text-xs text-gray-500 mt-3">— Neil Hilborn</p>
      </div>
    </div>
  )
}

function SectionDivider({ title }) {
  return (
    <div className="section-divider col-span-2 md:col-span-4">
      <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{title}</span>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <ProfileHeader />

        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          <BentoCard
            href="https://twitter.com/aruhamm"
            icon={<XIcon />}
            title="Twitter"
            subtitle="@aruhamm"
            accent="#1DA1F2"
          />
          <BentoCard
            href="https://instagram.com/arhamm.m"
            icon={<InstagramIcon />}
            title="Instagram"
            subtitle="@arhamm.m"
            accent="#E1306C"
          />
          <BentoCard
            href="https://linkedin.com/in/mohamedaruham"
            icon={<LinkedInIcon />}
            title="LinkedIn"
            subtitle="Let's connect"
            accent="#0A66C2"
          />
          <BentoCard
            href="https://github.com/phoenixatom"
            icon={<GitHubIcon />}
            title="GitHub"
            subtitle="phoenixatom"
            accent="#8B5CF6"
          />
        </div>

        {/* Blog */}
        <div className="mb-3">
          <BentoCard
            href="https://blog.aruham.dev"
            icon={<BlogIcon />}
            title="Personal Blog"
            subtitle="blog.aruham.dev"
            accent="#F472B6"
          />
        </div>

        {/* Work */}
        <SectionDivider title="Work" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 mt-3">
          <BentoCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>}
            title="Systems Engineer"
            subtitle="Stealth Startup"
            accent="#A78BFA"
          />
          <BentoCard
            href="http://seastack.mv"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>}
            title="CTO"
            subtitle="seastack.mv"
            accent="#06B6D4"
          />
        </div>

        {/* Projects */}
        <SectionDivider title="Projects" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
          <BentoCard
            href="https://github.com/phoenixatom/gan-flights"
            icon={<PlaneIcon />}
            title="GAN Flights"
            subtitle="API for GAN flights"
            accent="#34D399"
            className="col-span-2"
          />
          <BentoCard
            href="http://calendly.com/c4arham?hide_gdpr_banner=1"
            icon={<CalendarIcon />}
            title="Setup a meeting"
            subtitle="Calendly"
            accent="#F59E0B"
            className="col-span-2"
          />

          <BentoCard
            href="http://faker.baivaru.net"
            icon={<CodeIcon />}
            title="Dhivehi Faker"
            subtitle="faker.baivaru.net"
            accent="#FB923C"
          />
          <BentoCard
            href="https://github.com/phoenixatom/DhivatarSharp"
            icon={<GitHubIcon />}
            title="Dhivatars in .NET"
            subtitle="GitHub repository"
            accent="#60A5FA"
          />
          <BentoCard
            href="https://github.com/phoenixatom/baivaru-faker-vscode"
            icon={<CodeIcon />}
            title="BaivaruFaker"
            subtitle="VSCode Extension"
            accent="#C084FC"
          />
          <BentoCard
            href="https://www.credly.com/users/mohamed-aruham"
            icon={<AwardIcon />}
            title="Certifications"
            subtitle="View on Credly"
            accent="#FBBF24"
          />

          <QuoteCard />
        </div>
      </div>
    </div>
  )
}

export default App
