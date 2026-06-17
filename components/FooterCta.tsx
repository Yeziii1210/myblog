import { siteContent } from "@/data/site-content";

export function FooterCta() {
  const { footer, masthead, chrome } = siteContent;
  return (
    <footer className="footer-cta">
      <div className="footer-inner">
        <span className="footer-eyebrow">{footer.eyebrow}</span>
        <h2 className="footer-title">{footer.title}</h2>
        <p className="footer-sub">{footer.sub}</p>
        <div className="footer-actions">
          {footer.actions.map((action) => (
            <a key={action.href} href={action.href} className="footer-btn">
              {action.label}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-colophon">
        <span className="footer-script">{masthead.script}</span>
        <span className="footer-meta">
          {chrome.badge} · {chrome.issue}
        </span>
      </div>
    </footer>
  );
}
