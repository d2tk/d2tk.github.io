import React from 'react';
import NoteItem from './NoteItem';
import { Note } from '../types';

const notes: Note[] = [
    {
        id: '1',
        date: '2023-11-02',
        title: 'Thoughts on digital gardening vs. streams',
        tag: 'theory',
        tagColor: 'theory'
    },
    {
        id: '2',
        date: '2023-10-28',
        title: 'Configuring NeoVim for frontend chaos',
        tag: 'dev',
        tagColor: 'dev'
    },
    {
        id: '3',
        date: '2023-10-15',
        title: 'The aesthetics of retro-futurism interfaces',
        tag: 'design',
        tagColor: 'design'
    },
    {
        id: '4',
        date: '2023-09-30',
        title: 'Deploying Rust on Edge: A survival guide',
        tag: 'rust',
        tagColor: 'rust'
    }
];

const NotesSection: React.FC = () => {
    return (
        <section id="notes">
            <div className="flex items-baseline justify-between mb-6 border-b border-stone-200 dark:border-zinc-800 pb-2">
                <h2 className="font-mono text-xl font-bold flex items-center gap-2">
                    <span className="text-primary">./</span>NOTES
                </h2>
                <span className="text-xs font-mono text-stone-500 dark:text-zinc-500">READING BUFFER</span>
            </div>
            <div className="space-y-2 font-mono text-sm">
                {notes.map(note => (
                    <NoteItem key={note.id} note={note} />
                ))}
            </div>
            <div className="mt-6">
                <a href="#" className="text-xs font-mono text-stone-500 hover:text-primary flex items-center gap-1 w-max">
                    VIEW_ALL_ARCHIVES <span className="material-icons-outlined text-[10px]">chevron_right</span>
                </a>
            </div>
        </section>
    );
};

export default NotesSection;