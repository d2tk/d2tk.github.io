export interface Project {
    id: string;
    name: string;
    description: string;
    tags: string[];
    status: 'active' | 'maintenance' | 'archived' | 'experimental' | 'unknown';
    statusColor: string; // Tailwind class part, e.g., 'primary', 'accent-green'
    link?: string;
}

export interface NavItem {
    label: string;
    href: string;
}

export interface Post {
    slug: string;
    title: string;
    date: string;
    type?: 'article' | 'note';
    tags?: string[];
    tag?: string; // Primary tag for display
    tagColor?: string;
    content: string;
}

// Keeping Note compatible with NoteItem props (it expects id, date, title, tag, tagColor)
// We can just alias Post to Note if we map slug to id
export type Note = Post & { id: string };