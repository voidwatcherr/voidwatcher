import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Globe2,
  Mail,
  Menu,
} from 'lucide-react';

type Post = { id: string; url: string; createdAt?: string };
declare global {
  interface Window {
    twttr?: { widgets?: { load: (element?: HTMLElement) => void } };
  }
}

const latestPosts: Post[] = [
  { id: '2111286480656277665', url: 'https://x.com/voidwatchr/status/2111286480656277665?s=46' },
  { id: '2110815581045989539', url: 'https://x.com/voidwatchr/status/2110815581045989539?s=46' },
  { id: '2110118213430452566', url: 'https://x.com/voidwatchr/status/2110118213430452566?s=46' },
  { id: '2109598729875697944', url: 'https://x.com/voidwatchr/status/2109598729875697944?s=46' },
  { id: '2108553518294720793', url: 'https://x.com/voidwatchr/status/2108553518294720793?s=46' },
];
const socials = {
  x: 'https://x.com/voidwatchr?s=11',
  linkedin: 'https://www.linkedin.com/in/anshuman-singh0811?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  telegram: 'https://t.me/voidwatchr',
};

function App() {
  const [posts] = useState<Post[]>(latestPosts);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [postIndex, setPostIndex] = useState(0);

  useEffect(() => {
    if (!posts.length) return;
    const existing = document.querySelector('script[data-x-embed]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      script.setAttribute('data-x-embed', 'true');
      script.onload = () => window.twttr?.widgets?.load();
      document.body.appendChild(script);
    } else {
      window.twttr?.widgets?.load();
    }
  }, [posts]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">V</span>
          <span>
            voidwatcher<span className="brand-dot">.</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation"
        >
          <Menu size={20} />
        </button>
        <nav className={mobileMenu ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={() => setMobileMenu(false)}>
            About
          </a>
          <a href="#experience" onClick={() => setMobileMenu(false)}>
            Experience
          </a>
          <a href="#work" onClick={() => setMobileMenu(false)}>
            Selected work
          </a>
          <a href="#posts" onClick={() => setMobileMenu(false)}>
            Posts
          </a>
          <a className="nav-contact" href="mailto:voidwatcher08@gmail.com">
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <img className="profile-avatar" src="/resources/voidwatcher-profile.jpeg" alt="VoidWatcher profile picture" />
            <div className="availability">
              <span className="status-dot"></span> WEB3 COMMUNITY & CONTENT
            </div>
            <p className="hero-kicker">writing about web3, mostly rwa lately</p>
            <h1>
              Web3, finance<br />and the people building it.
            </h1>
            <p className="hero-description">
              I’m Anshuman — a Web3 researcher and community operator focused on real-world assets, onchain finance, and the people building the next generation of financial products.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#work">
                Explore my work <ArrowRight size={16} />
              </a>
              <a
                className="secondary-btn"
                href="mailto:voidwatcher08@gmail.com"
              >
                <Mail size={16} /> Get in touch
              </a>
            </div>
            <div className="hero-socials">
              <a href={socials.x} target="_blank" rel="noreferrer">
                <img className="social-logo" src="/resources/x-logo.png" alt="" /> X / Twitter <ArrowUpRight size={13} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer">
                <img className="social-logo" src="/resources/linkedin-logo.png" alt="" /> LinkedIn <ArrowUpRight size={13} />
              </a>
              <a href={socials.telegram} target="_blank" rel="noreferrer">
                <img className="social-logo" src="/resources/telegram-logo.png" alt="" /> Telegram <ArrowUpRight size={13} />
              </a>
              <a href="mailto:voidwatcher08@gmail.com">
                Email <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orb-core">
              <span>V</span>
            </div>
            <span className="float-label label-rwa">
              RWA <span>↗</span>
            </span>
            <span className="float-label label-defi">
              DeFi <span>↗</span>
            </span>
            <span className="float-label label-community">COMMUNITY</span>
            <div className="visual-caption">
              <span className="caption-line"></span>
              <span>RESEARCH · CONTENT · COMMUNITY</span>
            </div>
          </div>
          <div className="hero-scroll">
            <span></span> SCROLL TO EXPLORE
          </div>
        </section>
        <section className="ticker">
          <div className="ticker-track">
            <span>REAL WORLD ASSETS</span>
            <i>✳</i>
            <span>TOKENIZATION</span>
            <i>✳</i>
            <span>ONCHAIN FINANCE</span>
            <i>✳</i>
            <span>COMMUNITY</span>
            <i>✳</i>
            <span>CONTENT & RESEARCH</span>
            <i>✳</i>
            <span>REAL WORLD ASSETS</span>
            <i>✳</i>
            <span>TOKENIZATION</span>
            <i>✳</i>
            <span>ONCHAIN FINANCE</span>
          </div>
        </section>
        <section className="section-wrap about-section" id="about">
          <div className="section-heading">
            <span className="section-number">01 / ABOUT</span>
            <h2>
              A bit about<br />
              <span className="muted-heading">what I do.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p className="large-copy">
              I started making Web3 content in 2023. These days, most of my research is around <span className="text-highlight">RWA and tokenization.</span>
            </p>
            <p>
              I like digging into a project, figuring out what it actually does, and writing about it without making it sound more complicated than it is.
            </p>
            <p>
              I also help run communities — answering questions, sorting out issues, organising events and keeping conversations moving.
            </p>
            <div className="about-tags">
              <span>RWA & TOKENIZATION</span>
              <span>WEB3 RESEARCH</span>
              <span>COMMUNITY OPS</span>
              <span>CONTENT</span>
            </div>
          </div>
        </section>
        <section className="section-wrap experience-section" id="experience">
          <div className="section-heading">
            <span className="section-number">02 / EXPERIENCE</span>
                          <h2>
                Experience
                <br />
                <span className="muted-heading">so far.</span>
              </h2>
          </div>
          <div className="experience-list">
            <article className="experience-item">
              <div className="exp-date">2023 — PRESENT</div>
              <div className="exp-main">
                <div className="exp-title-row">
                  <h3>Web3 Content & Research</h3>
                  <span className="exp-type">INDEPENDENT</span>
                </div>
                <p>
                  I research Web3 projects and write posts about what they’re building, especially in RWA and DeFi.
                </p>
                <ul>
                  <li>Write explainers, project posts and opinions for X.</li>
                  <li>Keep up with new launches and changes across the space.</li>
                </ul>
                <div className="skill-pills">
                  <span>Research</span>
                  <span>Writing</span>
                  <span>RWA</span>
                  <span>DeFi</span>
                </div>
              </div>
              <span className="exp-arrow">
                <ArrowUpRight size={20} />
              </span>
            </article>
            <article className="experience-item">
              <div className="exp-date">MAY 2025 — PRESENT</div>
              <div className="exp-main">
                <div className="exp-title-row">
                  <h3>Community Assistant</h3>
                  <span className="exp-type">FIREWALL · REMOTE</span>
                </div>
                <p>
                  I help manage the Firewall community on Discord, with 12,000+ members.
                </p>
                <ul>
                  <li>Answer questions and help members work through issues.</li>
                  <li>Help organise AMAs, events and community activities.</li>
                  <li>Pass useful feedback from members to the team.</li>
                </ul>
                <div className="skill-pills">
                  <span>Community Ops</span>
                  <span>Moderation</span>
                  <span>Events</span>
                </div>
              </div>
              <span className="exp-arrow">
                <ArrowUpRight size={20} />
              </span>
            </article>
            <article className="experience-item">
              <div className="exp-date">MAR 2025 — PRESENT</div>
              <div className="exp-main">
                <div className="exp-title-row">
                  <h3>Ambassador</h3>
                  <span className="exp-type">BLESS NETWORK · REMOTE</span>
                </div>
                                <p>
                  I help people get involved with Bless and keep up with what’s happening in the project.
                </p>
                <ul>
                  <li>Answer questions and help troubleshoot issues.</li>
                  <li>Make posts and creative assets for campaigns.</li>
                  <li>Help run community activities and content challenges.</li>
                </ul>
                <div className="skill-pills">
                  <span>Community</span>
                  <span>Content</span>
                  <span>Campaigns</span>
                </div>
              </div>
              <span className="exp-arrow">
                <ArrowUpRight size={20} />
              </span>
            </article>
          </div>
        </section>
        <section className="stats-band">
          <div>
            <strong>
              12K<span>+</span>
            </strong>
            <span>COMMUNITY MEMBERS SUPPORTED</span>
          </div>
          <div>
            <strong>2023</strong>
            <span>STARTED CREATING WEB3 CONTENT</span>
          </div>
          <div>
            <strong>
              3<span>+</span>
            </strong>
            <span>YEARS OF COMMUNITY & CONTENT JOURNEY*</span>
          </div>
        </section>
        <section className="section-wrap work-section" id="work">
          <div className="section-heading">
            <span className="section-number">03 / SELECTED WORK</span>
                          <h2>
                Things I’ve
                <br />
                <span className="muted-heading">been writing about.</span>
              </h2>
          </div>
          <p className="section-intro">
            A couple of topics I’ve been digging into lately — and the questions
            behind the headlines.
          </p>
          <div className="work-grid">
            <article className="work-card">
              <div className="work-card-top">
                <span className="work-index">01</span>
                <span className="work-category">
                  RWA / TOKENIZED REAL ESTATE
                </span>
                <BookOpen size={18} />
              </div>
              <div className="work-visual property-visual">
                <div className="building building-back"></div>
                <div className="building building-front"></div>
                <div className="property-token">
                  PROPERTY
                  <br />
                  <strong>ONCHAIN</strong>
                </div>
                <div className="visual-grid"></div>
              </div>
              <div className="work-card-content">
                <h3>What does owning a tokenized property actually mean?</h3>
                <p>
                  A closer look at what a token holder actually owns, how the legal structure works, and why the token alone doesn’t tell the whole story.
                </p>
                <div className="work-footer">
                  <span>RESEARCH NOTE</span>
                  <span>
                    RWA <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </article>
            <article className="work-card">
              <div className="work-card-top">
                <span className="work-index">02</span>
                <span className="work-category">
                  MARKET STRUCTURE / TOKENIZATION
                </span>
                <Globe2 size={18} />
              </div>
              <div className="work-visual market-visual">
                <div className="market-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <svg
                  viewBox="0 0 500 180"
                  preserveAspectRatio="none"
                  aria-label="Abstract market line"
                >
                  <path
                    d="M0 145 C45 142 60 92 98 110 S150 135 182 80 S242 100 278 58 S330 83 365 34 S430 55 500 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    d="M0 145 C45 142 60 92 98 110 S150 135 182 80 S242 100 278 58 S330 83 365 34 S430 55 500 12 L500 180 L0 180Z"
                    fill="currentColor"
                    opacity=".08"
                  />
                </svg>
                <span className="market-tag">SETTLEMENT → ONCHAIN</span>
              </div>
              <div className="work-card-content">
                <h3>What happens after a stock trade?</h3>
                <p>
                  What happens between buying a stock and actually receiving it? I’ve been looking into the settlement side of markets and where tokenization fits.
                </p>
                <div className="work-footer">
                  <span>RESEARCH NOTE</span>
                  <span>
                    MARKETS <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="section-wrap skills-section">
          <div className="section-heading">
            <span className="section-number">04 / TOOLKIT</span>
            <h2>
              What I bring
              <br />
              <span className="muted-heading">to the table.</span>
            </h2>
          </div>
          <div className="toolkit-grid">
            <div className="toolkit-item">
              <span className="toolkit-icon">
                <Globe2 size={20} />
              </span>
              <div>
                <h3>Web3 & Finance</h3>
                <p>RWA · Tokenization · DeFi · Blockchain</p>
              </div>
            </div>
            <div className="toolkit-item">
              <span className="toolkit-icon">
                <FileText size={20} />
              </span>
              <div>
                <h3>Content & Research</h3>
                <p>Web3 research · Content writing · Social content</p>
              </div>
            </div>
            <div className="toolkit-item">
              <span className="toolkit-icon">
                <BriefcaseBusiness size={20} />
              </span>
              <div>
                <h3>Community</h3>
                <p>Community management · User support · Moderation · Event coordination</p>
              </div>
            </div>
            <div className="toolkit-item">
              <span className="toolkit-icon">
                <Globe2 size={20} />
              </span>
              <div>
                <h3>Platforms & Productivity</h3>
                <p>Discord · X · LinkedIn · Microsoft Office · Google Workspace</p>
              </div>
            </div>
          </div>
          <div className="education-row">
            <div>
              <span className="section-number">EDUCATION</span>
              <h3>B.Com in Finance</h3>
              <p>IGNOU · 2025 — Present</p>
            </div>
            <div>
              <span className="section-number">LANGUAGES</span>
              <h3>Hindi & English</h3>
              <p>Hindi — Native · English — Professional working proficiency</p>
            </div>
          </div>
        </section>
        <section className="section-wrap posts-section" id="posts">
          <div className="posts-heading">
            <div>
              <span className="section-number">05 / X</span>
              <h2>Recent posts</h2>
              <p>A few things I’ve posted on X lately.</p>
            </div>
            <a
              className="secondary-btn"
              href={socials.x}
              target="_blank"
              rel="noreferrer"
            >
              Follow on X <ArrowUpRight size={15} />
            </a>
          </div>
          {posts.length ? (
            <>
              <div className="post-rail-controls">
                <span>
                  {String(Math.min(postIndex + 1, posts.length)).padStart(
                    2,
                    '0'
                  )}{' '}
                  <span className="muted">
                    / {String(posts.length).padStart(2, '0')}
                  </span>
                </span>
                <div>
                  <button
                    className="rail-btn"
                    onClick={() => setPostIndex(Math.max(0, postIndex - 1))}
                    disabled={postIndex === 0}
                    aria-label="Previous post"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    className="rail-btn"
                    onClick={() =>
                      setPostIndex(Math.min(posts.length - 1, postIndex + 1))
                    }
                    disabled={postIndex >= posts.length - 1}
                    aria-label="Next post"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              <div className="post-rail">
                <div
                  className="post-track"
                  style={{
                    transform: 'translateX(-' + postIndex * 340 + 'px)',
                  }}
                >
                  {posts.map(post => (
                    <article className="tweet-card" key={post.id}>
                      <div className="tweet-card-top">
                        <span className="x-symbol">𝕏</span>
                        <span>POST / {post.id.slice(0, 6).toUpperCase()}</span>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Open post on X"
                        >
                          <ExternalLink size={15} />
                        </a>
                      </div>
                      <blockquote
                        className="twitter-tweet"
                        data-theme="dark"
                        data-dnt="true"
                      >
                        <a href={post.url}>View this post on X</a>
                      </blockquote>
                    </article>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="posts-empty">
              <div className="empty-x">𝕏</div>
              <div>
                <strong>The timeline starts here.</strong>
                <p>My selected X posts will live here as original embeds.</p>
              </div>
              <a href={socials.x} target="_blank" rel="noreferrer">
                Visit my profile <ArrowUpRight size={14} />
              </a>
            </div>
          )}
        </section>
        <section className="contact-section">
          <div className="contact-inner">
            <span className="section-number">06 / LET’S CONNECT</span>
            <h2>
              Want to work<br />
              <span className="gradient-text">together?</span>
            </h2>
            <p>
              If you’re building in Web3 and need help with content or community, feel free to reach out.
            </p>
            <a className="primary-btn" href="mailto:voidwatcher08@gmail.com">
              Start a conversation <ArrowUpRight size={16} />
            </a>
            <div className="contact-decoration">V.</div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand" href="#top">
          <span className="brand-mark">V</span>
          <span>
            voidwatcher<span className="brand-dot">.</span>
          </span>
        </a>
        <span>Built around curiosity. Powered by late-night research.</span>
        <div>
          <a href={socials.x} target="_blank" rel="noreferrer" aria-label="X">
            <img className="footer-social-logo" src="/resources/x-logo.png" alt="X" />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img className="footer-social-logo" src="/resources/linkedin-logo.png" alt="LinkedIn" />
          </a>
          <a href={socials.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
            <img className="footer-social-logo" src="/resources/telegram-logo.png" alt="Telegram" />
          </a>
          <a href="mailto:voidwatcher08@gmail.com">
            <Mail size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
