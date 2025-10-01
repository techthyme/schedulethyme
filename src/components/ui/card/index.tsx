import { Collab } from "@/types";

interface CardProps {
  collab: Collab;
}

export default function Card({ collab }: CardProps) {
  const formatEventDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  return (
    <div className="group cursor-pointer transition-all duration-300 hover:shadow-lg h-full">
      <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {collab.imageUrl ? (
            <img
              src={collab.imageUrl}
              alt={collab.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}

          {/* Status badge */}
          <div className="hidden absolute top-3 left-3">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                collab.status === "upcoming" || collab.status === "scheduled"
                  ? "bg-green-500 text-white"
                  : collab.status === "ongoing"
                  ? "bg-blue-500 text-white"
                  : collab.status === "completed"
                  ? "bg-gray-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {collab.status === "upcoming" || collab.status === "scheduled"
                ? "Scheduledsss"
                : collab.status === "ongoing"
                ? "Live"
                : collab.status === "completed"
                ? "Done"
                : "Cancelled"}
            </span>
          </div>

          {/* Heart icon (like Airbnb) */}
          <div className="absolute top-3 right-3">
            <button className="p-2 hover:bg-black/10 rounded-full transition-colors">
              <svg
                className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-grow flex flex-col">
          {/* Location */}
          <div className="text-sm text-gray-600 mb-1 truncate">
            {collab.location || collab.place}
          </div>

          {/* Title */}
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 leading-tight min-h-[2.5rem]">
            {collab.name}
          </h3>

          {/* Date */}
          <div className="text-sm text-gray-600 mb-2">
            {formatEventDate(collab.dateStart)}
            {collab.time && ` • ${collab.time}`}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mt-auto">
            <div>
              {collab.price ? (
                <div className="text-base font-semibold text-gray-900">
                  ${collab.price}
                  <span className="text-sm font-normal text-gray-600">
                    {" "}
                    per person
                  </span>
                </div>
              ) : (
                <div className="text-base font-semibold text-green-600">
                  Free
                </div>
              )}
            </div>

            {/* Rating (placeholder) */}
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm text-gray-900 font-medium">4.9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
