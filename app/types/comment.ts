// types/comment.ts

export interface BlogComment {
    id: number;
    postId: number;
    author: string;
    content: string;
    createdAt: string;
}