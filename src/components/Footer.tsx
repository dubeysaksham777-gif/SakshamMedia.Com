import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="text-4xl tracking-tighter">
              SakshamMedia.com<span className="text-red-600">.</span>
            </h2>
            <p className="text-white/60 serif max-w-md">
              Independent journalism for a complex world. We bring you the stories that matter, 
              with the depth and context you deserve.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              {["TW", "IG", "FB", "LI"].map((s) => (
                <div key={s} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-white hover:text-black cursor-pointer transition-all">
                  {s}
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-red-600">Sections</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">World News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Science & Health</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Culture & Arts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Finance</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase font-bold tracking-widest text-red-600">Newsletter</h4>
            <p className="text-sm text-white/60 serif">
              Get the morning briefing delivered to your inbox.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-red-600 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest font-semibold text-white/40">
          <p>© 2026 Vanguard News Media Group. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
