import { Post } from "../types/post";

export const posts: Post[] = [
    {
        id: 1,
        title: "Getting Started with Next.js 16: The Complete Developer Guide",
        category: "Web Development",
        author: "Ashish Sharma",
        views: 1248,
        comments: 18,
        createdAt: "2026-06-01",
        image: "/images/blog-1.jpg",
        tags: ["Next.js", "React", "TypeScript"],
        content: `
Next.js 16 is one of the most powerful frameworks for building modern web applications.

It provides features such as Server Components, App Router, Server Actions, and optimized rendering strategies that significantly improve performance and developer experience.

In this guide, you'll learn how to set up a Next.js project, organize routes using the App Router, manage layouts, and build scalable applications using TypeScript and Tailwind CSS.

Whether you're a beginner or an experienced React developer, Next.js offers the tools needed to create fast, SEO-friendly, and production-ready web applications.
        `,
    },

    {
        id: 2,
        title: "Understanding React Server Components in Depth",
        category: "React",
        author: "Ashish Sharma",
        views: 987,
        comments: 10,
        createdAt: "2026-06-02",
        image: "/images/blog-2.jpg",
        tags: ["React", "Server Components", "Performance"],
        content: `
React Server Components introduce a new rendering model that allows components to run entirely on the server.

Unlike traditional client-side rendering, Server Components reduce JavaScript bundles and improve page performance by sending rendered HTML directly to the browser.

This article explains when to use Server Components, how they interact with Client Components, and best practices for building efficient applications with the React ecosystem.
        `,
    },

    {
        id: 3,
        title: "Mastering Tailwind CSS for Modern UI Design",
        category: "UI/UX Design",
        author: "Ashish Sharma",
        views: 1765,
        comments: 24,
        createdAt: "2026-06-03",
        image: "/images/blog-3.jpg",
        tags: ["Tailwind CSS", "Design", "Frontend"],
        content: `
Tailwind CSS has transformed the way developers build user interfaces.

Its utility-first approach enables rapid prototyping while maintaining consistency and scalability.

In this article, we explore advanced Tailwind techniques, responsive design strategies, custom themes, and animation patterns that can help you create professional-grade user experiences.
        `,
    },

    {
        id: 4,
        title: "Building Scalable APIs with Route Handlers in Next.js",
        category: "Backend",
        author: "Ashish Sharma",
        views: 842,
        comments: 9,
        createdAt: "2026-06-03",
        image: "/images/blog-4.jpg",
        tags: ["API", "Next.js", "Backend"],
        content: `
Route Handlers in Next.js provide a powerful way to create backend APIs directly within your application.

By leveraging the App Router architecture, developers can build secure and efficient endpoints without maintaining a separate server.

This guide covers API creation, request handling, dynamic routes, validation, and best practices for production-ready backend development.
        `,
    },

    {
        id: 5,
        title: "TypeScript Best Practices Every Developer Should Know",
        category: "Programming",
        author: "Ashish Sharma",
        views: 2154,
        comments: 31,
        createdAt: "2026-06-04",
        image: "/images/blog-5.jpg",
        tags: ["TypeScript", "JavaScript", "Development"],
        content: `
TypeScript improves code quality by introducing static typing to JavaScript applications.

From interfaces and generics to advanced utility types, TypeScript helps teams write safer and more maintainable code.

In this article, you'll learn practical patterns, architecture tips, and real-world examples that can elevate your development workflow.
        `,
    },

    {
        id: 6,
        title: "The Future of Full-Stack Development in 2026",
        category: "Technology",
        author: "Ashish Sharma",
        views: 3098,
        comments: 42,
        createdAt: "2026-06-04",
        image: "/images/blog-6.jpg",
        tags: ["Technology", "Full Stack", "AI"],
        content: `
The web development landscape continues to evolve rapidly.

With advancements in AI-assisted development, edge computing, serverless infrastructure, and modern frameworks, full-stack developers are becoming more productive than ever before.

This article explores the trends shaping the future of software engineering and how developers can prepare for the next generation of web technologies.
        `,
    },
];