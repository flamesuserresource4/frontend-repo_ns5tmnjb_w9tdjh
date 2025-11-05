import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3 text-white">
          <div className="h-8 w-8 rounded-xl bg-emerald-500" />
          <span className="font-semibold">ClarityCash</span>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} ClarityCash Ltd. Built in Dublin.</p>
        <div className="flex items-center gap-4 text-xs">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
