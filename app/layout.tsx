import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://raterjob.com"),
  title: "Remote Rater Jobs & AI Training Platforms | RaterJob",
  description:
    "Compare remote AI training, LLM evaluation, and data annotation platforms with practical application and payment guidance.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png", sizes: "192x192" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
