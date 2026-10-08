import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import ProtectedEmailButton from "../components/ProtectedEmailButton";

export const metadata: Metadata = {
  title: "Legal Notice & Referral Disclosure | RaterJob",
  description: "Legal information, editorial disclaimer, and referral disclosure for RaterJob.",
  alternates: { canonical: "/legal" },
};

export default function LegalNoticePage() {
  return (
    <LegalPage
      title="Legal Notice"
      intro="RaterJob is an independent informational project about remote AI evaluation, data annotation, localization, writing, and related contractor opportunities. It is not a recruitment agency and does not employ applicants."
    >
      <section className="legal-section legal-alert">
        <h2>Site operator details</h2>
        <p><strong>Project:</strong> RaterJob</p>
        <p><strong>Country of establishment:</strong> Italy</p>
        <p><strong>Email:</strong> <ProtectedEmailButton className="protected-inline-email">Email RaterJob</ProtectedEmailButton></p>
        <p><strong>Before publishing this legal page:</strong> add the operator&apos;s legal name or registered business name, geographic address, and VAT/registration details if applicable. These details cannot be invented and are required in some cases for commercial information-society services.</p>
      </section>

      <section className="legal-section">
        <h2>Editorial independence and referrals</h2>
        <p>Some outbound links are referral or affiliate links. RaterJob may receive a bonus if a visitor registers or qualifies through one of these links, at no additional cost to the visitor. Referral relationships do not guarantee a positive recommendation or influence the stated assessment of a platform.</p>
      </section>

      <section className="legal-section">
        <h2>No employment or income guarantee</h2>
        <p>RaterJob does not control recruitment decisions, project availability, assessments, pay rates, working conditions, account status, or payment timing. Platform details can change by country, client, and project. Visitors should verify current terms directly with each provider before applying or accepting work.</p>
      </section>

      <section className="legal-section">
        <h2>Informational content</h2>
        <p>Content is provided for general informational purposes and is not legal, tax, financial, immigration, or employment advice. Independent contractors remain responsible for checking the laws, tax obligations, and contractual rules applicable in their jurisdiction.</p>
      </section>

      <section className="legal-section">
        <h2>External websites</h2>
        <p>External websites are operated by independent third parties. RaterJob is not responsible for their availability, content, privacy practices, security, application process, or contractual terms. A link does not imply ownership or control.</p>
      </section>

      <section className="legal-section">
        <h2>Intellectual property and corrections</h2>
        <p>Original RaterJob text, graphics, and branding may not be reproduced for commercial use without permission. Third-party names and trademarks belong to their respective owners and are used only for identification. For corrections or rights-related requests, select <ProtectedEmailButton className="protected-inline-email">Email RaterJob</ProtectedEmailButton>.</p>
      </section>
    </LegalPage>
  );
}
