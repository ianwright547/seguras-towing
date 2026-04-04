import { ArrowRight, Clock } from 'lucide-react';
import { FlowButton } from '../ui/FlowButton';

const posts = [
  {
    title: 'What to Do After a Car Accident in Inglewood',
    excerpt: 'A step-by-step guide to staying safe, documenting the scene, and getting your vehicle towed - without overpaying.',
    image: '/images/truck-sedan-commercial.jpg',
    date: 'Mar 15, 2026',
    readTime: '5 min read',
  },
  {
    title: 'Flatbed vs. Wheel-Lift Towing: Which Is Right for Your Car?',
    excerpt: 'Not all tows are the same. Learn why flatbed towing is the safest choice for most modern vehicles.',
    image: '/images/truck-mercedes-tow.jpg',
    date: 'Feb 28, 2026',
    readTime: '4 min read',
  },
  {
    title: '5 Signs You Need Roadside Assistance (Not a Tow)',
    excerpt: 'Sometimes a jump start or tire change is all you need. Here\'s how to tell the difference and save money.',
    image: '/images/truck-classic-tow.jpg',
    date: 'Feb 10, 2026',
    readTime: '3 min read',
  },
];

function BlogCard({ post }) {
  return (
    <a href="#" className="group block">
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden mb-5">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[220px] md:h-[260px] object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Reading time badge */}
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <Clock size={11} />
          {post.readTime}
        </span>
      </div>

      {/* Content */}
      <div>
        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">{post.date}</span>
        <h4 className="text-lg font-bold text-brand-dark mt-2 mb-2 group-hover:text-brand-blue transition-colors leading-snug">
          {post.title}
        </h4>
        <p className="text-sm text-text-secondary leading-relaxed mb-3">{post.excerpt}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue group-hover:gap-2.5 transition-all">
          Read more
          <ArrowRight size={14} />
        </span>
      </div>
    </a>
  );
}

export default function BlogPosts() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-surface-off">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand-blue"></div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-brand-blue">Recent Articles</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark leading-tight">
              Blog posts by the<br className="hidden md:block" /> towing pros
            </h2>
          </div>
          <FlowButton text="View All Articles" href="#" />
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
