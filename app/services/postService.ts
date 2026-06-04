import { posts } from "../data/posts";

export async function getPosts() {
    return posts;
}

export async function getPostById(id: number) {
    return posts.find((post) => post.id === id);
}