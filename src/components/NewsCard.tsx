import { motion } from "motion/react";
import { NewsItem } from "@/src/types";

interface NewsCardProps {
  key?: string | number;
  item: NewsItem;
  variant?: "default" | "compact" | "hero";
}

export default function NewsCard({ item, variant = "default" }: NewsCardProps) {
  if (variant === "hero") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative group cursor-pointer overflow-hidden rounded-2xl"
      >
        <div className="aspect-[16/9] md:aspect-[21/9]">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-12">
          <div className="space-y-4 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] uppercase font-bold tracking-widest rounded-sm">
              Breaking News
            </span>
            <h2 className="text-4xl md:text-6xl text-white leading-[0.9] tracking-tighter">
              {item.title}
            </h2>
            <p className="text-white/80 text-lg md:text-xl serif line-clamp-2 max-w-2xl">
              {item.excerpt}
            </p>
            <div className="flex items-center space-x-4 text-white/60 text-xs uppercase tracking-widest font-semibold">
              <span>{item.author}</span>
              <span>•</span>
              <span>{item.date}</span>
              <span>•</span>
              <span>{item.readTime}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex space-x-4 group cursor-pointer border-b border-black/5 pb-6"
      >
        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col justify-center space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-widest text-red-600">
            {item.category}
          </span>
          <h3 className="text-lg leading-tight font-display group-hover:text-red-600 transition-colors">
            {item.title}
          </h3>
          <span className="text-[10px] text-black/40 uppercase font-semibold">
            {item.date}
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer space-y-4"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={item.imageUrl}
          alt={item.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <span className="text-[10px] uppercase font-bold tracking-widest text-red-600">
          {item.category}
        </span>
        <h3 className="text-2xl leading-[0.95] group-hover:text-red-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-black/60 serif line-clamp-3">
          {item.excerpt}
        </p>
        <div className="flex items-center space-x-2 text-[10px] text-black/40 uppercase font-semibold">
          <span>{item.author}</span>
          <span>•</span>
          <span>{item.readTime}</span>
        </div>
      </div>
    </motion.div>
  );
}
