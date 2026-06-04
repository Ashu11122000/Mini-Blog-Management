import { DashboardStat, RecentPost } from "../types/dashboard";

export const dashboardStats: DashboardStat[] = [
    {
        title: "Total Posts",
        value: 124,
        change: "+12.8%",
        icon: "file",
    },
    {
        title: "Total Views",
        value: 128548,
        change: "+18.4%",
        icon: "eye",
    },
    {
        title: "Comments",
        value: 3486,
        change: "+9.2%",
        icon: "message",
    },
    {
        title: "Categories",
        value: 18,
        change: "+2.5%",
        icon: "folder",
    },
];

export const recentPosts: RecentPost[] = [
    {
        id: 1,
        title: "Exploring the Hidden Mountains of Himachal Pradesh",
        category: "Travel",
        views: 12480,
        comments: 128,
        date: "May 18, 2025",
        status: "Published",
    },
    {
        id: 2,
        title: "10 Productivity Habits That Changed My Career",
        category: "Productivity",
        views: 9842,
        comments: 84,
        date: "May 17, 2025",
        status: "Published",
    },
    {
        id: 3,
        title: "Building a Modern Blog with Next.js 15",
        category: "Web Development",
        views: 16540,
        comments: 245,
        date: "May 16, 2025",
        status: "Published",
    },
    {
        id: 4,
        title: "Complete Guide to TypeScript for React Developers",
        category: "Programming",
        views: 11230,
        comments: 173,
        date: "May 15, 2025",
        status: "Published",
    },
    {
        id: 5,
        title: "Mastering Tailwind CSS in Real Projects",
        category: "Frontend",
        views: 8720,
        comments: 91,
        date: "May 14, 2025",
        status: "Draft",
    },
];