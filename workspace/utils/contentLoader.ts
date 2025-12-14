import frontMatter from 'front-matter';
import { Post } from '../types';

export function getAllPosts(): Post[] {
    // Vite glob import to read all markdown files in content/posts
    const modules = import.meta.glob<string>('../content/posts/*.md', {
        eager: true,
        query: '?raw',
        import: 'default'
    });

    const posts = Object.entries(modules).map(([path, content]) => {
        const { attributes, body } = frontMatter<any>(content);
        const slug = path.split('/').pop()?.replace('.md', '') || '';

        // Handle tag mapping (first tag in tags array becomes 'tag')
        const tags = attributes.tags || [];
        const primaryTag = attributes.tag || (tags.length > 0 ? tags[0] : 'uncategorized');

        return {
            slug,
            content: body,
            // Spread attributes to capture title, date, etc.
            ...attributes,
            // Ensure compatibility
            tags,
            tag: primaryTag,
            tagColor: attributes.tagColor || primaryTag, // Default color to tag name if not specified
            type: attributes.type || 'note'
        } as Post;
    });

    // Sort by date descending
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticles(): Post[] {
    return getAllPosts().filter(post => post.type === 'article');
}

export function getNotes(): Post[] {
    return getAllPosts().filter(post => post.type === 'note');
}
