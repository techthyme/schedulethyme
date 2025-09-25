export default function Services() {
  const stats = [
    {
      value: "500+",
      label: "Events Hosted"
    },
    {
      value: "3K+",
      label: "Happy Clients"
    },
    {
      value: "95%",
      label: "Success Rate"
    },
    {
      value: "24/7",
      label: "Support Available"
    }
  ];

  return (
    <section className="bg-slate-700 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}