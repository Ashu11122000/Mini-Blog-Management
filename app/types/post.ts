export interface Post {
    id: number;

    title: string;

    slug: string;

    excerpt?: string;

    content: string;

    category: string;

    author: string;

    authorAvatar?: string;

    image: string;

    tags: string[];

    views: number;

    comments: number;

    likes?: number;

    shares?: number;

    readingTime?: string;

    featured?: boolean;

    seoTitle?: string;

    seoDescription?: string;

    status:
        | "Draft"
        | "Published"
        | "Scheduled"
        | "Archived";

    createdAt: string;

    updatedAt?: string;

    publishedAt?: string;
}