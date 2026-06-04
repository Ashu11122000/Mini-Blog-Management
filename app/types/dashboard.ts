export interface DashboardStat {
    title: string;
    value: number;
    change: string;
    icon: "file" | "eye" | "message" | "folder";
}

export interface RecentPost {
    id: number;
    title: string;
    category: string;
    views: number;
    comments: number;
    date: string;
    status: "Published" | "Draft";
}