import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import ProtectedEmailButton from "../components/ProtectedEmailButton";

export const metadata: Metadata = {
  title: "Privacy Policy | RaterJob",
  description: "How RaterJob handles personal data and protects visitor privacy.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This notice explains what personal data may be processed when you visit RaterJob, why it is processed, who may receive it, and the rights available to you under the General Data Protection Regulation (GDPR)."
    >
      <section className="legal-section">
        <h2>1. Data controller and contact</h2>
        <p><strong>Controller:</strong> the operator of RaterJob, an independent editorial project established in Italy.</p>
        <p><strong>Privacy contact:</strong> <ProtectedEmailButton className="protected-inline-email">Email RaterJob</ProtectedEmailButton>.</p>
        <p>The operator&apos;s statutory identification details are listed in the <a href="/legal">Legal Notice</a>.</p>
      </section>

      <section className="legal-section">
        <h2>2. Data processed when you visit</h2>
        <p>The website does not offer user accounts, comments, direct application forms, or a newsletter. It does not currently use advertising pixels or behavioural analytics.</p>
        <h3>Technical connection data</h3>
        <p>The hosting infrastructure may automatically process information required to deliver and secure the website, such as IP address, date and time, requested URL, browser and device information, referrer, and diagnostic or security events.</p>
        <h3>Messages sent by email</h3>
        <p>If you contact RaterJob by email, the address, message, attachments, and any information you voluntarily provide will be processed to respond to you and manage the correspondence.</p>
      </section>

      <section className="legal-section">
        <h2>3. Purposes and legal bases</h2>
        <ul>
          <li><strong>Website delivery, reliability, and security:</strong> legitimate interests in operating and protecting the service.</li>
          <li><strong>Responding to enquiries:</strong> steps taken at your request and legitimate interests in managing communications.</li>
          <li><strong>Compliance and dispute handling:</strong> compliance with legal obligations and establishment, exercise, or defence of legal claims where necessary.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>4. Service providers and recipients</h2>
        <p>RaterJob is hosted through Vercel. The site also loads technical presentation resources from Google Fonts and Tailwind CSS CDN. These providers may receive technical request data, including an IP address and browser information, when their resources are requested.</p>
        <p>Personal data may also be disclosed to professional advisers, competent authorities, or service providers when necessary and legally permitted. RaterJob does not sell personal data.</p>
      </section>

      <section className="legal-section">
        <h2>5. External links and referrals</h2>
        <p>The website links to independent job and payment platforms. When you follow an external link, the destination provider processes data under its own privacy policy. Some links may be referral links; this does not give RaterJob access to your application or account data unless a provider reports an aggregated referral event.</p>
      </section>

      <section className="legal-section">
        <h2>6. International transfers</h2>
        <p>Some technology providers or linked platforms may process data outside the European Economic Area. Where GDPR applies, transfers must rely on an applicable adequacy decision or appropriate safeguards such as the European Commission&apos;s Standard Contractual Clauses, as described by the relevant provider.</p>
      </section>

      <section className="legal-section">
        <h2>7. Retention</h2>
        <p>Technical logs are retained according to the hosting provider&apos;s security and operational settings. Email correspondence is kept only as long as needed to answer and manage the enquiry, normally no longer than 24 months, unless a longer period is required for legal or security reasons.</p>
      </section>

      <section className="legal-section">
        <h2>8. Your GDPR rights</h2>
        <p>Depending on the circumstances, you may request access, rectification, erasure, restriction, or portability of your personal data, and you may object to processing based on legitimate interests. Where consent is used, you may withdraw it at any time without affecting earlier lawful processing.</p>
        <p>To exercise a right, select <ProtectedEmailButton className="protected-inline-email">Email RaterJob</ProtectedEmailButton>. You may also lodge a complaint with the <a href="https://www.garanteprivacy.it/" target="_blank" rel="noopener noreferrer">Italian Data Protection Authority (Garante)</a> or another competent supervisory authority.</p>
      </section>

      <section className="legal-section">
        <h2>9. Security, children, and updates</h2>
        <p>Reasonable technical and organisational measures are used to protect information, but no internet transmission is completely risk-free. RaterJob is not directed to children and does not knowingly collect information from children. This notice may be updated when the website, providers, or legal requirements change.</p>
      </section>
    </LegalPage>
  );
}
