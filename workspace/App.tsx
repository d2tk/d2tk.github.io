import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import ArchivesPage from './pages/ArchivesPage';

const App: React.FC = () => {
    // Theme toggle logic
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage toggleTheme={toggleTheme} isDark={isDark} />} />
                <Route path="/posts" element={<ArchivesPage toggleTheme={toggleTheme} isDark={isDark} />} />
                <Route path="/posts/:slug" element={<PostPage toggleTheme={toggleTheme} isDark={isDark} />} />
            </Routes>
        </Router>
    );
};

export default App;