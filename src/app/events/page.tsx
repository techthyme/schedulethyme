import { mockEvents } from "@/data";

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Our team
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {mockEvents.map((event) => (
            <li key={event.id} className="p-4 rounded-xl shadow-sm bg-white">
              {event.imageUrl && (
                <img
                  alt={event.title}
                  src={event.imageUrl}
                  className="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                />
              )}

              <h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">
                {event.title}
              </h3>

              <p className="mt-1 text-sm text-gray-600">📍 {event.location}</p>

              <p className="mt-1 text-sm text-gray-600">
                🗓 {new Date(event.dateStart * 1000).toLocaleString()}
                {event.dateEnd &&
                  ` – ${new Date(event.dateEnd * 1000).toLocaleString()}`}
              </p>

              {event.description && (
                <p className="mt-2 text-base text-gray-700">
                  {event.description}
                </p>
              )}

              <p className="mt-2 font-medium text-gray-800">
                {event.price ? `$${event.price}` : "Free"}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
