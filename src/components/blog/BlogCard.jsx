import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogCard({ post }) {
  const date = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-white/95 text-amber-700">
          {post.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {post.readTime}
          </span>
        </div>
        <h3 className="mt-3 font-display font-semibold text-lg text-navy-950 group-hover:text-amber-600 transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 group-hover:text-amber-600 transition-colors">
          Read Article
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
