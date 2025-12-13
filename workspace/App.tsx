import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Scanline from './components/Scanline';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ArticlesSection from './components/ArticlesSection';
import ProjectsSection from './components/ProjectsSection';
import NotesSection from './components/NotesSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        // Check system preference on mount
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    return (
        <>
            <Sidebar />
            <Scanline />
            
            <div className="pl-4 md:pl-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
                <Header toggleTheme={toggleTheme} isDark={isDark} />
                
                <main className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <AboutSection />
                    
                    <div className="lg:col-span-8 flex flex-col gap-16">
                        <ArticlesSection />
                        <ProjectsSection />
                        <NotesSection />
                    </div>
                </main>
                
                <Footer />
            </div>
        </>
    );
};

export default App;