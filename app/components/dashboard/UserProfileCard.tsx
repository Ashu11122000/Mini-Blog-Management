// components/dashboard/UserProfileCard.tsx

export default function UserProfileCard() {
  return (
    <div className="bg-white rounded-lg shadow p-5">
      <h2 className="text-xl font-semibold mb-4">
        Profile
      </h2>

      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl">
          A
        </div>

        <h3 className="font-semibold mt-4">
          Admin User
        </h3>

        <p className="text-gray-500">
          admin@example.com
        </p>
      </div>
    </div>
  );
}