import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '€0',
    cadence: 'forever',
    features: [
      '1 connected bank',
      'Basic 4-week forecast',
      'Email support'
    ],
    cta: 'Get started',
    highlighted: false
  },
  {
    name: 'Growth',
    price: '€39',
    cadence: '/mo',
    features: [
      'Unlimited banks',
      '13-week forecasts',
      'Collections workflows',
      'Scenario planning'
    ],
    cta: 'Start 14-day trial',
    highlighted: true
  },
  {
    name: 'Finance Team',
    price: '€89',
    cadence: '/mo',
    features: [
      'All Growth features',
      'Multi-entity consolidation',
      'Advanced permissions',
      'Priority support'
    ],
    cta: 'Talk to sales',
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Choose a plan that scales with your cashflow maturity.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md ${t.highlighted ? 'ring-2 ring-emerald-500' : ''}`}
            >
              {t.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-900">
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold">{t.price}</span>
                <span className="text-sm text-slate-300">{t.cadence}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${t.highlighted ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400' : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'}`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
