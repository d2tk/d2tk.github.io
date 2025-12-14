import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Scanline from '../components/Scanline';
import { getAllPosts } from '../utils/contentLoader';

interface PostPageProps {
    toggleTheme: () => void;
    isDark: boolean;
}

const PostPage: React.FC<PostPageProps> = ({ toggleTheme, isDark }) => {
    const { slug } = useParams<{ slug: string }>();
    const posts = getAllPosts();
    const post = posts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="flex flex-col h-screen justify-center items-center font-mono">
                <h1 className="text-4xl font-bold mb-4">404_NOT_FOUND</h1>
                <Link to="/" className="text-primary hover:underline">./RETURN_HOME</Link>
            </div>
        );
    }

    return (
        <>
            <Sidebar />
            <Scanline />
            <div className="pl-4 md:pl-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 min-h-screen flex flex-col">
                <Header toggleTheme={toggleTheme} isDark={isDark} />

                <main className="flex-grow">
                    <div className="mb-8">
                        <Link to="/" className="text-xs font-mono text-stone-500 hover:text-primary flex items-center gap-1 mb-4 w-max">
                            <span className="material-icons-outlined text-[10px]">chevron_left</span> BACK_TO_HOME
                        </Link>

                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-stone-800 dark:text-zinc-100 mb-4">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4 text-xs font-mono text-stone-400 dark:text-zinc-500 mb-8 border-b border-stone-100 dark:border-zinc-800 pb-8">
                            <span>{post.date}</span>
                            <div className="h-3 w-px bg-stone-300 dark:bg-zinc-700"></div>
                            <div className="flex gap-2">
                                {post.tags?.map(tag => (
                                    <span key={tag}>#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <article className="prose dark:prose-invert prose-stone max-w-none font-sans leading-relaxed">
                        <ReactMarkdown
                            components={{
                                code: (props) => {
                                    const { children, className, ...rest } = props;
                                    return (
                                        <code className="bg-stone-100 dark:bg-zinc-800 px-1 py-0.5 rounded font-mono text-accent-red text-xs" {...rest}>
                                            {children}
                                        </code>
                                    );
                                },
                                pre: (props) => {
                                    const { children } = props;
                                    return (
                                        <div className="bg-stone-100 dark:bg-zinc-950 border-l-2 border-primary p-4 my-4 font-mono text-sm relative overflow-x-auto
                                            [&_code]:bg-transparent [&_code]:dark:bg-transparent 
                                            [&_code]:p-0 [&_code]:text-stone-800 [&_code]:dark:text-zinc-300
                                            [&_code]:text-sm [&_code]:whitespace-pre">

                                            <span className="absolute top-0 right-0 p-1 text-[10px] text-stone-400 uppercase tracking-widest opacity-50 select-none">
                                                snippet
                                            </span>

                                            <pre className="!bg-transparent !p-0 !m-0 font-mono">
                                                {children}
                                            </pre>
                                        </div>
                                    );
                                }
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </article>

                    <div className="mt-16 pt-8 border-t border-stone-200 dark:border-zinc-800">
                        <Link to="/" className="text-sm font-mono text-stone-500 hover:text-primary transition-colors">
                            ./END_OF_FILE
                        </Link>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default PostPage;
