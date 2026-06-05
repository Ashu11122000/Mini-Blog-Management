import { Post } from "../types/post";

export const posts: Post[] = [
    {
        id: 1,
        title: "Getting Started with Next.js 16: The Complete Developer Guide",
        slug: "getting-started-with-nextjs-16",
        excerpt:
            "Learn how to build modern web applications using Next.js 16, App Router, Server Components, and TypeScript.",
        category: "Web Development",
        author: "Ashish Sharma",
        authorAvatar: "/images/authors/ashish.jpg",
        views: 1248,
        comments: 18,
        likes: 142,
        shares: 36,
        readingTime: "8 min read",
        featured: true,
        createdAt: "2026-06-01",
        updatedAt: "2026-06-02",
        publishedAt: "2026-06-01",
        status: "Published",
        image: "/images/blog-1.jpg",
        tags: ["Next.js", "React", "TypeScript"],
        seoTitle: "Next.js 16 Complete Developer Guide",
        seoDescription:
            "Master Next.js 16 with App Router, Server Components, and TypeScript best practices.",
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
        slug: "understanding-react-server-components",
        excerpt:
            "A deep dive into React Server Components, rendering strategies, and performance optimization.",
        category: "React",
        author: "Ashish Sharma",
        authorAvatar: "/images/authors/ashish.jpg",
        views: 987,
        comments: 10,
        likes: 98,
        shares: 24,
        readingTime: "6 min read",
        featured: true,
        createdAt: "2026-06-02",
        updatedAt: "2026-06-02",
        publishedAt: "2026-06-02",
        status: "Published",
        image: "/images/blog-2.jpg",
        tags: ["React", "Server Components", "Performance"],
        seoTitle: "React Server Components Explained",
        seoDescription:
            "Understand how React Server Components improve performance and reduce bundle size.",
        content: `
React Server Components introduce a new rendering model that allows components to run entirely on the server.

Unlike traditional client-side rendering, Server Components reduce JavaScript bundles and improve page performance by sending rendered HTML directly to the browser.

This article explains when to use Server Components, how they interact with Client Components, and best practices for building efficient applications with the React ecosystem.
        `,
    },

    {
        id: 3,
        title: "Mastering Tailwind CSS for Modern UI Design",
        slug: "mastering-tailwind-css",
        excerpt:
            "Advanced Tailwind CSS techniques for building premium interfaces.",
        category: "UI/UX Design",
        author: "Ashish Sharma",
        authorAvatar: "/images/authors/ashish.jpg",
        views: 1765,
        comments: 24,
        likes: 214,
        shares: 52,
        readingTime: "7 min read",
        featured: false,
        createdAt: "2026-06-03",
        publishedAt: "2026-06-03",
        status: "Published",
        image: "/images/blog-3.jpg",
        tags: ["Tailwind CSS", "Design", "Frontend"],
        seoTitle: "Tailwind CSS Advanced Guide",
        seoDescription:
            "Learn advanced Tailwind CSS patterns for building modern UIs.",
        content: `...`,
    },

    {
        id: 4,
        title: "Building Scalable APIs with Route Handlers in Next.js",
        slug: "scalable-apis-with-route-handlers",
        excerpt:
            "Create powerful backend APIs directly inside Next.js applications.",
        category: "Backend",
        author: "Ashish Sharma",
        authorAvatar: "/images/authors/ashish.jpg",
        views: 842,
        comments: 9,
        likes: 73,
        shares: 18,
        readingTime: "5 min read",
        featured: false,
        createdAt: "2026-06-03",
        publishedAt: "2026-06-03",
        status: "Published",
        image: "/images/blog-4.jpg",
        tags: ["API", "Next.js", "Backend"],
        seoTitle: "Next.js Route Handlers Guide",
        seoDescription:
            "Learn how to create scalable APIs using Route Handlers in Next.js.",
        content: `...`,
    },

    {
        id: 5,
        title: "TypeScript Best Practices Every Developer Should Know",
        slug: "typescript-best-practices",
        excerpt:
            "Improve code quality with modern TypeScript patterns and best practices.",
        category: "Programming",
        author: "Ashish Sharma",
        authorAvatar: "/images/authors/ashish.jpg",
        views: 2154,
        comments: 31,
        likes: 321,
        shares: 67,
        readingTime: "9 min read",
        featured: true,
        createdAt: "2026-06-04",
        publishedAt: "2026-06-04",
        status: "Published",
        image: "/images/blog-5.jpg",
        tags: ["TypeScript", "JavaScript", "Development"],
        seoTitle: "TypeScript Best Practices",
        seoDescription:
            "Discover practical TypeScript techniques for scalable applications.",
        content: `...`,
    },

    {
        id: 6,
        title: "The Future of Full-Stack Development in 2026",
        slug: "future-of-fullstack-development-2026",
        excerpt:
            "Explore the technologies shaping the future of software development.",
        category: "Technology",
        author: "Ashish Sharma",
        authorAvatar: "/images/authors/ashish.jpg",
        views: 3098,
        comments: 42,
        likes: 428,
        shares: 91,
        readingTime: "10 min read",
        featured: true,
        createdAt: "2026-06-04",
        publishedAt: "2026-06-04",
        status: "Published",
        image: "/images/blog-6.jpg",
        tags: ["Technology", "Full Stack", "AI"],
        seoTitle: "Future of Full Stack Development",
        seoDescription:
            "Learn about AI, serverless computing, and the future of full-stack development.",
        content: `...`,
    },

    {
        id: 7,
        title: "Building AI-Powered Applications with OpenAI APIs",
        slug: "building-ai-powered-applications",
        excerpt:
            "A practical guide to integrating AI features into modern applications.",
        category: "Artificial Intelligence",
        author: "Ashish Sharma",
        authorAvatar: "/images/authors/ashish.jpg",
        views: 4215,
        comments: 58,
        likes: 612,
        shares: 138,
        readingTime: "12 min read",
        featured: true,
        createdAt: "2026-06-05",
        publishedAt: "2026-06-05",
        status: "Published",
        image: "/images/blog-7.jpg",
        tags: ["AI", "OpenAI", "LLM"],
        seoTitle: "AI-Powered Applications Guide",
        seoDescription:
            "Learn how to build intelligent applications using modern AI APIs.",
        content: `Detailed article content here...`,
    },

    {
        id: 8,
        title: "Docker & Kubernetes for Modern Developers",
        slug: "docker-kubernetes-modern-developers",
        excerpt:
            "Master containerization and orchestration with Docker and Kubernetes.",
        category: "DevOps",
        author: "Ashish Sharma",
        authorAvatar: "/images/authors/ashish.jpg",
        views: 2785,
        comments: 34,
        likes: 295,
        shares: 74,
        readingTime: "11 min read",
        featured: false,
        createdAt: "2026-06-05",
        status: "Draft",
        image: "/images/blog-8.jpg",
        tags: ["Docker", "Kubernetes", "DevOps"],
        seoTitle: "Docker and Kubernetes Guide",
        seoDescription:
            "Everything developers need to know about containers and orchestration.",
        content: `Draft article content...`,
    },
];