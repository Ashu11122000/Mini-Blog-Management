export interface Category {
    id: number;

    name: string;

    slug: string;

    description: string;

    color?: string;

    icon?: string;

    status?: "active" | "inactive";

    postCount?: number;

    createdAt?: string;

    updatedAt?: string;
}