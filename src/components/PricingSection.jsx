import React from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '₹799',
    period: 'month',
    highlight: false,
    features: [
      'Up to 5 users',
      'Core modules',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: '₹2,499',
    period: 'month',
    highlight: true,
    features: [
      'Up to 25 users',
      'Advanced analytics',
      'Priority support',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    period: '',
    highlight: false,
    features: [
      'Unlimited users',
      'SSO & RBAC',
      'Dedicated success manager',
      'Custom SLAs',
    ],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-2 text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">Choose a plan that fits your team today and scales for tomorrow.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`${p.highlight ? 'shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-transparent' : 'border-[rgba(94,82,64,0.2)] dark:border-[rgba(119,124,124,0.3)]'} rounded-2xl p-6 border bg-white dark:bg-[#262828]`} style={p.highlight ? {borderImage: 'linear-gradient(135deg,#21808D,#1D7480) 1'} : {}}>
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold tracking-tight">{p.name}</h3>
                {p.highlight && (
                  <span className="text-xs px-2 py-1 rounded-md text-white" style={{background: '#21808D'}}>Popular</span>
                )}
              </div>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-3xl font-semibold">{p.price}</span>
                {p.period && <span className="text-sm text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">/{p.period}</span>}
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check size={16} className="text-[#21808D] dark:text-[#32B8C6]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-md px-4 py-2.5 text-sm font-medium transition-transform hover:scale-[1.02] active:scale-95 ${p.highlight ? 'text-white' : 'border border-[rgba(94,82,64,0.2)] dark:border-[rgba(119,124,124,0.3)] hover:shadow-sm'}`} style={p.highlight ? {background: 'linear-gradient(135deg,#21808D,#1D7480)'} : {}}>
                {p.name === 'Enterprise' ? 'Contact sales' : 'Start free trial'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
