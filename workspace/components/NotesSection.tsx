import React from 'react';
import NoteItem from './NoteItem';
import { getNotes } from '../utils/contentLoader';

const NotesSection: React.FC = () => {
    const notes = getNotes().map(note => ({
        ...note,
        id: note.slug // Map slug to id for NoteItem compatibility
    }));

    return (
        <section id="notes">
            <div className="flex items-baseline justify-between mb-6 border-b border-stone-200 dark:border-zinc-800 pb-2">
                <h2 className="font-mono text-xl font-bold flex items-center gap-2">
                    <span className="text-primary">./</span>NOTES
                </h2>
                <span className="text-xs font-mono text-stone-500 dark:text-zinc-500">CATEGORY</span>
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