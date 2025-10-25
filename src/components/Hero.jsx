import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60 dark:opacity-40" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl" style={{background: 'radial-gradient(closest-side,#21808D,transparent)'}} />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl" style={{background: 'radial-gradient(closest-side,#A84B2F,transparent)'}} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(94,82,64,0.2)] dark:border-[rgba(119,124,124,0.3)] px-3 py-1 text-xs text-[#626C71] dark:text-[rgba(167,169,169,0.7)] mb-4">
              Premium multi-service SaaS for India’s growth markets
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Run your business, school, billing and field ops — in one elegant platform.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#626C71] dark:text-[rgba(167,169,169,0.7)] max-w-xl">
              SoftOrigin unifies Smart Business Suite, EduConnect, SmartBill and FieldTrack with a premium, trustworthy experience tailored for Tier-2 cities.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="group inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-transform hover:scale-[1.02] active:scale-95" style={{background: 'linear-gradient(135deg,#21808D,#1D7480)'}}>
                Get started
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm border border-[rgba(94,82,64,0.2)] dark:border-[rgba(119,124,124,0.3)] hover:shadow-sm transition">
                Explore features
              </a>
            </div>
            <div className="mt-6 text-xs text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">
              WCAG AA, responsive, and performance-first.
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-[rgba(94,82,64,0.2)] dark:border-[rgba(119,124,124,0.3)] bg-white dark:bg-[#262828] shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-4 sm:p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {title: 'Smart Business Suite', kpi: '₹12.4L', sub: 'MRR', color: '#21808D'},
                  {title: 'EduConnect', kpi: '96%', sub: 'Attendance', color: '#A84B2F'},
                  {title: 'SmartBill', kpi: '1,284', sub: 'Invoices/mo', color: '#21808D'},
                  {title: 'FieldTrack', kpi: '87%', sub: 'Tasks done', color: '#A84B2F'},
                ].map((c, i) => (
                  <div key={i} className="rounded-xl p-4 border border-[rgba(94,82,64,0.2)] dark:border-[rgba(119,124,124,0.3)] bg-white/70 dark:bg-[#1F2121]/40 backdrop-blur-sm">
                    <div className="text-xs text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">{c.title}</div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight" style={{color: c.color}}>{c.kpi}</div>
                    <div className="text-xs text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">{c.sub}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl p-4 border border-[rgba(94,82,64,0.2)] dark:border-[rgba(119,124,124,0.3)] bg-white dark:bg-[#1F2121]">
                <div className="h-28 w-full rounded-md overflow-hidden bg-gradient-to-r from-[#21808D]/15 via-transparent to-[#A84B2F]/15" />
                <div className="mt-3 text-xs text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">Realtime activity stream preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
