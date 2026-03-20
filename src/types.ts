export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  readTime: string;
  isBreaking?: boolean;
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: "1",
    title: "The Future of Sustainable Architecture in Modern Cities",
    excerpt: "How vertical forests and carbon-neutral materials are reshaping urban landscapes for a greener tomorrow.",
    content: "Full content here...",
    category: "Architecture",
    author: "Elena Vance",
    date: "Mar 20, 2026",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
    readTime: "6 min read",
    isBreaking: true
  },
  {
    id: "2",
    title: "Quantum Computing: The Next Frontier of Cybersecurity",
    excerpt: "Encryption as we know it is about to change. Are we prepared for the post-quantum era?",
    content: "Full content here...",
    category: "Technology",
    author: "Marcus Thorne",
    date: "Mar 19, 2026",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    readTime: "8 min read"
  },
  {
    id: "3",
    title: "Global Markets React to New Energy Policies",
    excerpt: "Investors pivot as major economies announce aggressive shifts toward renewable energy subsidies.",
    content: "Full content here...",
    category: "Finance",
    author: "Sarah Jenkins",
    date: "Mar 20, 2026",
    imageUrl: "https://images.unsplash.com/photo-1611974714014-4b3211a6d53d?auto=format&fit=crop&w=800&q=80",
    readTime: "4 min read"
  },
  {
    id: "4",
    title: "The Renaissance of Analog Photography",
    excerpt: "Why Gen Z is ditching digital filters for the tactile experience of 35mm film.",
    content: "Full content here...",
    category: "Culture",
    author: "Julian Reed",
    date: "Mar 18, 2026",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read"
  },
  {
    id: "5",
    title: "Advancements in Neural Interface Technology",
    excerpt: "New breakthroughs allow for more precise control of prosthetic limbs through direct brain signals.",
    content: "Full content here...",
    category: "Science",
    author: "Dr. Aris Thorne",
    date: "Mar 20, 2026",
    imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
    readTime: "10 min read"
  }
];
