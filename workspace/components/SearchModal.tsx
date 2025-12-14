import React, { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { getAllPosts } from '../utils/contentLoader';
import { Post } from '../types';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Fuse.FuseResult<Post>[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    // Initialize Fuse and load posts
    useEffect(() => {
        const allPosts = getAllPosts();
        setPosts(allPosts);
    }, []);

    const fuse = new Fuse(posts, {
        keys: ['title', 'tags', 'content'],
        threshold: 0.3, // Fuzzy matching threshold (0.0 = perfect match, 1.0 = match anything)
        includeMatches: true,
        minMatchCharLength: 2,
    });

    useEffect(() => {
        if (isOpen) {
            // Focus input when modal opens
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }
        const searchResults = fuse.search(query);
        setResults(searchResults.slice(0, 5)); // Limit to top 5 results
    }, [query, posts]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                // Toggle logic is handled in parenet or we can add it here if this component controls global state
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    // Close on click outside
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-stone-200 dark:border-zinc-800 animate-in fade-in zoom-in-95 duration-200"
            >
                {/* Search Input */}
                <div className="flex items-center p-4 border-b border-stone-100 dark:border-zinc-800">
                    <span className="material-icons-outlined text-stone-400 mr-3">search</span>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search posts..."
                        className="flex-1 bg-transparent outline-none text-lg text-stone-800 dark:text-stone-200 placeholder-stone-400 font-mono"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="flex gap-2">
                        <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs text-stone-500 bg-stone-100 dark:bg-zinc-800 rounded border border-stone-200 dark:border-zinc-700 font-mono">
                            ESC
                        </kbd>
                    </div>
                </div>

                {/* Results */}
                {(query.length > 0 && results.length === 0) && (
                    <div className="p-8 text-center text-stone-500 dark:text-zinc-500 font-mono text-sm">
                        No results found for "{query}"
                    </div>
                )}

                {results.length > 0 && (
                    <div className="max-h-[60vh] overflow-y-auto py-2">
                        {results.map(({ item }) => (
                            <a
                                key={item.slug}
                                href={`#${item.slug}`} // Assuming anchor links for now, or routing
                                className="block px-4 py-3 hover:bg-stone-50 dark:hover:bg-zinc-800/50 group transition-colors cursor-pointer"
                                onClick={() => {
                                    // In a real app with routing, navigate here
                                    onClose();
                                }}
                            >
                                <div className="flex items-baseline justify-between mb-1">
                                    <h4 className="font-bold text-stone-800 dark:text-zinc-200 group-hover:text-primary transition-colors font-mono">
                                        {item.title}
                                    </h4>
                                    <span className="text-xs text-stone-400 font-mono">{item.date}</span>
                                </div>
                                <div className="text-sm text-stone-500 dark:text-zinc-500 line-clamp-1 font-sans">
                                    {/* Snippet could go here, for now just tags */}
                                    {item.tags?.map(tag => (
                                        <span key={tag} className="mr-2 text-xs bg-stone-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-stone-500">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                {query.length === 0 && (
                    <div className="p-8 text-center text-stone-400 dark:text-zinc-600 font-mono text-xs">
                        Type to search articles and notes...
                    </div>
                )}

                {/* Footer */}
                <div className="px-4 py-3 bg-stone-50 dark:bg-zinc-950/50 border-t border-stone-100 dark:border-zinc-800 flex justify-between items-center text-xs text-stone-400 font-mono">
                    <span>
                        <span className="text-primary font-bold">Fuse.js</span> powered
                    </span>
                    <span>
                        {posts.length} documents indexed
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
