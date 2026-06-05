// types/comment.ts

export interface BlogComment {
    id: number;

    postId: number;

    author: string;

    email?: string;

    avatar?: string;

    content: string;

    status?: "approved" | "pending" | "spam";

    likes?: number;

    isEdited?: boolean;

    createdAt: string;

    updatedAt?: string;
}