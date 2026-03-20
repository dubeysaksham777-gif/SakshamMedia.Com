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
                    Journalism As A Profession And A Public Service
                  </h2>
                </div>

                {/* Paste your 1000-word article here */}
                <div className="prose prose-lg max-w-none text-black/70 serif space-y-6 leading-relaxed">
                  <p className="text-xl text-black font-medium italic">
                    
                  </p>
                 <div className="my-10 border-t border-b border-black/5 py-8">
  <img 
    src="https://images.unsplash.com/photo-1504711432869-9d39d71ca0f0?auto=format&fit=crop&q=80&w=2070" 
    alt="Conceptual journalism image: A camera and news press equipment symbolizing public service"
    className="w-full h-[400px] object-cover rounded-lg shadow-sm"
  />
  <p className="text-xs text-black/50 mt-3 italic serif">
    Visualization: The reflective eye of accountability and professional grit in public service.
  </p>
</div>
                    <p className="text-xs text-black/50 mt-3 italic serif">Visualization: The reflective eye of accountability in public service.</p>
                </div>
                  <p>
                    The Silent Guardian: Why Professional Journalism is a Public Service
In an era where everyone with a smartphone and an X (formerly Twitter) account is a "publisher," the definition of journalism has become dangerously blurred. We are drowning in data but starving for the truth. To the outsider, journalism might look like a dying trade of ink and paper. But look closer, and you’ll see it is the high-tech, high-stakes immune system of a functioning democracy.

Journalism is not just a profession; it is a public service disguised as a career. It is the bridge between chaotic events and public understanding.

The Professional Discipline: Beyond the "Post"
The biggest misconception today is that journalism is simply "sharing information." It isn't. Journalism is the discipline of verification. While an influencer might post a viral clip of a protest for clout, a professional journalist is in the background doing the invisible work: cross-referencing timestamps, verifying the source’s identity, and checking the legal context.

The Ethics of Accuracy: In a newsroom, "almost right" is the same as "wrong." The professional rigor involves a "two-source rule" and a commitment to objectivity that social media algorithms simply don't possess.

The Gatekeeper Role: Journalists act as filters. In a world of infinite noise, the professional’s job is to tell you not just what happened, but why it matters and what is actually true.

Journalism as a Watchdog: Holding the Line
The most "cool" and vital aspect of this profession is its role as the Fourth Estate. It sits outside the government, watching the people in power. Without investigative journalism, corruption grows in the dark.

Example: The Panama Papers (2016)
Consider one of the greatest feats of modern journalism. Over 300 journalists from 80 countries worked in secret for a year to analyze 11.5 million leaked documents. They exposed how the global elite used offshore tax havens to hide billions. This wasn't just "news"—it led to prime ministers resigning and billions in recovered taxes. This is the definition of public service.

The Voice for the Voiceless
Beyond the halls of power, journalism serves the public by bringing the margins to the center. It creates empathy where there is apathy.

Humanizing the Abstract: When we talk about "climate change" or "economic shifts," the numbers can feel cold. A journalist goes to the farmer whose crops are failing or the worker who lost their job to automation. By telling their stories, the journalist forces society to acknowledge the human cost of policy.

The Mirror of Society: Journalism shows a community what it looks like, for better or worse. It celebrates local heroes and exposes local injustices that would otherwise be swept under the rug.

The Digital Crisis: The Battle for the Truth
We are currently in a "Post-Truth" era. AI-generated deepfakes can make world leaders say things they never said, and bot farms can manufacture "outrage" in seconds. In this environment, the professional journalist is the ultimate fact-checker.

The crisis isn't that we have too little information; it’s that we have too much bad information. When a news website like SakshamMedia.com invests in a 1,000-word deep dive instead of a 10-second clickbait headline, it is performing an act of resistance. It is choosing quality over quantity, and truth over engagement metrics.

Why It’s "Cool" to Care
There is a certain "rebel" energy in being a journalist today. In a world that wants you to be distracted, a journalist asks you to focus. In a world that wants you to be angry, a journalist asks you to be informed.

It takes courage to walk into a conflict zone, or to sit through a six-hour city council meeting, or to spend months reading boring financial spreadsheets just to find one line of corruption. That grit—that refusal to look away—is what makes this profession the backbone of freedom.

Conclusion: The Social Contract
The relationship between a journalist and the public is a sacred one. You, the reader, provide the attention and the trust; we, the journalists, provide the truth and the context.

As we move deeper into 2026, the technology will continue to change. We will use AI to sort data and VR to show you stories from across the globe. But the core will never change. The heart of journalism will always be a human being, driven by curiosity and a sense of duty, asking the simple but dangerous question: "Is this true?"

Journalism is the light that keeps the shadows of authoritarianism and ignorance at bay. It’s not just a job—it’s the way we stay free.
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
