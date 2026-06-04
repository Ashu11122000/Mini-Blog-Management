import DashboardHeader from '../components/dashboard/DashboardHeader';
import Sidebar from '../components/dashboard/Sidebar';
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-1">
                <DashboardHeader />

                <main className="p-8 bg-slate-50 min-h-screen">
                    {children}
                </main>
            </div>
        </div>
    );
}