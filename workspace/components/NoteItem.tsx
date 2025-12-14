import React from 'react';
import { Link } from 'react-router-dom';
import { Note } from '../types';

interface NoteItemProps {
    note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
    return (
        <article className="group flex items-baseline gap-4 hover:bg-stone-50 dark:hover:bg-zinc-800/50 p-2 -mx-2 rounded transition-colors">
            <span className="font-mono text-xs text-stone-400 dark:text-zinc-500 whitespace-nowrap">
                {note.date}
            </span>
            <div className="flex-1 min-w-0">
                <Link to={`/posts/${note.slug}`} className="block">
                    <h4 className="font-mono text-stone-700 dark:text-zinc-300 truncate group-hover:text-primary transition-colors">
                        {note.title}
                    </h4>
                </Link>
            </div>
            {note.tag && (
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity ${note.tagColor ? `bg-${note.tagColor}-100 text-${note.tagColor}-600` : 'bg-stone-100 dark:bg-zinc-800 text-stone-500'
                    }`}>
                    {note.tag}
                </span>
            )}
        </article>
    );
};

export default NoteItem;