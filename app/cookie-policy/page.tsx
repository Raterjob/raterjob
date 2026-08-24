import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import ProtectedEmailButton from "../components/ProtectedEmailButton";

export const metadata: Metadata = {
  title: "Cookie Policy | RaterJob",
  description: "Information about cookies and tracking technologies used by RaterJob.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="RaterJob is currently designed without behavioural advertising, profiling cookies, or visitor analytics. A short information notice is shown for transparency, while this page explains the present configuration and when consent controls would become necessary."
    >
      <section className="legal-section">
        <h2>1. Current cookie use</h2>
        <p>RaterJob does not currently set first-party analytics, advertising, personalisation, or profiling cookies. The website does not use fingerprinting or similar technologies to follow visitors across websites.</p>
        <p>Hosting and security infrastructure may use strictly necessary technical mechanisms to deliver pages, balance traffic, prevent abuse, or protect the service. These mechanisms are not used by RaterJob for advertising or behavioural profiling.</p>
      </section>

      <section className="legal-section">
        <h2>2. External technical resources</h2>
        <p>To display the chosen typography and interface, pages may request files from Google Fonts and Tailwind CSS CDN. Such network requests can expose technical information, including an IP address and browser headers, to those providers. RaterJob does not use these requests to build visitor profiles.</p>
      </section>

      <section className="legal-section">
        <h2>3. Cookie notice and consent</h2>
        <p>RaterJob displays a short cookie information notice and stores its dismissal locally on your device. Because the current site does not use non-essential cookies or tracking tools, this notice is not a consent interface. Italian guidance allows information about technical tools to be provided in the general privacy or cookie notice without requiring consent.</p>
      </section>

      <section className="legal-section">
        <h2>4. Future changes</h2>
        <p>If RaterJob later introduces analytics, embedded media, advertising, or other non-essential tracking, those technologies will be blocked until the visitor makes a choice through a consent interface where required. This policy and the date above will also be updated.</p>
      </section>

      <section className="legal-section">
        <h2>5. Browser controls and contact</h2>
        <p>You can inspect, block, or remove cookies through your browser settings. Blocking strictly necessary technical functions may affect site delivery. For questions, select <ProtectedEmailButton className="protected-inline-email">Email RaterJob</ProtectedEmailButton>.</p>
      </section>
    </LegalPage>
  );
}
