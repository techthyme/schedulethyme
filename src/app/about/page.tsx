import { aboutUsData } from "@/data";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/30 to-secondary-50/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              We connect you with perfect{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                spaces
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed">
              in beautiful St. Thomas, Virgin Islands - where your{" "}
              <span className="text-gray-400 font-light">events come to life!</span>
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span>🏝️</span>
              <span>📅</span>
              <span className="font-medium">ScheduleThyme</span>
              <span>📍</span>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="nc-box-has-hover backdrop-blur-sm p-8 custom-shadow-1 hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-6xl">🏢</div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Professional Spaces</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Modern conference rooms, training facilities, and office spaces perfect for your business needs in paradise.
              </p>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-primary-200 rounded-full flex items-center justify-center">
                  <span className="text-xs">💼</span>
                </div>
                <div className="w-8 h-8 bg-secondary-200 rounded-full flex items-center justify-center">
                  <span className="text-xs">📊</span>
                </div>
                <div className="w-8 h-8 bg-primary-300 rounded-full flex items-center justify-center">
                  <span className="text-xs">🖥️</span>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-neutral-500">
                <span className="mr-2">↗</span>
                <span>View all</span>
              </div>
            </div>

            <div className="nc-box-has-hover backdrop-blur-sm p-8 custom-shadow-1 hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-6xl">🎓</div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Training Centers</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Fully equipped learning spaces with A/V systems, comfortable seating, and tropical island charm for workshops and seminars.
              </p>
              <div className="mt-8 flex items-center text-sm text-neutral-500">
                <span className="mr-2">↗</span>
                <span>View all</span>
              </div>
            </div>

            <div className="lg:row-span-2 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-8xl mb-8">🏝️</div>
                </div>
                <div className="bg-neutral-900/70 text-white rounded-2xl p-4 flex items-center justify-between">
                  <span className="font-medium">Explore St. Thomas</span>
                  <span className="bg-white/20 p-2 rounded-full">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Building communities through memorable experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutUsData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Values</h2>
            <p className="text-xl text-neutral-600">What drives us every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutUsData.values.map((value, index) => (
              <div key={index} className="nc-box-has-hover p-8 custom-shadow-1 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-white text-xl">
                    {index === 0 ? "💡" : index === 1 ? "🌍" : "🤝"}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
