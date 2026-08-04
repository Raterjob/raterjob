import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://raterjob.com'),

  title: {
    default: 'RaterJob — Remote AI Training & Data Annotation Jobs',
    template: '%s | RaterJob',
  },

  description:
    'Discover remote AI training, LLM evaluator, search evaluator, and data annotation jobs. Compare platforms, pay rates, application tips, and payment methods.',

  applicationName: 'RaterJob',

  authors: [
    {
      name: 'RaterJob',
      url: 'https://raterjob.com',
    },
  ],

  creator: 'RaterJob',
  publisher: 'RaterJob',

  keywords: [
    'remote AI jobs',
    'AI training jobs',
    'LLM evaluator jobs',
    'AI evaluator jobs',
    'data annotation jobs',
    'data annotator jobs',
    'search engine evaluator jobs',
    'AI rater jobs',
    'remote rater jobs',
    'freelance AI jobs',
    'AI model training',
    'Outlier AI',
    'DataAnnotation',
    'TELUS Digital',
    'Appen',
    'OneForma',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raterjob.com',
    siteName: 'RaterJob',
    title: 'RaterJob — Remote AI Training & Data Annotation Jobs',
    description:
      'An independent guide to remote AI training, LLM evaluation, search evaluation, and data annotation jobs, including platforms, pay rates, application tips, and payment methods.',
    images: [
      {
        url: '/images/cat-at-work.png',
        width: 1200,
        height: 630,
        alt: 'RaterJob guide to remote AI training and data annotation jobs',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'RaterJob — Remote AI Training & Data Annotation Jobs',
    description:
      'Compare remote AI training and data annotation platforms, pay rates, application tips, and payment methods.',
    images: ['/images/cat-at-work.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  category: 'Jobs and Career',

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#f0eedf',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#121212',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}