import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";
import { NEWS_DATA } from "./types";
import { motion } from "motion/react";

export default function App() {
  const heroStory = NEWS_DATA.find(item => item.isBreaking) || NEWS_DATA[0];
  const mainStories = NEWS_DATA.filter(item => !item.isBreaking).slice(0, 4);
  const trendingStories = NEWS_DATA.slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-600 selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <NewsCard item={heroStory} variant="hero" />
        </section>

        {/* Main Content Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Main Stories & Opinion Section */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Top Stories */}
              <div className="space-y-12">
                <div className="flex items-center justify-between border-b border-black/5 pb-4">
                  <h2 className="text-2xl tracking-tighter">Top Stories</h2>
                  <a href="#" className="text-[10px] uppercase font-bold tracking-widest text-red-600 hover:underline">
                    View All
                  </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                  {mainStories.map((story) => (
                    <NewsCard key={story.id} item={story} />
                  ))}
                </div>
              </div>

              {/* --- NEW EDITORIAL OPINION SECTION (Inside Main Grid) --- */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F9F9F9] border-l-4 border-red-600 p-8 md:p-12 space-y-8"
              >
                <div className="space-y-4">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-red-600">Editorial Opinion</span>
                  <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.1] font-medium text-black">
                    The Silent Guardian: Why Professional Journalism is a Public Service.
                  </h2>
                </div>

                {/* Paste your 1000-word article here */}
                <div className="prose prose-lg max-w-none text-black/70 serif space-y-6 leading-relaxed">
                  <p className="text-xl text-black font-medium italic">
                    "Journalism is the first rough draft of history." — Phil Graham
                  </p>
                  <p>
                    Journalism as a profession is distinct from mere content creation. It is a structured discipline 
                    rooted in verification and accountability. In an age where misinformation spreads faster than truth, 
                    the role of a professional journalist is more critical than ever. (Continue your 1000-word text here...)
                  </p>
                  <p>
                    It serves as a public service by illuminating the dark corners of governance and society. 
                    Without the watchdog role of the press, the balance of power shifts away from the citizen. 
                    This editorial explores how we can preserve this pillar of democracy in the digital era.
                  </p>
                  {/* Additional paragraphs can be added here */}
                </div>

                <div className="pt-6 border-t border-black/5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-black rounded-full" />
                    <div>
                      <p className="text-sm font-bold">Saksham Media Editorial Board</p>
                      <p className="text-[10px] text-black/40 uppercase">Published March 2026</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">
                    Share Opinion
                  </button>
                </div>
              </motion.div>

              {/* Newsletter Banner */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-red-600 text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
              >
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl leading-none">The Morning Briefing</h3>
                  <p className="text-white/80 serif text-sm md:text-base">
                    Get the stories that matter most, delivered daily.
                  </p>
                </div>
                <button className="bg-white text-red-600 px-8 py-3 rounded-full text-xs uppercase font-bold tracking-widest hover:bg-black hover:text-white transition-all">
                  Subscribe Now
                </button>
              </motion.div>
            </div>

            {/* Right Column: Trending & Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              <div className="sticky top-24 space-y-12">
                <div className="space-y-8">
                  <div className="flex items-center justify-between border-b border-black/5 pb-4">
                    <h2 className="text-2xl tracking-tighter">Trending</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {trendingStories.map((story) => (
                      <NewsCard key={story.id} item={story} variant="compact" />
                    ))}
                  </div>
                </div>

                {/* Ad Placeholder */}
                <div className="bg-black/5 aspect-[3/4] rounded-xl flex items-center justify-center p-8 text-center">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-black/20">Advertisement</span>
                    <p className="text-sm serif text-black/40 italic">
                      Support independent journalism. <br />
                      <span className="underline cursor-pointer hover:text-black transition-colors">Go Premium</span>
                    </p>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {["Technology", "Science", "Culture"].map((cat) => (
                <div key={cat} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h2 className="text-2xl tracking-tighter">{cat}</h2>
                    <ArrowIcon />
                  </div>
                  <div className="space-y-6">
                    {NEWS_DATA.filter(i => i.category === cat).slice(0, 2).map(story => (
                      <div key={story.id} className="group cursor-pointer space-y-2">
                        <h3 className="text-xl leading-none group-hover:text-red-600 transition-colors">
                          {story.title}
                        </h3>
                        <p className="text-xs text-white/40 uppercase font-semibold tracking-widest">
                          {story.date} • {story.readTime}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
