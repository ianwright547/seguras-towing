import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import SEOHead from '../../components/ui/SEOHead';

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function BlogCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-white border-4 border-brand-dark shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-200 overflow-hidden"
    >
      <div className="relative border-b-4 border-brand-dark">
        <img
          src={post.photo}
          alt={post.title}
          className="w-full h-[240px] md:h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span
          className="absolute top-0 right-0 text-white font-black text-xs uppercase tracking-widest px-4 py-2 bg-brand-orange border-b-4 border-l-4 border-brand-dark shadow-md"
        >
          {post.category}
        </span>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-3 text-xs font-black uppercase text-stone-500 tracking-widest mb-4">
          <span>{formatDate(post.date)}</span>
          <span className="w-1.5 h-1.5 bg-brand-dark" />
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-brand-orange" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-4 group-hover:text-brand-orange transition-colors">
          {post.title}
        </h3>

        <p className="text-base text-stone-600 font-bold leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <span className="inline-flex items-center gap-2 text-sm font-black text-white bg-brand-dark hover:bg-black px-6 py-3 uppercase tracking-widest transition-colors w-full justify-center border-b-[4px] border-stone-800 active:border-b-0 active:translate-y-1">
          Read Article
          <ArrowRight size={18} strokeWidth={3} />
        </span>
      </div>
    </Link>
  );
}

export default function BlogIndex() {
  return (
    <>
      <SEOHead
        title="Towing Tips & Guides"
        description="Expert towing tips, roadside safety guides, and car care advice from the team at Segura's Towing in Inglewood, CA."
        canonical="/blog"
      />

      <section className="relative bg-brand-dark pt-32 pb-20 border-b-[12px] border-brand-orange text-center">
        <div className="absolute inset-0 z-0 bg-brand-dark">
          <img
            src="/images/truck-mustang-downtown.jpg"
            alt="Segura's Towing blog — towing tips and roadside safety guides"
            width="1920"
            height="1080"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6">
          <div className="inline-block bg-brand-orange text-white font-black tracking-widest text-sm uppercase px-4 py-1.5 mb-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-brand-dark">
            Resources
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            Tips & <span className="text-brand-orange">Safety Guides</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-bold max-w-2xl mx-auto uppercase tracking-wide">
            Practical advice from experienced operators. Know what to do when things go wrong.
          </p>
        </div>
      </section>

      <section className="bg-zinc-100 py-20 px-6 border-b-[8px] border-zinc-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
