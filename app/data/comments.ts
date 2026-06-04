import { BlogComment } from "../types/comment";

export const comments: BlogComment[] = [
    {
        id: 1,
        postId: 1,
        author: "John Doe",
        content:
            "Excellent article! I learned a lot about Next.js App Router.",
        createdAt: "2026-06-01",
    },
    {
        id: 2,
        postId: 1,
        author: "Sarah Wilson",
        content:
            "Very well explained. Looking forward to more tutorials.",
        createdAt: "2026-06-02",
    },
    {
        id: 3,
        postId: 2,
        author: "Michael Brown",
        content:
            "This helped me understand dynamic routing much better.",
        createdAt: "2026-06-03",
    },
    {
        id: 4,
        postId: 3,
        author: "Emily Davis",
        content:
            "Great content! The examples were easy to follow.",
        createdAt: "2026-06-04",
    },
];