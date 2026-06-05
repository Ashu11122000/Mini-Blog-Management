export interface DashboardStat {
    title: string;

    value: number;

    change: string;

    trend: "up" | "down" | "neutral";

    icon:
        | "file"
        | "eye"
        | "message"
        | "folder";

    description?: string;

    color?:
        | "indigo"
        | "emerald"
        | "amber"
        | "violet"
        | "cyan";

    lastUpdated?: string;
}

export interface RecentPost {
    id: number;
    title: string;
    category: string;
    views: number;
    comments: number;
    date: string;
    status: "Published" | "Draft" | "Review";
}