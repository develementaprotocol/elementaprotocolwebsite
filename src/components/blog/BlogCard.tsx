import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import type { BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const truncatedDescription =
    post.description.length > 100
      ? `${post.description.slice(0, 100).trimEnd()}...`
      : post.description;

  return (
    <Link href={`/blog/${post.id}`} prefetch={true} className="group block h-full">
      <div 
        className="relative h-full flex flex-col rounded-[16px] overflow-hidden border border-white/10 backdrop-blur-3xl transition-all duration-300 hover:border-[#24bace]/30 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]"
        style={{ background: "linear-gradient(135deg, rgba(21,111,122, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(21,111,122, 0.5) 100%)" }}
      >
        <div className="relative h-44 overflow-hidden sm:h-52 md:h-56 lg:h-60 xl:h-64 2xl:h-72">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-[filter,transform] duration-500 group-hover:brightness-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest border border-white/30 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
              {post.category}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 text-left sm:p-6 md:p-7 lg:p-8">
          <div className="flex items-center gap-4 mb-6 text-[10px] font-black uppercase tracking-widest text-[#c7d6e0]">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-[#24bace]" />
              <span>{post.date}</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#24bace]" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h3 className="mb-3 font-display text-xl font-bold leading-tight text-white transition-colors group-hover:text-[#24bace] sm:mb-4 sm:text-2xl">
            {post.title}
          </h3>

          <p className="mb-6 flex-1 line-clamp-3 text-sm leading-relaxed text-[#F5F5F5] sm:mb-8">
            {truncatedDescription}
          </p>

          <div className="pt-6 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 overflow-hidden rounded-full border border-white/10 bg-white/5 sm:h-9 sm:w-9">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-bold text-white opacity-80">{post.author}</span>
            </div>
            <div className="text-[#24bace] flex items-center gap-1 text-xs font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform">
              Transmitting
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
