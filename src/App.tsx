import { useEffect, useState } from "react";

const posts = [
  "https://x.com/voidwatchr/status/2110900001706778888",
  "https://x.com/voidwatchr/status/2096864187507204548",
  "https://x.com/voidwatchr/status/2111286480656277665",
  "https://x.com/voidwatchr/status/2110815581045989539",
  "https://x.com/voidwatchr/status/2110118213430452566",
  "https://x.com/voidwatchr/status/2109598729875697944",
  "https://x.com/voidwatchr/status/2108553518294720793",
];

declare global {
  interface Window { twttr?: { widgets?: { load: () => void } } }
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="wrap top"><a className="brand" href="#home" onClick={close}>VOIDWATCHER<small>WRITING / RESEARCH / WEB3</small></a><button className="menu" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "close ×" : "menu +"}</button><nav className={`nav ${open ? "open" : ""}`}><a href="#about" onClick={close}>About</a><a href="#experience" onClick={close}>Experience</a><a href="#writing" onClick={close}>Writing</a><a href="#services" onClick={close}>What I do</a><a className="contact-link" href="#contact" onClick={close}>Contact</a></nav></header>;
}
function Hero() {
  return <><section className="wrap hero" id="home"><div><div className="eyebrow">Independent Creator · Since 2023</div><h1>Making sense of <em>what moves onchain.</em></h1><p className="intro">I write about the part of Web3 that’s moving beyond tokens on a screen: real assets, markets and money finding their way onchain. Lately, that’s meant spending a lot of time on RWA and figuring out what actually matters beyond the headline.</p><div className="actions"><a className="btn primary" href="#writing">Explore my writing</a><a className="btn" href="#contact">Work with me</a></div><div className="micro">RWA / Tokenization / Onchain finance</div></div><div className="visual"><div className="portrait-frame"><img src="./resources/voidwatcher-profile.jpeg" alt="VoidWatcher profile picture" /></div><div className="portrait-caption">Researching in public<br/><span>Currently focused on RWA</span></div></div></section><div className="strip"><div className="wrap strip-inner"><span>real-world assets</span><span>tokenization</span><span>onchain finance</span><span>community</span></div></div></>;
}
function About() {
  return <section className="section" id="about"><div className="wrap"><div className="section-head"><div><div className="section-num">01 / About</div><h2>Curiosity first.<br/>Clarity always.</h2></div><p className="section-desc">Most of my time goes into RWA: what’s being tokenized, who’s building around it, and whether any of it changes how people use financial products.</p></div><div className="about-layout"><div className="text-panel"><p>I got into Web3 in 2023 through communities and content. The more I researched different projects, the more i wanted to understand what was happening beyond the usual token talk. That’s how I ended up focusing on RWAs.</p><p>I usually start with a simple question: Why should anyone care about this? Then I dig through the details and try to turn them into something you’d actually stop scrolling to read.</p></div><div className="focus-panel"><div className="focus-title">Areas I work around</div><div className="focus-list"><span>RWA & tokenization</span><span>Research-led content</span><span>X posts & threads</span><span>Web3 storytelling</span><span>Community operations</span><span>Creator support</span></div></div></div></div></section>;
}
function Experience() {
  return <section className="section" id="experience"><div className="wrap"><div className="section-head"><div><div className="section-num">02 / Experience</div><h2>Work in progress.<br/>Real experience.</h2></div><p className="section-desc">I’ve spent time on both sides of Web3: making content and helping the communities around projects run.</p></div><div className="timeline"><time>2023 — PRESENT</time><div><h3>Independent Web3 Research & Content</h3><p>I research projects and turn what I find into X posts, explainers and longer pieces. RWA is my main focus now, and I’m building my understanding of the space by writing about it consistently.</p></div></div><div className="timeline"><time>MAY 2025 — PRESENT</time><div><h3>Moderator in Firewall</h3><p>I help moderate a Discord community of 12,000+ members, support onboarding and member issues, handle escalations, and help with AMAs, events and engagement.</p></div></div><div className="timeline"><time>MAR 2025 — PRESENT</time><div><h3>Ambassador at Bless Network</h3><p>I help community members understand project updates, troubleshoot common issues and participate in campaigns and community-made content.</p></div></div></div></section>;
}
function Writing() {
  useEffect(() => {
    if (window.twttr?.widgets) { window.twttr.widgets.load(); return; }
    if (document.querySelector('script[data-x-widgets="true"]')) return;
    const script = document.createElement("script"); script.src = "https://platform.twitter.com/widgets.js"; script.async = true; script.charset = "utf-8"; script.dataset.xWidgets = "true"; document.body.appendChild(script);
  }, []);
  return <section className="section" id="writing"><div className="wrap"><div className="writing-top"><div><div className="section-num">03 / Writing</div><h2>Some things I’ve<br/>put into words.</h2></div><p className="section-desc">A few places to start if you want to get a feel for what I write. The posts are embedded below; the longer reads open on X.</p></div><div className="article-links"><a className="article-link" href="https://x.com/voidwatchr" target="_blank" rel="noreferrer"><span><small>LONG-FORM / RWA</small><strong>Read my RWA articles on X</strong></span><span className="mark">↗</span></a><a className="article-link" href="https://x.com/voidwatchr" target="_blank" rel="noreferrer"><span><small>NOTES / EXPLAINERS</small><strong>Browse more writing on X</strong></span><span className="mark">↗</span></a></div><div className="post-grid">{posts.map((url, i) => <article className="post-card" key={url}><p className="post-fallback">POST / {String(i + 1).padStart(2, "0")} · <a href={url} target="_blank" rel="noreferrer">open on X</a></p><blockquote className="twitter-tweet"><a href={url}/></blockquote></article>)}</div><p className="post-fallback">If an embed is unavailable, the original post link remains available.</p></div></section>;
}
function Services() {
  return <section className="section" id="services"><div className="wrap"><div className="section-head"><div><div className="section-num">04 / What I do</div><h2>Content, research<br/>& community.</h2></div><p className="section-desc">I work across Web3 content and community support — from making RWA and DeFi easier to understand to helping communities stay useful, welcoming and active.</p></div><div className="services"><article className="service"><div className="n">01 — RESEARCH & WRITE</div><h3>Web3 content</h3><p>Research projects and topics around RWA, tokenization, DeFi and onchain finance, then turn updates and financial concepts into clear posts and explainers.</p></article><article className="service"><div className="n">02 — MODERATE & SUPPORT</div><h3>Community moderation</h3><p>Moderate conversations, help members with onboarding and issues, handle escalations, and keep discussions useful and within community guidelines.</p></article><article className="service"><div className="n">03 — EVENTS & ENGAGEMENT</div><h3>Community support</h3><p>Support AMAs and online events, encourage participation in campaigns and community-made content, and pass member feedback back to the team.</p></article></div></div></section>;
}
function Contact() {
  return <section className="section" id="contact"><div className="wrap"><div className="contact-panel"><div className="copy"><div className="section-num">05 / Contact</div><h2>Let’s build something<br/>worth people’s time.</h2><p>If you’re working on something in RWA or Web3 and need help with writing or community, feel free to reach out.</p></div><a className="btn primary" href="https://t.me/voidwatchr" target="_blank" rel="noreferrer">Let’s connect</a></div></div></section>;
}
export default function App() {
  return <><Header/><main><Hero/><About/><Experience/><Writing/><Services/><Contact/></main><footer className="wrap footer"><span>© {new Date().getFullYear()} VOIDWATCHER</span><span>Made for the onchain world</span><a href="#home">Back to top</a></footer></>;
}