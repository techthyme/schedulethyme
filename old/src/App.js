import React, { useState, useEffect } from 'react';

export default function TechThymeScheduler() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedSpace, setSelectedSpace] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [trainingFilter, setTrainingFilter] = useState('all');
  const [message, setMessage] = useState(null);

  const spaces = [
    { id: 'kitchen-a', name: 'Kitchen A - Commercial Grade' },
    { id: 'kitchen-b', name: 'Kitchen B - Teaching Kitchen' },
    { id: 'collab', name: 'Collaboration Space' },
    { id: 'training', name: 'Training Room' },
    { id: 'meeting', name: 'Meeting Room' }
  ];

  const timeSlots = [
    { time: '09:00', display: '9:00 AM' },
    { time: '11:00', display: '11:00 AM' },
    { time: '13:00', display: '1:00 PM' },
    { time: '15:00', display: '3:00 PM' },
    { time: '17:00', display: '5:00 PM' },
    { time: '19:00', display: '7:00 PM' }
  ];

  const trainings = [
    {
      id: 1,
      category: 'food',
      title: 'Food Safety Certification',
      date: 'March 15, 2025',
      time: '9:00 AM - 12:00 PM',
      format: 'In-person',
      price: '$75',
      icon: '🍳',
      color: 'orange'
    },
    {
      id: 2,
      category: 'business',
      title: 'Business Planning Workshop',
      date: 'March 18, 2025',
      time: '2:00 PM - 5:00 PM',
      format: 'Online',
      price: '$50',
      icon: '📊',
      color: 'blue'
    },
    {
      id: 3,
      category: 'tech',
      title: 'Digital Marketing Basics',
      date: 'March 20, 2025',
      time: '10:00 AM - 1:00 PM',
      format: 'Hybrid',
      price: '$60',
      icon: '💻',
      color: 'green'
    },
    {
      id: 4,
      category: 'food',
      title: 'Advanced Culinary Techniques',
      date: 'March 22, 2025',
      time: '1:00 PM - 6:00 PM',
      format: 'In-person',
      price: '$120',
      icon: '👨‍🍳',
      color: 'orange'
    }
  ];

  const consultants = [
    {
      id: 'sarah',
      name: 'Sarah Johnson',
      title: 'Food Business Consultant',
      rating: 4.9,
      rate: '$80/hour',
      format: 'In-person/Online',
      avatar: 'S',
      color: 'bg-emerald-500'
    },
    {
      id: 'mike',
      name: 'Mike Chen',
      title: 'Technology Integration Specialist',
      rating: 4.8,
      rate: '$75/hour',
      format: 'Online preferred',
      avatar: 'M',
      color: 'bg-blue-500'
    },
    {
      id: 'alex',
      name: 'Alex Rivera',
      title: 'Business Strategy Advisor',
      rating: 5.0,
      rate: '$90/hour',
      format: 'In-person/Online',
      avatar: 'A',
      color: 'bg-purple-500'
    }
  ];

  const generateCalendar = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
    
    const days = [];
    const dayHeaders = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    
    // Add day headers
    dayHeaders.forEach(day => {
      days.push({ type: 'header', day });
    });
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({ type: 'empty' });
    }
    
    // Add calendar days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isAvailable = day > today.getDate() || currentMonth > today.getMonth();
      days.push({ 
        type: 'day', 
        day, 
        date: date.toISOString().split('T')[0],
        available: isAvailable 
      });
    }
    
    return days;
  };

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleBookSpace = () => {
    if (!selectedSpace || !selectedDate || !selectedTime) {
      showMessage('Please select space, date, and time', 'error');
      return;
    }
    showMessage('Space booked successfully!');
    setSelectedSpace('');
    setSelectedDate('');
    setSelectedTime('');
  };

  const handleBookConsulting = () => {
    showMessage('Consultation booked successfully!');
    setSelectedConsultant(null);
  };

  const handleRequestTraining = () => {
    showMessage('Training request submitted!');
  };

  const filteredTrainings = trainings.filter(training => 
    trainingFilter === 'all' || training.category === trainingFilter
  );

  const navItems = [
    {
      id: 'spaces',
      title: 'Book Space',
      subtitle: 'Kitchen, Training Room',
      icon: '🏢',
      color: 'border-l-orange-500',
      iconColor: 'text-orange-500'
    },
    {
      id: 'training',
      title: 'Training',
      subtitle: 'Food, Business, Tech',
      icon: '📚',
      color: 'border-l-blue-500',
      iconColor: 'text-blue-500'
    },
    {
      id: 'consulting',
      title: 'Consulting',
      subtitle: 'Expert Guidance',
      icon: '💼',
      color: 'border-l-red-500',
      iconColor: 'text-red-500'
    },
    {
      id: 'account',
      title: 'My Account',
      subtitle: 'Profile, Bookings',
      icon: '👤',
      color: 'border-l-yellow-500',
      iconColor: 'text-yellow-500'
    }
  ];

  const bottomNavItems = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'spaces', icon: '🏢', label: 'Spaces' },
    { id: 'training', icon: '📚', label: 'Training' },
    { id: 'consulting', icon: '💼', label: 'Consulting' },
    { id: 'account', icon: '👤', label: 'Account' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      {/* Main Container - Responsive width */}
      <div className="max-w-md mx-auto lg:max-w-6xl bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen shadow-2xl lg:shadow-none relative">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 text-center shadow-lg">
          <h1 className="text-2xl font-bold mb-1">Tech Thyme</h1>
          <p className="text-emerald-100">Schedule • Learn • Grow</p>
        </div>

        {/* Message Display */}
        {message && (
          <div className={`mx-4 mt-4 p-4 rounded-xl flex items-center space-x-3 shadow-md ${
            message.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
              message.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}>
              {message.type === 'success' ? '✓' : '!'}
            </div>
            <span className="font-medium flex-1">{message.text}</span>
            <button 
              onClick={() => setMessage(null)}
              className="text-gray-500 hover:text-gray-700 transition-colors font-bold"
            >
              ✕
            </button>
          </div>
        )}

        {/* Content Area */}
        <div className="pb-20 lg:pb-6">
          
          {/* Home View */}
          {currentView === 'home' && (
            <div className="p-4 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {navItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className={`bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-md border-l-4 ${item.color} group`}
                  >
                    <div className={`text-4xl mb-4 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Spaces View */}
          {currentView === 'spaces' && (
            <div className="p-4 lg:p-8">
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Book a Space</h2>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  {/* Space Selection */}
                  <div className="mb-6">
                    <label className="block font-semibold text-gray-700 mb-3">Select Space</label>
                    <select
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
                      value={selectedSpace}
                      onChange={(e) => setSelectedSpace(e.target.value)}
                    >
                      <option value="">Choose a space...</option>
                      {spaces.map(space => (
                        <option key={space.id} value={space.id}>{space.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Calendar */}
                  <div className="mb-6">
                    <label className="block font-semibold text-gray-700 mb-3">Select Date</label>
                    <div className="grid grid-cols-7 gap-2">
                      {generateCalendar().map((day, index) => {
                        if (day.type === 'header') {
                          return (
                            <div key={index} className="text-center font-semibold text-gray-600 p-2">
                              {day.day}
                            </div>
                          );
                        }
                        if (day.type === 'empty') {
                          return <div key={index}></div>;
                        }
                        return (
                          <div
                            key={index}
                            onClick={() => day.available && setSelectedDate(day.date)}
                            className={`aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-all font-medium ${
                              day.available
                                ? selectedDate === day.date
                                  ? 'bg-emerald-500 text-white scale-110 shadow-md'
                                  : 'bg-white border-2 border-gray-200 hover:border-emerald-500 hover:bg-gray-50'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                          >
                            {day.day}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="mb-6">
                    <label className="block font-semibold text-gray-700 mb-3">Available Times</label>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map(slot => (
                        <div
                          key={slot.time}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`p-4 rounded-xl text-center cursor-pointer transition-all font-medium ${
                            selectedTime === slot.time
                              ? 'bg-emerald-500 text-white shadow-md'
                              : 'bg-gray-50 border-2 border-gray-200 hover:border-emerald-500 hover:-translate-y-1'
                          }`}
                        >
                          {slot.display}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleBookSpace}
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-4 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    Book Space
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Training View */}
          {currentView === 'training' && (
            <div className="p-4 lg:p-8">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Training Programs</h2>
                </div>

                {/* Filter */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                  <label className="block font-semibold text-gray-700 mb-3">Filter by Category</label>
                  <select
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
                    value={trainingFilter}
                    onChange={(e) => setTrainingFilter(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    <option value="food">Food & Culinary</option>
                    <option value="business">Business</option>
                    <option value="tech">Technology</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>

                {/* Training List */}
                <div className="space-y-4 mb-6">
                  {filteredTrainings.map(training => (
                    <div key={training.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                      <div className="flex items-center">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 text-2xl ${
                          training.color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                          training.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                          'bg-gradient-to-br from-emerald-500 to-emerald-600'
                        }`}>
                          {training.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1">{training.title}</h4>
                          <p className="text-sm text-gray-600 mb-1">{training.date} • {training.time}</p>
                          <p className="text-sm text-gray-600">{training.format} • {training.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Request New Training */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-800 mb-4">Request New Training</h3>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Training topic or skill..."
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
                    />
                  </div>
                  <button
                    onClick={handleRequestTraining}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Consulting View */}
          {currentView === 'consulting' && (
            <div className="p-4 lg:p-8">
              <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Book Consultation</h2>
                </div>

                {/* Consultants List */}
                <div className="space-y-4 mb-6">
                  {consultants.map(consultant => (
                    <div
                      key={consultant.id}
                      onClick={() => setSelectedConsultant(consultant)}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className={`w-16 h-16 rounded-full ${consultant.color} flex items-center justify-center text-white text-xl font-bold mr-4`}>
                          {consultant.avatar}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1">{consultant.name}</h4>
                          <p className="text-gray-600 mb-2">{consultant.title}</p>
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="w-4 h-4 text-yellow-500 mr-1">⭐</span>
                            <span className="mr-3">{consultant.rating}</span>
                            <span className="mr-3">•</span>
                            <span className="mr-3">{consultant.rate}</span>
                            <span className="mr-3">•</span>
                            <span>{consultant.format}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Booking Form */}
                {selectedConsultant && (
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="font-semibold text-gray-800 mb-4">
                      Book with {selectedConsultant.name}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block font-semibold text-gray-700 mb-2">Session Type</label>
                        <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all">
                          <option>Online (Zoom/Teams)</option>
                          <option>In-person</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block font-semibold text-gray-700 mb-2">Preferred Date</label>
                        <input
                          type="date"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-semibold text-gray-700 mb-2">Preferred Time</label>
                        <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all">
                          <option value="">Select time...</option>
                          <option>9:00 AM</option>
                          <option>10:00 AM</option>
                          <option>11:00 AM</option>
                          <option>2:00 PM</option>
                          <option>3:00 PM</option>
                          <option>4:00 PM</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block font-semibold text-gray-700 mb-2">Session Topic</label>
                        <textarea
                          rows="3"
                          placeholder="Briefly describe what you'd like to discuss..."
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all resize-none"
                        />
                      </div>
                      
                      <button
                        onClick={handleBookConsulting}
                        className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-4 rounded-xl hover:from-red-600 hover:to-red-700 transition-all hover:shadow-lg hover:-translate-y-1"
                      >
                        Book Consultation
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Account View */}
          {currentView === 'account' && (
            <div className="p-4 lg:p-8">
              <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">My Account</h2>
                </div>

                {/* Profile Information */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Profile Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-700 mb-2">Interests</label>
                      <select
                        multiple
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all min-h-[120px]"
                      >
                        <option value="food">Food & Culinary</option>
                        <option value="tech">Technology</option>
                        <option value="business">Business</option>
                        <option value="agro">Agriculture</option>
                      </select>
                    </div>
                    <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-4 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all hover:shadow-lg hover:-translate-y-1">
                      Update Profile
                    </button>
                  </div>
                </div>

                {/* Upcoming Bookings */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-800 mb-4">Upcoming Bookings</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-emerald-500 pl-4 py-2">
                      <h4 className="font-semibold text-gray-800">Kitchen A Booking</h4>
                      <p className="text-sm text-gray-600">March 15, 2025 • 2:00 PM - 4:00 PM</p>
                      <p className="text-sm text-emerald-600 font-medium">Status: Confirmed</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <h4 className="font-semibold text-gray-800">Digital Marketing Training</h4>
                      <p className="text-sm text-gray-600">March 20, 2025 • 10:00 AM - 1:00 PM</p>
                      <p className="text-sm text-blue-600 font-medium">Status: Registered</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4 py-2">
                      <h4 className="font-semibold text-gray-800">Consultation with Sarah</h4>
                      <p className="text-sm text-gray-600">March 18, 2025 • 3:00 PM - 4:00 PM</p>
                      <p className="text-sm text-red-600 font-medium">Status: Confirmed • Online</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Navigation - Mobile optimized */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md lg:relative lg:left-auto lg:transform-none lg:max-w-none bg-white border-t lg:border-t-0 shadow-lg lg:shadow-none">
          <div className="flex justify-around lg:justify-center lg:space-x-4 py-2 lg:py-4">
            {bottomNavItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`flex flex-col lg:flex-row lg:items-center lg:space-x-2 items-center py-2 px-3 lg:px-4 rounded-lg transition-all ${
                  currentView === item.id
                    ? 'text-emerald-600 lg:bg-emerald-100'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl lg:text-lg mb-1 lg:mb-0">{item.icon}</span>
                <span className="text-xs lg:text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}