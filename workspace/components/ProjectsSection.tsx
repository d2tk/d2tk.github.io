import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const projects: Project[] = [
    {
        id: '1',
        name: 'ARC_LDR',
        description: 'Asset loader and resource management system for high-performance web applications.',
        tags: ['RUST', 'WASM'],
        status: 'active',
        statusColor: 'accent-green'
    },
    {
        id: '2',
        name: 'OBS_SYNC',
        description: 'Bi-directional sync tool for local markdown notes to remote CMS.',
        tags: ['NODE', 'API'],
        status: 'maintenance',
        statusColor: 'primary'
    },
    {
        id: '3',
        name: 'GRID_SYS',
        description: 'Experimental CSS grid generator for brutalist layouts.',
        tags: ['CSS', 'JS'],
        status: 'experimental',
        statusColor: 'accent-blue'
    },
    {
        id: '4',
        name: 'PROTO_X',
        description: '[REDACTED] Neural interface prototype. Awaiting further clearance.',
        tags: ['UNKNOWN'],
        status: 'unknown',
        statusColor: 'stone-400'
    }
];

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects">
            <div className="flex items-baseline justify-between mb-6 border-b border-stone-200 dark:border-zinc-800 pb-2">
                <h2 className="font-mono text-xl font-bold flex items-center gap-2">
                    <span className="text-primary">./</span>PROJECTS
                </h2>
                <span className="text-xs font-mono text-stone-500 dark:text-zinc-500">INDEX OF /projects/</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;