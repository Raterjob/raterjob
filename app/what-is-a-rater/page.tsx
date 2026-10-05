import type { Metadata } from "next";
import ProtectedEmailButton from "../components/ProtectedEmailButton";
import RolesNavigation from "../components/RolesNavigation";

export const metadata: Metadata = {
  title: "What Is a Rater? 12 Remote AI Rater Jobs Explained | RaterJob",
  description:
    "Learn what a rater does and compare 12 remote AI roles, including search quality, LLM evaluation, data annotation, translation, audio recording, transcription, prompt design, and coding evaluation.",
  alternates: { canonical: "/what-is-a-rater" },
  openGraph: {
    title: "What Is a Rater? 12 Remote AI Rater Jobs Explained",
    description:
      "A practical guide to remote AI rating, annotation, language, writing, prompt, and coding roles.",
    url: "/what-is-a-rater",
    type: "article",
  },
};

const roles = [
  {
    number: "01",
    title: "Search Quality Rater",
    summary:
      "Evaluates whether search results satisfy a user's query, intent, language, and location. The work often follows detailed quality and relevance guidelines.",
    tasks: ["Judge relevance and usefulness", "Identify low-quality or misleading pages", "Apply locale-specific guidelines"],
    fit: "Web research, cultural knowledge, analytical judgment",
    platforms: [
      ["TELUS Digital", "https://www.telusdigital.com/careers/ai-community"],
      ["Welocalize", "https://www.welocalize.com/careers/"],
      ["RWS TrainAI", "https://www.rws.com/careers/"],
    ],
  },
  {
    number: "02",
    title: "Ads Quality Rater",
    summary:
      "Reviews the relevance, usefulness, and appropriateness of advertisements in relation to a search query, landing page, audience, and local market.",
    tasks: ["Compare ads with user intent", "Review landing-page quality", "Flag policy or cultural concerns"],
    fit: "Advertising awareness, research, attention to detail",
    platforms: [
      ["Welocalize", "https://www.welocalize.com/careers/"],
      ["TELUS Digital", "https://www.telusdigital.com/careers/ai-community"],
      ["Appen", "https://appen.com/jobs/"],
    ],
  },
  {
    number: "03",
    title: "LLM Evaluator",
    summary:
      "Compares and scores responses produced by large language models for accuracy, relevance, safety, reasoning, style, and overall usefulness.",
    tasks: ["Rank competing AI responses", "Fact-check claims and citations", "Explain errors using a rubric"],
    fit: "Critical thinking, subject expertise, precise writing",
    platforms: [
      ["Outlier", "https://app.outlier.ai/expert/referrals/link/jVRTouTosIEqzw-6nWNWyw1obOs"],
      ["DataAnnotation", "https://www.dataannotation.tech/"],
      ["Alignerr", "https://www.alignerr.com/"],
      ["Mercor", "https://t.mercor.com/cS0vH"],
    ],
  },
  {
    number: "04",
    title: "AI Writing Evaluator",
    summary:
      "Reviews AI-generated writing for clarity, accuracy, tone, structure, naturalness, and adherence to instructions, often rewriting weak answers.",
    tasks: ["Score style and instruction-following", "Rewrite or improve responses", "Create reference answers"],
    fit: "Writing, editing, translation, domain knowledge",
    platforms: [
      ["Outlier", "https://app.outlier.ai/expert/referrals/link/jVRTouTosIEqzw-6nWNWyw1obOs"],
      ["Mindrift", "https://www.mindrift.ai/"],
      ["DataAnnotation", "https://www.dataannotation.tech/"],
    ],
  },
  {
    number: "05",
    title: "Data Annotator",
    summary:
      "Labels and structures text, images, audio, or video so machine-learning systems can learn from consistent human examples.",
    tasks: ["Classify and tag content", "Draw image or video boundaries", "Review and correct annotations"],
    fit: "Consistency, concentration, visual or linguistic accuracy",
    platforms: [
      ["OneForma", "https://www.oneforma.com/"],
      ["Appen", "https://appen.com/jobs/"],
      ["RWS TrainAI", "https://www.rws.com/careers/"],
    ],
  },
  {
    number: "06",
    title: "Prompt Evaluator",
    summary:
      "Tests prompts and the resulting AI outputs to determine whether instructions are clear, robust, safe, and capable of producing the intended result.",
    tasks: ["Test prompt variations", "Find ambiguous instructions", "Score output quality and consistency"],
    fit: "Analytical writing, experimentation, evaluation experience",
    platforms: [
      ["Outlier", "https://app.outlier.ai/expert/referrals/link/jVRTouTosIEqzw-6nWNWyw1obOs"],
      ["Mindrift", "https://www.mindrift.ai/"],
      ["Mercor", "https://t.mercor.com/cS0vH"],
    ],
  },
  {
    number: "07",
    title: "Prompt Designer",
    summary:
      "Designs and optimizes prompt systems, examples, evaluation cases, and instruction hierarchies for reliable AI-assisted workflows.",
    tasks: ["Write structured prompt specifications", "Build test cases and edge cases", "Optimize prompts through iteration"],
    fit: "Prompt engineering, UX writing, workflow design",
    platforms: [
      ["Mindrift", "https://www.mindrift.ai/"],
      ["Mercor", "https://t.mercor.com/cS0vH"],
      ["Outlier", "https://app.outlier.ai/expert/referrals/link/jVRTouTosIEqzw-6nWNWyw1obOs"],
    ],
  },
  {
    number: "08",
    title: "Localization Quality Evaluator",
    summary:
      "Checks whether AI or digital content is linguistically correct, culturally natural, locally appropriate, and consistent with the target market.",
    tasks: ["Review language and terminology", "Assess cultural relevance", "Identify localization and tone issues"],
    fit: "Bilingual fluency, translation, cultural expertise",
    platforms: [
      ["OneForma", "https://www.oneforma.com/"],
      ["Welocalize", "https://www.welocalize.com/careers/"],
      ["RWS TrainAI", "https://www.rws.com/careers/"],
    ],
  },
  {
    number: "09",
    title: "Translator / AI Translation Reviewer",
    summary:
      "Translates, post-edits, and reviews human- or AI-generated content so meaning, tone, terminology, and cultural intent remain accurate in the target language.",
    tasks: ["Translate and post-edit content", "Review machine translation quality", "Maintain terminology and style consistency"],
    fit: "Bilingual fluency, translation, editing, subject expertise",
    platforms: [
      ["OneForma", "https://www.oneforma.com/"],
      ["Welocalize", "https://www.welocalize.com/careers/"],
      ["RWS TrainAI", "https://www.rws.com/careers/"],
    ],
  },
  {
    number: "10",
    title: "Speech & Transcription Reviewer",
    summary:
      "Transcribes speech or checks machine-generated transcripts for accuracy, speaker attribution, timestamps, language, and audio events.",
    tasks: ["Correct automated transcripts", "Label speakers and audio events", "Validate pronunciation or speech data"],
    fit: "Listening accuracy, language skills, transcription experience",
    platforms: [
      ["OneForma", "https://www.oneforma.com/"],
      ["Appen", "https://appen.com/jobs/"],
      ["RWS TrainAI", "https://www.rws.com/careers/"],
    ],
  },
  {
    number: "11",
    title: "Audio Recording Project Contributor",
    summary:
      "Records voice prompts, scripted speech, or natural conversations that become consented speech datasets for training and evaluating audio AI systems.",
    tasks: ["Record prompts or guided conversations", "Follow audio and pronunciation guidelines", "Check sound quality before submission"],
    fit: "Clear speech, a quiet room, language fluency, careful instruction-following",
    platforms: [
      ["Babel Audio", "https://www.babel.audio/"],
      ["OneForma", "https://www.oneforma.com/"],
      ["Appen", "https://crowdgen.com/"],
    ],
  },
  {
    number: "12",
    title: "Coding / Software Engineering Evaluator",
    summary:
      "Evaluates AI-generated code, debugging steps, technical explanations, and software-engineering solutions for correctness, efficiency, and security.",
    tasks: ["Review and run generated code", "Compare technical solutions", "Find bugs, risks, and reasoning errors"],
    fit: "Programming, code review, software engineering",
    platforms: [
      ["Outlier", "https://app.outlier.ai/expert/referrals/link/jVRTouTosIEqzw-6nWNWyw1obOs"],
      ["Turing", "https://www.turing.com/"],
      ["Mercor", "https://t.mercor.com/cS0vH"],
    ],
  },
] as const;

export default function WhatIsARaterPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Remote AI rater roles",
    itemListElement: roles.map((role, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: role.title,
      description: role.summary,
    })),
  };

  return (
    <main className="roles-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <RolesNavigation />

      <section className="roles-hero">
        <div>
          <span className="roles-kicker">RaterJob field guide · 12 remote roles</span>
          <h1>What Is<br />a Rater?</h1>
        </div>
        <div className="roles-definition">
          <p>
            A rater is a human evaluator who improves search engines,
            advertisements, AI models, and training data by applying clear
            guidelines and informed judgment. These remote AI rater jobs span
            language, writing, research, audio, design, and software.
          </p>
          <p>
            The title changes from project to project, but the core skill is
            the same: deciding what is accurate, relevant, useful, safe, and
            natural for real people.
          </p>
          <a className="roles-primary-button" href="#roles">Find your role ↓</a>
        </div>
      </section>

      <section className="roles-overview" aria-label="How rater work is organized">
        <div><strong>Human judgment</strong><span>Guidelines turn expertise into consistent decisions.</span></div>
        <div><strong>Remote projects</strong><span>Most opportunities are freelance or contractor-based.</span></div>
        <div><strong>Different specialties</strong><span>Language, writing, research, design, and coding all apply.</span></div>
      </section>

      <section id="roles" className="roles-list" aria-labelledby="roles-title">
        <div className="roles-list-heading">
          <span className="roles-kicker">Choose your direction</span>
          <h2 id="roles-title">12 roles you can apply for</h2>
          <p>Openings vary by country and project. Use the role descriptions to identify the closest match, then check more than one platform.</p>
        </div>

        <div className="role-cards">
          {roles.map((role) => (
            <article className="role-card" key={role.title}>
              <div className="role-card-title">
                <span>{role.number}</span>
                <h3>{role.title}</h3>
              </div>
              <p className="role-summary">{role.summary}</p>
              <div className="role-card-grid">
                <div>
                  <h4>Typical tasks</h4>
                  <ul>{role.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
                </div>
                <div>
                  <h4>Good fit for</h4>
                  <p>{role.fit}</p>
                </div>
              </div>
              <div className="role-platforms">
                <span>Common platforms</span>
                <div>
                  {role.platforms.map(([name, url]) => (
                    <a key={name} href={url} target="_blank" rel="noopener noreferrer">{name} ↗</a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="roles-cta">
        <div>
          <span className="roles-kicker">Start with a shortlist</span>
          <h2>Choose two roles that match your strongest skills.</h2>
        </div>
        <div>
          <p>Apply to several credible platforms, read every assessment rubric carefully, and prioritize accuracy before speed.</p>
          <a className="roles-primary-button" href="/index.html#platforms">Compare job platforms →</a>
        </div>
      </section>

      <footer className="roles-footer">
        <div className="roles-footer-pitch">
          <h2>Need advice that fits your background?</h2>
          <div>
            <p>Tell me a little about yourself and I’ll help you identify a more realistic starting point.</p>
            <div className="roles-contact-details">
              <span>Where you are based</span>
              <span>Which languages you speak</span>
              <span>Whether you prefer annotation, transcription, translation, evaluation, or technical work</span>
            </div>
            <ProtectedEmailButton className="roles-primary-button roles-email-button">Write to me →</ProtectedEmailButton>
          </div>
        </div>
        <div className="roles-footer-main">
          <div>
            <a href="/" className="roles-footer-brand">Rater<span>Job</span></a>
            <p>Independent guidance for remote AI training, evaluation, and data annotation work.</p>
            <div className="roles-footer-legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/cookie-policy">Cookie Policy</a>
              <a href="/legal">Legal Notice</a>
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="/index.html#platforms">Job Platforms</a>
            <a href="/what-is-a-rater">What Is a Rater?</a>
            <a href="/index.html#guide">Start Guide</a>
            <a href="/index.html#tips">Tips</a>
          </div>
          <div>
            <h3>Resources</h3>
            <a href="/index.html#payments">Payment Methods</a>
            <a href="/index.html#about">About RaterJob</a>
            <ProtectedEmailButton className="roles-footer-email">Email me</ProtectedEmailButton>
          </div>
          <div>
            <h3>Follow</h3>
            <a href="https://x.com/raterjob_pat" target="_blank" rel="noopener noreferrer">Follow me on X · @raterjob_pat ↗</a>
          </div>
        </div>
        <div className="roles-footer-bottom"><p>Referral links may earn a small bonus at no cost to you. Recommendations remain independent and availability can change by country and project.</p><span>© 2026 RaterJob</span></div>
      </footer>
    </main>
  );
}
