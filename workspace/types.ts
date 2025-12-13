export interface Project {
    id: string;
    name: string;
    description: string;
    tags: string[];
    status: 'active' | 'maintenance' | 'archived' | 'experimental' | 'unknown';
    statusColor: string; // Tailwind class part, e.g., 'primary', 'accent-green'
    link?: string;
}

export interface Note {
    id: string;
    date: string;
    title: string;
    tag: string;
    tagColor: 'theory' | 'dev' | 'design' | 'rust';
}

export interface NavItem {
    label: string;
    href: string;
}