import type { ReactNode } from 'react';
import TopInfoBar from './TopInfoBar'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="site-header">
        <TopInfoBar />
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout