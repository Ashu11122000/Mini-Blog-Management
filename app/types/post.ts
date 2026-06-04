export interface Post {
    id: number;

    title: string;
    content: string;
    category: string;

    author: string;
    image: string;

    tags: string[];

    views: number;
    comments: number;

    createdAt: string;
    updatedAt?: string;

    readingTime?: string;

    featured?: boolean;

    status?: "Draft" | "Published" | "Archived";
}