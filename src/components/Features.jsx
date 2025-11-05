import React from 'react';
import { Shield, BarChart3, Banknote, Clock } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="h-5 w-5 text-emerald-400" />,
    title: 'Live cash forecasting',
    desc: 'See 13-week projections with bank feeds, invoices, payroll, and taxes all factored in.'
  },
  {
    icon: <Banknote className="h-5 w-5 text-emerald-400" />,
    title: 'Collections made simple',
    desc: 'Automated reminders, smart schedules, and payment links reduce your DSO instantly.'
  },
  {
    icon: <Clock className="h-5 w-5 text-emerald-400" />,
    title: 'Scenario planning',
    desc: 'Model best and worst-case outcomes before making big decisions.'
  },
  {
    icon: <Shield className="h-5 w-5 text-emerald-400" />,
    title: 'Bank-grade security',
    desc: 'ISO-aligned controls and encryption by default. Your data stays yours.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative isolate bg-slate-950 py-20 text-white sm:py-24">
      <div className="absolute inset-x-0 -top-24 -z-0 mx-auto h-48 w-[80%] rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">All your cash, one clear view</h2>
          <p className="mt-3 text-slate-300">Connect Irish banks and accounting tools to get instant clarity and control.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <div key={idx} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
