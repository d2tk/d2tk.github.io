import React from 'react';

const ArticlesSection: React.FC = () => {
    return (
        <section id="articles">
            <div className="flex items-baseline justify-between mb-6 border-b border-stone-200 dark:border-zinc-800 pb-2">
                <h2 className="font-mono text-xl font-bold flex items-center gap-2">
                    <span className="text-primary">./</span>ARTICLES
                </h2>
                <span className="text-xs font-mono text-stone-500 dark:text-zinc-500">KNOWLEDGE_BASE</span>
            </div>

            <div className="space-y-8">
                {/* Article Card */}
                <article className="group">
                    <div className="border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6 rounded-sm hover:border-primary dark:hover:border-primary transition-colors">
                         <div className="flex items-center gap-2 mb-4 text-xs font-mono text-stone-400">
                            <span>2025-01-12</span>
                            <span>::</span>
                            <span className="text-primary">GIT_TIPS</span>
                        </div>
                        
                        <h3 className="text-lg font-bold font-mono mb-4 group-hover:text-primary transition-colors">
                            How to Exclude a Folder in `.gitignore`
                        </h3>

                        <div className="prose dark:prose-invert prose-sm max-w-none text-stone-600 dark:text-zinc-400 font-sans leading-relaxed">
                            <p className="mb-4">
                                To exclude a folder in <code className="bg-stone-100 dark:bg-zinc-800 px-1 py-0.5 rounded font-mono text-accent-red text-xs">.gitignore</code>, append a forward slash (<code className="bg-stone-100 dark:bg-zinc-800 px-1 py-0.5 rounded font-mono text-xs">/</code>) to the folder name.
                            </p>
                            
                            <div className="bg-stone-100 dark:bg-zinc-950 border-l-2 border-primary p-4 my-4 font-mono text-sm relative">
                                <span className="absolute top-0 right-0 p-1 text-[10px] text-stone-400 uppercase tracking-widest opacity-50">snippet</span>
                                <p className="text-xs text-stone-500 mb-2 font-bold uppercase">Example:</p>
                                <div className="text-stone-800 dark:text-zinc-300 font-mono">
                                    logs/<br/>
                                    node_modules/
                                </div>
                            </div>

                            <p>
                                This ensures that the entire folder and its contents are ignored by Git.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default ArticlesSection;