import React, { useState } from 'react';
import SearchModal from './SearchModal';

interface HeaderProps {
    toggleTheme: () => void;
    isDark: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDark }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="flex justify-between items-center mb-16 border-b border-stone-200 dark:border-zinc-800 pb-4 relative">
            <div>
                <h1 className="text-4xl font-black tracking-tighter mb-1 glitch-text" data-text="D2TK_LAB">
                    D2TK_LAB
                </h1>
                <p className="font-mono text-xs text-stone-500 dark:text-zinc-500 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    SYSTEM_ONLINE
                </p>
            </div>

            <div className="flex items-center gap-6 font-mono text-sm">
                <button
                    onClick={() => setIsSearchOpen(true)}
                    className="flex items-center gap-2 text-stone-500 hover:text-stone-800 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors group"
                >
                    <span className="material-icons-outlined group-hover:scale-110 transition-transform">search</span>
                    <span className="hidden sm:inline">SEARCH</span>
                    <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] border border-stone-300 dark:border-zinc-700 rounded bg-stone-100 dark:bg-zinc-800 ml-1">
                        ⌘K
                    </kbd>
                </button>

                <div className="h-4 w-px bg-stone-300 dark:bg-zinc-700"></div>

                <div className="flex items-center gap-4">
                    <span className="text-stone-400 dark:text-zinc-600">v0.9.2</span>
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 flex items-center justify-center border border-stone-300 dark:border-zinc-700 rounded-sm hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        <span className="material-icons-outlined text-stone-600 dark:text-zinc-400">
                            {isDark ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                </div>
            </div>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </header>
    );
};

export default Header;