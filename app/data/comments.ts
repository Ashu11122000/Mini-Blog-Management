import { BlogComment } from "../types/comment";

export const comments: BlogComment[] = [
    {
        id: 1,
        postId: 1,
        author: "John Doe",
        content:
            "Excellent article! I learned a lot about Next.js App Router. The explanation of layouts and nested routes was especially helpful.",
        createdAt: "2026-06-01",
    },
    {
        id: 2,
        postId: 1,
        author: "Sarah Wilson",
        content:
            "Very well explained. Looking forward to more tutorials covering server actions and advanced routing.",
        createdAt: "2026-06-02",
    },
    {
        id: 3,
        postId: 2,
        author: "Michael Brown",
        content:
            "This helped me understand dynamic routing much better. The practical examples made it easy to follow.",
        createdAt: "2026-06-03",
    },
    {
        id: 4,
        postId: 3,
        author: "Emily Davis",
        content:
            "Great content! The examples were easy to follow and implement in my own project.",
        createdAt: "2026-06-04",
    },
    {
        id: 5,
        postId: 2,
        author: "David Johnson",
        content:
            "I was struggling with route parameters for days. This guide finally made everything click.",
        createdAt: "2026-06-04",
    },
    {
        id: 6,
        postId: 3,
        author: "Sophia Martinez",
        content:
            "The screenshots and code snippets were extremely useful. Thank you for sharing this tutorial.",
        createdAt: "2026-06-04",
    },
    {
        id: 7,
        postId: 4,
        author: "James Anderson",
        content:
            "One of the best explanations of React Server Components I've read so far.",
        createdAt: "2026-06-05",
    },
    {
        id: 8,
        postId: 4,
        author: "Olivia Thompson",
        content:
            "Could you create a follow-up article covering caching and revalidation strategies?",
        createdAt: "2026-06-05",
    },
    {
        id: 9,
        postId: 5,
        author: "Daniel Clark",
        content:
            "The deployment section saved me a lot of time. Everything worked exactly as described.",
        createdAt: "2026-06-05",
    },
    {
        id: 10,
        postId: 5,
        author: "Emma White",
        content:
            "I appreciate how beginner-friendly this article is while still covering advanced concepts.",
        createdAt: "2026-06-05",
    },
    {
        id: 11,
        postId: 6,
        author: "William Harris",
        content:
            "The performance optimization tips noticeably improved my application's loading speed.",
        createdAt: "2026-06-05",
    },
    {
        id: 12,
        postId: 6,
        author: "Ava Walker",
        content:
            "Amazing breakdown of the topic. Looking forward to more content on scalability and architecture.",
        createdAt: "2026-06-05",
    },
];