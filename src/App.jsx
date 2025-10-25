import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import PricingSection from './components/PricingSection'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFCF9] text-[#13343B] dark:bg-[#1F2121] dark:text-[#F5F5F5] transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <PricingSection />
      </main>
      <footer className="border-t border-[rgba(94,82,64,0.2)] dark:border-[rgba(119,124,124,0.3)] mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">© {new Date().getFullYear()} SoftOrigin Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-[#21808D] dark:hover:text-[#32B8C6] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#21808D] dark:hover:text-[#32B8C6] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#21808D] dark:hover:text-[#32B8C6] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
