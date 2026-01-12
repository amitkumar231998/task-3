const quickLinks = [
  {
    title: "Statistics & Dashboards",
    description: "District dashboards, macro indicators, and live releases.",
  },
  {
    title: "Surveys & Publications",
    description: "Annual reports, surveys, and thematic compendiums.",
  },
  {
    title: "e-Services",
    description: "Scholarship, recruitment, and digital citizen services.",
  },
  {
    title: "GIS & Maps",
    description: "Spatial insights for development planning and monitoring.",
  },
];

const updates = [
  {
    title: "Quarterly Growth Snapshot",
    date: "12 Sep 2024",
    detail:
      "Revised growth estimates show broad-based acceleration in manufacturing and services.",
  },
  {
    title: "Digital Census 2024",
    date: "02 Sep 2024",
    detail:
      "New e-census dashboards provide ward-level demographic trends and mobility insights.",
  },
  {
    title: "Infrastructure Atlas",
    date: "22 Aug 2024",
    detail:
      "Interactive atlas mapping roads, irrigation, and renewable energy assets.",
  },
];

const initiatives = [
  {
    name: "National Data Exchange",
    tagline: "Secure data-sharing pipelines for ministries and states.",
  },
  {
    name: "Citizen Knowledge Hub",
    tagline: "Unified portal for publications, advisories, and announcements.",
  },
  {
    name: "Skill India Tracker",
    tagline: "Live dashboards tracking skilling outcomes and employability.",
  },
];

const metrics = [
  { label: "Live dashboards", value: "124+" },
  { label: "Department services", value: "58" },
  { label: "Monthly visitors", value: "2.8M" },
  { label: "Open datasets", value: "3,600+" },
];

const spotlight = [
  {
    title: "Economic Survey Highlights",
    description:
      "Key takeaways from the latest survey, including sectoral outlooks and resilience indices.",
  },
  {
    title: "State Development Atlas",
    description:
      "Discover district profiles, investment readiness, and social infrastructure benchmarks.",
  },
  {
    title: "Innovation & ICT Cell",
    description:
      "Explore smart governance pilots, e-office adoption, and cybersecurity readiness.",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark">NDSP</span>
            <div>
              <p className="brand-title">National Data &amp; Services Portal</p>
              <p className="brand-subtitle">Government of Bharat</p>
            </div>
          </div>
          <div className="nav-links">
            <button className="nav-link">About</button>
            <button className="nav-link">Departments</button>
            <button className="nav-link">Dashboards</button>
            <button className="nav-link">Publications</button>
            <button className="nav-link primary">Sign In</button>
          </div>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Trusted government data since 1951</p>
            <h1>
              Empowering policy, planning, and public services with one unified
              data ecosystem.
            </h1>
            <p className="lead">
              Inspired by India&apos;s flagship statistical and e-governance
              portals, this new experience connects ministries, state directorates,
              and citizens with verified information, live dashboards, and
              actionable insights.
            </p>
            <div className="hero-actions">
              <button className="button primary">Explore Services</button>
              <button className="button ghost">Download Reports</button>
            </div>
            <div className="hero-metrics">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric">
                  <p className="metric-value">{metric.value}</p>
                  <p className="metric-label">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card">
            <h3>Today&apos;s Highlights</h3>
            <div className="card-list">
              {updates.map((item) => (
                <div key={item.title} className="card-item">
                  <p className="card-date">{item.date}</p>
                  <p className="card-title">{item.title}</p>
                  <p className="card-detail">{item.detail}</p>
                </div>
              ))}
            </div>
            <button className="button secondary">View all updates</button>
          </div>
        </div>
      </header>

      <section className="section quick-links">
        <div className="section-heading">
          <p className="eyebrow">Quick access</p>
          <h2>Navigate core services and knowledge resources</h2>
        </div>
        <div className="grid four">
          {quickLinks.map((link) => (
            <div key={link.title} className="tile">
              <h3>{link.title}</h3>
              <p>{link.description}</p>
              <button className="text-link">Open module →</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section spotlight">
        <div className="section-heading">
          <p className="eyebrow">Featured insights</p>
          <h2>Strategic publications and decision-ready intelligence</h2>
        </div>
        <div className="grid three">
          {spotlight.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="text-link">Read brief →</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section initiatives">
        <div className="initiatives-card">
          <div>
            <p className="eyebrow">Digital governance</p>
            <h2>Unified digital initiatives for every department</h2>
            <p className="lead">
              Build confidence with integrated data standards, secure exchange,
              and a shared services catalogue tailored for state and central
              agencies.
            </p>
            <button className="button primary">Discover initiatives</button>
          </div>
          <div className="stack">
            {initiatives.map((item) => (
              <div key={item.name} className="stack-item">
                <h4>{item.name}</h4>
                <p>{item.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section newsletter">
        <div>
          <p className="eyebrow">Stay informed</p>
          <h2>Subscribe for alerts, releases, and analytics updates</h2>
          <p className="lead">
            Receive tailored bulletins covering statistics releases, tender
            notices, and new digital services.
          </p>
        </div>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter official email address"
            aria-label="Email address"
          />
          <button className="button primary" type="button">
            Subscribe
          </button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <h3>National Data &amp; Services Portal</h3>
          <p>
            A single-window platform inspired by national statistical systems,
            state directorate portals, and ICT service providers.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Departments</h4>
            <button>Planning &amp; Statistics</button>
            <button>Economic Affairs</button>
            <button>Social Welfare</button>
          </div>
          <div>
            <h4>Resources</h4>
            <button>Publications</button>
            <button>Media Centre</button>
            <button>RTI &amp; Policies</button>
          </div>
          <div>
            <h4>Connect</h4>
            <button>Contact Us</button>
            <button>Helpdesk</button>
            <button>Feedback</button>
          </div>
        </div>
        <p className="footer-note">
          © 2024 National Data &amp; Services Portal. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
