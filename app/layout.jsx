import "./globals.css";

export const metadata = {
  title: {
    template: '%s | Mind',
    default: 'Mind | Abdi\'s Personal Knowledge Base',
  },
  description: 'Tempat aku nyimpen semua hal yang aku pelajari tentang hidup, cara berpikir, dan teknologi.',
  metadataBase: new URL('https://mind.abdi.cc'),
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/id',
      'en-US': '/en',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return children;
}
