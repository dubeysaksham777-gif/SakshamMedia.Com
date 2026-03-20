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
            
            {/* Left Column: Main Stories */}
            <div className="lg:col-span-8 space-y-12">
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

