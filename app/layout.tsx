import type { Metadata } from "next";
import "./globals.css";
import CookieNotice from "./components/CookieNotice";

export const metadata: Metadata = {
  metadataBase: new URL("https://raterjob.com"),
  title: "Remote Rater Jobs, AI Training & Data Annotation Platforms | RaterJob",
  description:
    "Compare remote rater jobs and AI training platforms for LLM evaluation, data annotation, search quality, transcription, translation, and prompt work.",
  openGraph: {
    title: "RaterJob: Remote AI Evaluation & Data Annotation",
    description:
      "Compare remote AI training, LLM evaluation, data annotation, localization, prompt, and coding opportunities.",
    url: "https://raterjob.com",
    siteName: "RaterJob",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "RaterJob: Remote AI Evaluation & Data Annotation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RaterJob: Remote AI Evaluation & Data Annotation",
    description:
      "Compare remote AI training, LLM evaluation, data annotation, localization, prompt, and coding opportunities.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon-rounded.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/favicon-rounded.png",
    apple: "/favicon-rounded.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/roles-fonts.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        <CookieNotice />
      </body>
    </html>
  );
}
