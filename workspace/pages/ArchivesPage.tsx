import React from 'react';
import Header from '../components/Header';
import ArticlesSection from '../components/ArticlesSection';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Scanline from '../components/Scanline';
import { Link } from 'react-router-dom';

interface ArchivesPageProps {
    toggleTheme: () => void;
    isDark: boolean;
}

const ArchivesPage: React.FC<ArchivesPageProps> = ({ toggleTheme, isDark }) => {
    return (
        <>
            <Sidebar />
            <Scanline />
            <div className="pl-4 md:pl-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
                <Header toggleTheme={toggleTheme} isDark={isDark} />

                <main>
                    <div className="mb-8">
                        <Link to="/" className="text-xs font-mono text-stone-500 hover:text-primary flex items-center gap-1 mb-4 w-max">
                            <span className="material-icons-outlined text-[10px]">chevron_left</span> BACK_TO_HOME
                        </Link>
                    </div>

                    <ArticlesSection />
                </main>

                <Footer />
            </div>
        </>
    );
};

export default ArchivesPage;
