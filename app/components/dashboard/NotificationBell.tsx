// components/dashboard/NotificationBell.tsx

export default function NotificationBell() {
  return (
    <div className="relative cursor-pointer">
      <span className="text-2xl">🔔</span>

      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
        3
      </span>
    </div>
  );
}