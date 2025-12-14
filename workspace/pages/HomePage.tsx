import React from 'react';
import Header from '../components/Header';
import ArticlesSection from '../components/ArticlesSection';
import ProjectsSection from '../components/ProjectsSection';
import NotesSection from '../components/NotesSection';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Scanline from '../components/Scanline';
import AboutSection from '../components/AboutSection';

interface HomePageProps {
    toggleTheme: () => void;
    isDark: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ toggleTheme, isDark }) => {
    return (
        <>
            <Sidebar />
            <Scanline />
            <div className="pl-4 md:pl-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
                <Header toggleTheme={toggleTheme} isDark={isDark} />
                <main className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <AboutSection />
                    <div className="lg:col-span-8 flex flex-col gap-16">
                        <ArticlesSection limit={3} />
                        <ProjectsSection />
                        {/* <NotesSection /> */}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default HomePage;
