// services/postService.ts

import { posts } from "../data/posts";
import { Post } from "../types/post";

export const getAllPosts = (): Post[] => {
    return posts;
};

export const getPostById = (id: number): Post | undefined => {
    return posts.find((post) => post.id === id);
};

export const createPost = (
    postData: Omit<Post, "id" | "views" | "comments" | "createdAt">
): Post => {
    const newPost: Post = {
        id: Date.now(),
        views: 0,
        comments: 0,
        createdAt: new Date().toISOString(),
        ...postData,
    };

    posts.push(newPost);

    return newPost;
};

export const updatePost = (
    id: number,
    updatedData: Partial<Post>
): Post | null => {
    const index = posts.findIndex((post) => post.id === id);

    if (index === -1) {
        return null;
    }

    posts[index] = {
        ...posts[index],
        ...updatedData,
    };

    return posts[index];
};

export const deletePost = (id: number): boolean => {
    const index = posts.findIndex((post) => post.id === id);

    if (index === -1) {
        return false;
    }

    posts.splice(index, 1);

    return true;
};

export const getPostsByCategory = (
    category: string
): Post[] => {
    return posts.filter(
        (post) =>
            post.category.toLowerCase() ===
            category.toLowerCase()
        );
    };

export const searchPosts = (
    query: string
): Post[] => {
    const searchTerm = query.toLowerCase();

    return posts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.content.toLowerCase().includes(searchTerm) ||
            post.category.toLowerCase().includes(searchTerm)
    );
};