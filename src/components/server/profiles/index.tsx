export default async function Profile() {
console.log("🔥🔥🔥 Server component is running!");
  let url = "/profile/";


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <p className="text-gray-700">Check your terminal/console logs 🚀</p>
    </div>
  );
}