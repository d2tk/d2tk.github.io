import React from 'react';
import { Note } from '../types';

interface NoteItemProps {
    note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
    const getBorderColor = (color: string) => {
        switch(color) {
            case 'theory': return 'hover:border-primary group-hover:text-primary';
            case 'dev': return 'hover:border-accent-blue group-hover:text-accent-blue';
            case 'design': return 'hover:border-accent-green group-hover:text-accent-green';
            case 'rust': return 'hover:border-accent-red group-hover:text-accent-red';
            default: return 'hover:border-stone-400';
        }
    };

    return (
        <a href="#" className="block group">
            <div className={`flex items-center p-3 hover:bg-surface-light dark:hover:bg-surface-dark border-l-2 border-transparent transition-all rounded-r ${getBorderColor(note.tagColor).split(' ')[0]}`}>
                <span className="text-stone-400 w-32 shrink-0">{note.date}</span>
                <span className={`flex-grow transition-colors ${getBorderColor(note.tagColor).split(' ')[1]}`}>
                    {note.title}
                </span>
                <span className="text-xs text-stone-400 border border-stone-200 dark:border-zinc-700 px-1 rounded ml-2">
                    #{note.tag}
                </span>
            </div>
        </a>
    );
};

export default NoteItem;