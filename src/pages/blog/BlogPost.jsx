import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, Phone } from 'lucide-react';
import { getBlogBySlug, blogPosts } from '../../data/blogPosts';
import { PHONE_HREF, PHONE_NUMBER } from '../../components/ui/PhoneLink';
import SEOHead from '../../components/ui/SEOHead';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function ContentBlock({ block }) {
  if (block.type === 'h2') {
    return (
      <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tight mt-12 mb-6 border-l-8 border-brand-orange pl-6 leading-tight">
        {block.text}
      </h2>
    );
  }

  if (block.type === 'callout') {
    return (
      <div className="my-10 bg-brand-dark border-r-8 border-l-8 border-brand-orange px-8 py-8 shadow-inner select-none">
        <p className="text-lg text-white font-bold leading-relaxed mb-6 uppercase tracking-wide">{block.text}</p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-3 bg-brand-orange hover:bg-white hover:text-brand-dark text-white font-black text-xl px-8 py-4 uppercase tracking-widest transition-all border-b-[4px] border-orange-900 active:translate-y-1 active:border-b-0"
        >
          <Phone size={24} />
          Call {PHONE_NUMBER}
        </a>
      </div>
    );
  }

  return (
    <p className="text-lg md:text-xl text-stone-700 font-medium leading-relaxed mb-6">
      {block.text}
    </p>
  );
}

function RelatedPostCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex gap-4 items-center bg-white border-4 border-brand-dark p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform"
    >
      <img
        src={post.photo}
        alt={post.title}
        className="w-24 h-24 object-cover border-2 border-brand-dark transition-all shrink-0 hover:scale-105"
        loading="lazy"
      />
      <div>
        <h4 className="text-sm font-black text-brand-dark uppercase tracking-tight leading-snug group-hover:text-brand-orange transition-colors">
          {post.title}
        </h4>
        <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mt-2">{post.readTime}</p>
      </div>
    </Link>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) {
    return (
      <>
        <SEOHead title="Post Not Found" canonical="/blog" />
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-zinc-100 px-6 pt-32">
          <h1 className="text-5xl font-black text-brand-dark uppercase tracking-tighter mb-4">Post Not Found</h1>
          <Link
            to="/blog"
            className="bg-brand-dark text-white font-black uppercase tracking-widest px-8 py-4 border-b-4 border-black inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} /> Back to Blog
          </Link>
        </div>
      </>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDesc}
        canonical={`/blog/${post.slug}`}
      />

      <section className="bg-brand-dark pt-40 pb-20 px-6 border-b-[12px] border-brand-orange">
        <div className="max-w-[1000px] mx-auto text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-black text-brand-orange hover:text-white transition-colors uppercase tracking-widest mb-8"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-xs font-black uppercase tracking-widest text-stone-400">
            <span className="inline-flex items-center gap-1.5 bg-brand-orange text-white px-3 py-1 border border-orange-400">
              <Tag size={14} /> {post.category}
            </span>
            <span className="text-white">{formatDate(post.date)}</span>
            <span className="w-1.5 h-1.5 bg-stone-600" />
            <span className="flex items-center gap-2 text-white">
              <Clock size={14} className="text-brand-orange" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-10">
            {post.title}
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: 'Blog', to: '/blog' },
          { label: post.title },
        ]}
      />

      <section className="bg-zinc-100 py-16 px-6">
        <div className="max-w-[1000px] mx-auto bg-white border-4 border-brand-dark p-8 md:p-16 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <img src={post.photo} alt={post.title} className="w-full h-[400px] object-cover border-4 border-brand-dark mb-12" />

          <article className="prose prose-lg max-w-none">
            {post.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </article>
        </div>

        <div className="max-w-[1000px] mx-auto mt-16 bg-brand-orange border-4 border-brand-dark p-10 text-center shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter mb-4">
            Need A Dispatch Right Now?
          </h3>
          <p className="text-white text-lg font-bold uppercase tracking-wide mb-8 max-w-2xl mx-auto">
            Segura's Towing is available 24/7. Fast response, direct quotes, no excuses.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-brand-dark hover:bg-black text-white px-10 py-5 font-black text-2xl uppercase tracking-widest border-b-[6px] border-stone-800 active:translate-y-1 active:border-b-0 transition-all"
          >
            <Phone size={28} />
            Call {PHONE_NUMBER}
          </a>
        </div>

        {relatedPosts.length > 0 && (
          <div className="max-w-[1000px] mx-auto mt-20">
            <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-8 border-l-8 border-brand-orange pl-4">More Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <RelatedPostCard key={p.slug} post={p} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-black text-brand-dark bg-transparent border-4 border-brand-dark hover:bg-brand-dark hover:text-white transition-colors px-6 py-3 uppercase tracking-widest"
              >
                <ArrowLeft size={16} /> All Articles
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
