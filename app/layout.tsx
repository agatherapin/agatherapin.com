import type { Metadata } from 'next';
import localFont from 'next/font/local';
import CustomCursor from '@/components/CustomCursor';
import './globals.css';

const neueHaas = localFont({
    src: [
        { path: '../public/fonts/neuehaasgrotesk/NeueHaasDisplay-Roman.ttf', weight: '400', style: 'normal' },
        { path: '../public/fonts/neuehaasgrotesk/NeueHaasDisplay-Bold.ttf', weight: '700', style: 'normal' },
        { path: '../public/fonts/neuehaasgrotesk/NeueHaasDisplay-Black.ttf', weight: '900', style: 'normal' },
    ],
    variable: '--font-neue-haas',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://agatherapin.com'),
    icons: {
        icon: '/img/mini logo.webp',
        apple: '/apple-touch-icon.png',
    },
    title: 'Agathe Rapin - Portfolio',
    description: 'Agathe Rapin - freelance graphic & web designer based in Nantes, France. Versatile creative: motion, branding, print, web, mixed media & typography. Open to work.',
    openGraph: {
        title: 'Agathe Rapin - Portfolio',
        description: 'Agathe Rapin - freelance graphic & web designer based in Nantes, France. Versatile creative: motion, branding, print, web, mixed media & typography. Open to work.',
        images: [
            {
                url: '/img/social-share.png',
                width: 1200,
                height: 630,
                alt: 'Agathe Rapin logo',
                type: 'image/png',
            },
        ],
        type: 'website',
        locale: 'fr_FR',
    },
    twitter: {
        card: 'summary',
        title: 'Agathe Rapin - Portfolio',
        description: 'Agathe Rapin - freelance graphic & web designer based in Nantes, France. Versatile creative: motion, branding, print, web, mixed media & typography. Open to work.',
        images: [
            {
                url: '/img/social-share.png',
                width: 1200,
                height: 630,
                alt: 'Agathe Rapin logo',
            },
        ],
    },
};

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Agathe Rapin',
    jobTitle: 'Graphic & web designer',
    description: 'Freelance graphic & web designer based in Nantes, France. Versatile creative: motion, branding, print, web, mixed media & typography.',
    url: 'https://agatherapin.com',
    email: 'mailto:agathe.rapin@outlook.fr',
    sameAs: ['https://www.instagram.com/agatherapin/'],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className={neueHaas.variable}>
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
                <CustomCursor />
                {children}
            </body>
        </html>
    );
}
