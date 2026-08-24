import type { ReactNode } from "react";
import ProtectedEmailButton from "./ProtectedEmailButton";

export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="legal-page">
      <header className="roles-nav">
        <a href="/" className="roles-brand" aria-label="RaterJob home">
          <img src="/favicon-rounded.png" alt="" />
          <span>Rater<i>Job</i></span>
        </a>
        <nav aria-label="Legal navigation">
          <a href="/">Home</a>
          <a href="/privacy">Privacy</a>
          <a href="/cookie-policy">Cookies</a>
        </nav>
      </header>

      <article className="legal-wrap">
        <h1>{title}</h1>
        <div className="legal-updated">Last updated · 21 August 2026</div>
        <p className="legal-intro">{intro}</p>
        <div className="legal-content">{children}</div>
      </article>

      <footer className="legal-footer">
        <a href="/">© 2026 RaterJob</a>
        <div className="roles-footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/cookie-policy">Cookie Policy</a>
          <a href="/legal">Legal Notice</a>
          <ProtectedEmailButton className="protected-inline-email">Email RaterJob</ProtectedEmailButton>
        </div>
      </footer>
    </main>
  );
}
