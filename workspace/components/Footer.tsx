import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="mt-20 border-t border-stone-300 dark:border-zinc-800 pt-8 pb-12 flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-mono text-stone-500">
            <div>
                <p>© 2024 D2TK LAB. ALL SYSTEMS OPERATIONAL.</p>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-primary">RSS</a>
                <a href="#" className="hover:text-primary">KEY</a>
                <a href="#" className="hover:text-primary">STATUS</a>
            </div>
        </footer>
    );
};

export default Footer;