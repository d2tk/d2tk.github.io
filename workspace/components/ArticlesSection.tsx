import React from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../utils/contentLoader';

interface ArticlesSectionProps {
  limit?: number;
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({ limit }) => {
  const allArticles = getArticles();
  const articles = limit ? allArticles.slice(0, limit) : allArticles;

  const getSummary = (markdown: string) => {
    const plainText = markdown
      .replace(/^#+\s+/gm, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_`]/g, '')
      .replace(/\n/g, ' ');
    return plainText.slice(0, 150) + (plainText.length > 150 ? '...' : '');
  };

  return (
    <section id="articles">
      <div className="flex items-baseline justify-between mb-6 border-b border-stone-200 dark:border-zinc-800 pb-2">
        <h2 className="font-mono text-xl font-bold flex items-center gap-2">
          <span className="text-primary">./</span>ARTICLES
        </h2>
        <span className="text-xs font-mono text-stone-500 dark:text-zinc-500">
          {limit ? 'LATEST_WRITINGS' : 'ARCHIVE_INDEX'}
        </span>
      </div>

      <div className="space-y-6">
        {articles.map(article => (
          <article key={article.slug} className="group border-l-2 border-transparent hover:border-primary pl-4 transition-all">
            <Link to={`/posts/${article.slug}`} className="block group-hover:translate-x-1 transition-transform">
              <h3 className="text-lg font-bold font-mono text-stone-800 dark:text-zinc-200 group-hover:text-primary mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-zinc-400 font-sans mb-3 line-clamp-2">
                {getSummary(article.content)}
              </p>
              <div className="flex items-center gap-3 text-xs font-mono text-stone-400 dark:text-zinc-500">
                <span>{article.date}</span>
                {article.tags?.map(tag => (
                  <span key={tag} className="bg-stone-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-stone-500 dark:text-zinc-400">
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>

      {limit && (
        <div className="mt-8">
          <Link to="/posts" className="text-xs font-mono text-stone-500 hover:text-primary flex items-center gap-1 w-max">
            VIEW_ALL_ARTICLES <span>→</span>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ArticlesSection;