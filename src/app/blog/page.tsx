"use client";

import { useState, useMemo, useEffect } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockPosts, type BlogPost } from '@/data/blogPosts';
import { BlogCard } from '@/components/blog/BlogCard';

const POSTS_PER_PAGE = 3;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory]);

  const categories = ['All', 'DeFi', 'NFTs', 'Security', 'Guides', 'Ecosystem'];

  const isFiltering = activeCategory !== 'All' || searchQuery.trim() !== '';

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return mockPosts.filter((p) => {
      const matchesCategory =
        activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch =
        q === '' ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const paginatedPosts = useMemo<BlogPost[][]>(() => {
    const chunks: BlogPost[][] = [];
    for (let i = 0; i < filteredPosts.length; i += POSTS_PER_PAGE) {
      chunks.push(filteredPosts.slice(i, i + POSTS_PER_PAGE));
    }
    return chunks;
  }, [filteredPosts]);

  const totalPages = paginatedPosts.length;
  const currentPagePosts = paginatedPosts[currentPage - 1] ?? [];
  const visiblePosts = currentPagePosts;

  useEffect(() => {
    setCurrentPage((p) => Math.min(p, Math.max(1, totalPages || 1)));
  }, [totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Background Layer removed, now handled by RootChrome */}
      
      {/* Background removed, now handled by RootChrome */}

      <section className="relative z-10 pt-24 pb-10 transition-all duration-500">
        {/* Theme Atmospheric Gradient */}
        <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] h-[120%] w-[120%] atmosphere-blob-tl" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[80%] w-[80%] atmosphere-blob-br" />
        </div>
        
        <div className="container-standard">
          <div className="section-inner">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 flex flex-col items-center justify-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-Elementa-primary"></span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold tracking-tighter mb-8 text-white leading-[0.95] text-center">
            Blogs
          </h1>
          
          <div className="max-w-4xl mx-auto mt-12 space-y-8">
            <form
              className="flex flex-col gap-4 md:gap-6 p-2 md:p-3 rounded-[16px] bg-white/[0.04] border border-white/10 backdrop-blur-3xl shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative group flex-1">
                <div className="absolute inset-y-0 left-5 md:left-8 flex items-center pointer-events-none text-Elementa-primary">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  className="w-full pl-12 md:pl-16 pr-6 py-4 md:py-6 bg-transparent text-white placeholder-white/20 outline-none text-base md:text-lg font-medium"
                  placeholder="Search the cosmic archives..."
                  type="search"
                  name="blog-search"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="px-2 md:px-4 pb-4 flex flex-wrap items-center justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all border ${
                      activeCategory === cat
                        ? 'bg-Elementa-primary border-Elementa-primary text-black shadow-[0_0_24px_rgba(255,255,255,0.25)]'
                        : 'border-white/10 text-[#ffffff] hover:text-white hover:bg-white/5'
                    }`}
                  > 
                    {cat}
                  </button>
                ))}
              </div>
            </form>
          </div>
        </motion.div>
          </div>
        </div>
      </section>

      <section id="blog-results" className="site-section relative z-10 pb-24 md:pb-28">
        <div className="container-standard">
          <div className="section-inner">
        {isFiltering && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12 flex flex-col sm:flex-row items-center justify-between border-b border-white/10 pb-6 gap-4"
          >
            <h3 className="text-xl font-display font-medium text-[#ffffff] text-center sm:text-left">
              Showing <span>{filteredPosts.length}</span> blogs
              {filteredPosts.length > POSTS_PER_PAGE && (
                <span className="text-[#c7d6e0] font-normal">
                  {' '}
                  · {Math.ceil(filteredPosts.length / POSTS_PER_PAGE)} pages ({POSTS_PER_PAGE} per page)
                </span>
              )}
            </h3>
            <button 
              onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
              className="text-xs font-bold uppercase tracking-widest text-Elementa-primary hover:text-white/80 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {filteredPosts.length === 0 ? (
          <p className="text-center text-[#ffffff] py-16 mb-20">
            No entries match your filters.
          </p>
        ) : (
          <>
            <div className="relative mb-10 overflow-hidden rounded-[16px]">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {visiblePosts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: idx * 0.05,
                    }}
                    className="h-full"
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>
            </div>

            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <button
                    type="button"
                    aria-label="Previous page"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-4 rounded-full border border-white/10 text-white disabled:opacity-30 hover:bg-white/5 transition-all outline-none"
                  >
                    Prev
                  </button>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        type="button"
                        key={i}
                        aria-label={`Page ${i + 1}, blogs ${i * POSTS_PER_PAGE + 1}–${Math.min((i + 1) * POSTS_PER_PAGE, filteredPosts.length)}`}
                        aria-current={currentPage === i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        className={`min-w-[2rem] h-8 px-3 rounded-full font-bold text-sm transition-all outline-none ${
                          currentPage === i + 1
                            ? 'bg-Elementa-primary text-black shadow-lg shadow-white/20 border border-Elementa-primary'
                            : 'border border-white/10 text-[#ffffff] hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    aria-label="Next page"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-4 rounded-full border border-white/10 text-white disabled:opacity-30 hover:bg-white/5 transition-all outline-none"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
          </div>
        </div>
      </section>
    </main>
  );
}
