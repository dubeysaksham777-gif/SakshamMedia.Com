import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const CATEGORIES = ["World", "Politics", "Technology", "Science", "Health", "Culture", "Finance"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F9F8F6]/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-3xl font-display tracking-tighter cursor-pointer">
              Vanguard<span className="text-red-600">.</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {CATEGORIES.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase()}`}
                className="text-xs uppercase font-semibold tracking-widest hover:text-red-600 transition-colors"
              >
                {category}
              </a>
            ))}
          </div>

          {/* Search & Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-20 left-0 w-full bg-[#F9F8F6] border-b border-black/5 transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          {CATEGORIES.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="block text-sm uppercase font-semibold tracking-widest hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
