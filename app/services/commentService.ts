import { comments } from "../data/comments";
import { BlogComment } from "../types/comment";

export const getAllComments = (): BlogComment[] => {
    return comments;
};

export const getCommentById = (
    id: number
): BlogComment | undefined => {
    return comments.find(
        (comment) => comment.id === id
    );
};

export const getCommentsByPostId = (
    postId: number
): BlogComment[] => {
    return comments.filter(
        (comment) => comment.postId === postId
    );
};

export const createComment = (
    commentData: Omit<
        BlogComment,
        "id" | "createdAt"
    >
): BlogComment => {
    const newComment: BlogComment = {
        id: Date.now(),
        createdAt: new Date().toISOString(),
        ...commentData,
    };

    comments.push(newComment);

    return newComment;
};

export const updateComment = (
    id: number,
    updatedData: Partial<BlogComment>
): BlogComment | null => {
    const index = comments.findIndex(
        (comment) => comment.id === id
    );

    if (index === -1) {
        return null;
    }

    comments[index] = {
        ...comments[index],
        ...updatedData,
    };

    return comments[index];
};

export const deleteComment = (
    id: number
): boolean => {
    const index = comments.findIndex(
        (comment) => comment.id === id
    );

    if (index === -1) {
        return false;
    }

    comments.splice(index, 1);

    return true;
};

export const getCommentCount = (): number => {
    return comments.length;
};

export const searchComments = (
    query: string
): BlogComment[] => {
    const searchTerm = query.toLowerCase();

    return comments.filter(
        (comment) =>
            comment.content
                .toLowerCase()
                .includes(searchTerm) ||
            comment.author
                .toLowerCase()
                .includes(searchTerm)
    );
};