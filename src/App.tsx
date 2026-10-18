const email = 'voidwatcher08@gmail.com';
const socials = [
  ['X / Twitter', 'https://x.com/voidwatchr?s=11'],
  ['LinkedIn', 'https://www.linkedin.com/in/anshuman-singh0811'],
  ['Telegram', 'https://t.me/voidwatchr'],
] as const;
const experience = [
  ['2023 — Present', 'Independent Web3 Research & Content', 'Writing research-led stories about tokenization, onchain markets, and the projects shaping financial infrastructure.'],
  ['May 2025 — Present', 'Community Assistant · Firewall', 'Supporting a 12,000+ member Discord community through member communication, events, and practical problem-solving.'],
  ['Mar 2025 — Present', 'Ambassador · Bless Network', 'Helping new members get oriented while contributing campaign content and community activations.'],
] as const;
const writing = [
  ['RWA / MARKET STRUCTURE', 'Tokenized treasuries as financial infrastructure', 'https://x.com/voidwatchr/status/2110815581045989539'],
  ['ONCHAIN CREDIT', 'What tokenized credit needs to work', 'https://x.com/voidwatchr/status/2109598729875697944'],
  ['TOKENIZATION', 'Why companies bring treasury bills onchain', 'https://x.com/voidwatchr/status/2110118213430452566'],
] as const;
const Arrow = () => <span aria-hidden="true">↗</span>;

function App() {
  return <div className="site">
    <header className="header shell"><a className="wordmark" href="#top">VOIDWATCHER<span>®</span></a><nav><a href="#work">Work</a><a href="#writing">Writing</a><a href={`mailto:${email}`}>Contact</a></nav></header>
    <main id="top">
      <section className="hero shell">
        <div><p className="eyebrow">WEB3 RESEARCH · CONTENT · COMMUNITY</p><h1>Making onchain finance easier to understand.</h1><p className="lede">I’m Anshuman, a Web3 researcher and community operator. I write clear, human stories about real-world assets, tokenization, and the people building new financial infrastructure.</p><div className="actions"><a className="button primary" href="#writing">Read my writing <Arrow /></a><a className="button" href={`mailto:${email}`}>Start a conversation <Arrow /></a></div></div>
        <aside className="profile"><img src="/resources/voidwatcher-profile.jpeg" alt="Anshuman, known as VoidWatcher" /><div><p className="eyebrow">BASED ONLINE · WORKING GLOBALLY</p><strong>Anshuman Singh</strong><small>Web3 researcher & community operator</small></div></aside>
      </section>
      <section className="proof shell"><div><strong>2023</strong><span>Started creating in Web3</span></div><div><strong>12K+</strong><span>Community members supported</span></div><div><strong>RWA</strong><span>Current research focus</span></div></section>
      <section className="section shell" id="work"><p className="label">01 / WHAT I DO</p><div><h2>Useful ideas deserve clear writing.</h2><div className="prose"><p>I research projects, identify what matters, and turn the work into content people can actually follow. My focus is the connection between traditional markets and onchain tools.</p><p>Alongside writing, I help communities stay informed, supported, and active — from day-to-day questions to campaigns and events.</p><ul><li>RWA & tokenization research</li><li>Web3 content & storytelling</li><li>Community operations & moderation</li><li>Campaigns, AMAs & member support</li></ul></div></div></section>
      <section className="section shell"><p className="label">02 / EXPERIENCE</p><div>{experience.map(([period, role, description]) => <article className="experience" key={role}><p>{period}</p><div><h3>{role}</h3><p>{description}</p></div></article>)}</div></section>
      <section className="section shell" id="writing"><p className="label">03 / SELECTED WRITING</p><div><div className="section-head"><h2>Research, in public.</h2><a href={socials[0][1]} target="_blank" rel="noreferrer">Follow on X <Arrow /></a></div><div className="writing">{writing.map(([topic,title,href], index) => <a href={href} key={href} target="_blank" rel="noreferrer"><span>{String(index + 1).padStart(2,'0')}</span><div><p>{topic}</p><h3>{title}</h3></div><Arrow /></a>)}</div></div></section>
      <section className="contact shell"><p className="label">04 / CONTACT</p><div><h2>Have a story worth telling?</h2><p>Open to Web3 writing, RWA content, research, and community collaborations.</p><a href={`mailto:${email}`}>{email} <Arrow /></a></div></section>
    </main>
    <footer className="footer shell"><span>© {new Date().getFullYear()} VOIDWATCHER</span><div>{socials.map(([label,href]) => <a href={href} key={label} target="_blank" rel="noreferrer">{label}</a>)}</div></footer>
  </div>;
}
export default App;

