import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="fixed left-0 top-0 h-full flex flex-col w-2 z-50">
            <div className="h-1/4 bg-accent-red w-full"></div>
            <div className="h-1/4 bg-primary w-full"></div>
            <div className="h-1/4 bg-accent-green w-full"></div>
            <div className="h-1/4 bg-accent-blue w-full"></div>
        </div>
    );
};

export default Sidebar;