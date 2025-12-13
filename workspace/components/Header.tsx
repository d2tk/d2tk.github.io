import React from 'react';

interface HeaderProps {
    toggleTheme: () => void;
    isDark: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDark }) => {
    return (
        <header className="flex justify-between items-center mb-16 border-b border-stone-300 dark:border-zinc-700 pb-4 border-dashed">
            <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-primary">science</span>
                <h1 className="font-mono text-2xl font-bold tracking-tighter uppercase">
                    D2TK<span className="text-primary">_LAB</span>
                </h1>
            </div>
            <nav className="hidden md:flex gap-8 font-mono text-sm">
                <a className="hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4" href="#about">./ABOUT</a>
                <a className="hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4" href="#notes">./NOTES</a>
                <a className="hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4" href="#projects">./PROJECTS</a>
            </nav>
            <button 
                onClick={toggleTheme}
                className="p-2 rounded hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
                aria-label="Toggle Dark Mode"
            >
                {isDark ? (
                    <span className="material-icons-outlined block text-primary">light_mode</span>
                ) : (
                    <span className="material-icons-outlined block">dark_mode</span>
                )}
            </button>
        </header>
    );
};

export default Header;