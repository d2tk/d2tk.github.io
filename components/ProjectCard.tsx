import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const isUnknown = project.status === 'unknown';
    
    // Status color mapping for the dot
    const getStatusColor = (color: string) => {
        switch(color) {
            case 'primary': return 'bg-primary';
            case 'accent-green': return 'bg-accent-green';
            case 'accent-blue': return 'bg-accent-blue';
            case 'accent-red': return 'bg-accent-red';
            default: return 'bg-stone-400';
        }
    };

    const containerClasses = isUnknown
        ? "group relative bg-stone-100 dark:bg-zinc-800/50 border border-stone-200 dark:border-zinc-800 p-6 rounded-sm opacity-75"
        : "group relative bg-white dark:bg-zinc-900 border border-stone-300 dark:border-zinc-700 p-6 rounded-sm hover:border-primary dark:hover:border-primary transition-colors cursor-pointer";

    return (
        <div className={containerClasses}>
            <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                {isUnknown ? (
                    <span className="material-icons-outlined text-stone-400 text-sm">lock</span>
                ) : (
                    <span className="material-icons-outlined text-stone-400">arrow_outward</span>
                )}
            </div>

            <div className="flex items-center gap-2 mb-3">
                <span className={`w-2 h-2 rounded-full ${getStatusColor(project.statusColor)} ${project.status === 'active' ? 'animate-pulse' : ''}`}></span>
                <h3 className={`font-mono font-bold text-lg ${!isUnknown ? 'group-hover:text-primary' : 'text-stone-500 dark:text-zinc-500'} transition-colors`}>
                    {project.name}
                </h3>
            </div>

            <p className={`text-sm mb-4 h-12 ${isUnknown ? 'text-stone-500 dark:text-zinc-500' : 'text-stone-600 dark:text-zinc-400'}`}>
                {project.description}
            </p>

            <div className={`flex gap-2 text-xs font-mono ${isUnknown ? 'text-stone-400' : ''}`}>
                {project.tags.map(tag => (
                    <span key={tag} className={`px-2 py-1 rounded ${isUnknown ? 'border border-stone-300 dark:border-zinc-700' : 'bg-surface-light dark:bg-zinc-800'}`}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;