import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignettes that don't block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          New: Real-time cash visibility
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Cashflow clarity for growing Irish businesses
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Forecast, monitor, and optimize your cash in one beautiful, glass-morphic workspace. Built for Irish SMEs, accountants, and founders.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
          >
            Start free trial
            <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
          >
            See how it works
          </a>
        </div>
        <div className="mt-8 flex items-center gap-6 text-xs text-slate-400">
          <span className="inline-flex items-center gap-2">
            <span className="h-5 w-5 rounded-full bg-white/10 p-1 backdrop-blur">
              <span className="block h-full w-full rounded-full bg-emerald-400" />
            </span>
            Bank-grade security
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-5 w-5 rounded-full bg-white/10 p-1 backdrop-blur">
              <span className="block h-full w-full rounded-full bg-blue-400" />
            </span>
            Made in Ireland
          </span>
        </div>
      </div>
    </section>
  );
}
