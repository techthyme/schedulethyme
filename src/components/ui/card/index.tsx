import { Experience } from "@/types";

interface ExperienceUIProps {
  experience: Experience;
  onClick: () => void;
}

export default function ExperienceUI({
  experience,
  onClick,
}: ExperienceUIProps) {
  const formatExperienceDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };
  // Generate a colorful gradient for each experience based on its ID
  const gradients = [
    "from-pink-400 to-orange-400",
    "from-blue-400 to-indigo-500",
    "from-green-400 to-blue-500",
    "from-purple-400 to-pink-500",
    "from-yellow-400 to-orange-500",
    "from-indigo-400 to-purple-500",
    "from-red-400 to-pink-500",
    "from-teal-400 to-blue-500",
    "from-emerald-400 to-cyan-500",
    "from-orange-400 to-red-500",
  ];

  const gradientClass = gradients[parseInt(experience.id) % gradients.length];

  if (experience.type == "event" && experience.event) {
    const event = experience.event;
    return (
      <div
        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-700/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-neutral-100 dark:hover:shadow-neutral-900/20 hover:-translate-y-1"
        onClick={onClick}
      >
        {/* Experience Image */}
        <div className="relative aspect-[3/2] overflow-hidden">
          {event.imageUrl ? (
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div
              className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradientClass}`}
            >
              <svg
                className="w-20 h-20 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}

          {/* Light overlay gradient only at bottom for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>

          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                event.status === "upcoming" || event.status === "scheduled"
                  ? "bg-green-100 text-green-800"
                  : event.status === "ongoing"
                  ? "bg-blue-100 text-blue-800"
                  : event.status === "completed"
                  ? "bg-gray-100 text-gray-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {event.status === "upcoming" || event.status === "scheduled"
                ? "Scheduled"
                : event.status === "ongoing"
                ? "Live"
                : event.status === "completed"
                ? "Done"
                : "Cancelled"}
            </span>
          </div>

          {/* Date badge */}
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1.5 bg-primary-500 text-white rounded-full text-sm font-semibold shadow-lg">
              {formatExperienceDate(event.dateStart)}
            </span>
          </div>

          {/* Price badge */}
          {event.price && (
            <div className="absolute top-14 right-4">
              <span className="inline-flex items-center px-3 py-1.5 bg-secondary-500 text-white rounded-full text-sm font-semibold shadow-lg">
                ${event.price}
              </span>
            </div>
          )}

          {/* Title overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-gray-100 transition-colors line-clamp-2">
              {event.title}
            </h3>
            <p className="text-white/80 text-base line-clamp-1">
              {event.location || event.place}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <div> Service </div>;
}
