interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  isRtl?: boolean;
}

export default function BlogPost({ title, date, excerpt, link, isRtl = false }: BlogPostProps) {
  return (
    <article className="bg-gray-900/80 rounded-lg p-5 mb-6 border border-white/10 transition-all hover:translate-y-[-5px] hover:shadow-lg hover:border-amber-400/30">
      <header className="flex justify-between items-start mb-3">
        <h2 className="text-xl font-semibold text-amber-400 mb-2">{title}</h2>
        <time className="text-sm text-gray-400">{date}</time>
      </header>
      <p className={`text-gray-400 mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>{excerpt}</p>
      <a 
        href={link} 
        className="inline-block py-1.5 px-3 bg-gray-800 text-gray-200 text-sm font-medium rounded-full transition-all hover:bg-gray-700 hover:text-cyan-400"
      >
        {isRtl ? 'قراءة المزيد' : 'Read More'}
      </a>
    </article>
  );
}
