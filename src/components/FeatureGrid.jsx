import React from 'react'
import { Shield, Zap, Users, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'SSO, RBAC, audit logs and data encryption—secure by default.'
  },
  {
    icon: Zap,
    title: 'Lightning performance',
    desc: 'Optimized for 4G networks with lazy loading and code-splitting.'
  },
  {
    icon: Users,
    title: 'Multi-tenant ready',
    desc: 'Subdomain routing with tenant isolation and usage-based billing.'
  },
  {
    icon: CheckCircle,
    title: 'Polished UX',
    desc: 'Accessible, animated, and mobile-first interface your team will love.'
  },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Designed for trust and speed</h2>
          <p className="mt-2 text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">A cohesive design system, intelligent defaults and reliable performance—crafted for SMEs and institutions.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <article key={i} className="group rounded-xl p-5 border border-[rgba(94,82,64,0.2)] dark:border-[rgba(119,124,124,0.3)] bg-white dark:bg-[#262828] shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-0.5">
              <div className="h-9 w-9 rounded-md flex items-center justify-center" style={{background: 'linear-gradient(135deg,#21808D,#1D7480)'}}>
                <f.icon size={18} className="text-white" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">{f.desc}</p>
            </article>
          ))}
        </div>

        <div id="apps" className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {name: 'Smart Business Suite', desc: 'ERP/CRM with dashboards, inventory and sales workflows.'},
            {name: 'EduConnect', desc: 'Attendance, exams, fees and communication for schools.'},
            {name: 'SmartBill', desc: 'GST billing, reporting and inventory in a delightful UI.'},
            {name: 'FieldTrack', desc: 'Live employee tracking, tasks and route optimization.'},
          ].map((app, i) => (
            <div key={i} className="rounded-2xl p-6 border border-[rgba(94,82,64,0.2)] dark:border-[rgba(119,124,124,0.3)] bg-white dark:bg-[#262828]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold">{app.name}</h4>
                  <p className="text-sm text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">{app.desc}</p>
                </div>
                <a href="#pricing" className="text-sm text-white px-3 py-2 rounded-md shadow-sm" style={{background: 'linear-gradient(135deg,#21808D,#1D7480)'}}>Try</a>
              </div>
              <div className="mt-4 h-24 rounded-md bg-gradient-to-r from-[#21808D]/10 via-transparent to-[#A84B2F]/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
