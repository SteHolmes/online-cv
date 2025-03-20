
import type { Metadata } from 'next'
import { Amatic_SC, Quicksand } from 'next/font/google'
import '@/styles/main.scss'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import HeaderNav from '@/components/HeaderNav/HeaderNav'
import Footer from '@/components/Footer/Footer'
import { ToastContainer } from 'react-toastify';

const quicksand = Quicksand({
  subsets: ['latin'],
})

const amatic = Amatic_SC({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Stephen Holmes - Front End Developer',
  description: 'A front-end developer with over 6 years of experience, specialising in Vue and React.',
};

export default async function RootLayout ({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} ${amatic.className}`}>
        <div className="appLayout">
          <HeaderNav />
          <main>
            {children}
          </main>
          <Footer />
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
