// src/components/ui/AddEventModal.tsx

import { useState } from 'react';
import { EventDraft, Facility, Training, TrainingCategory, Registration, AttendeeInfo } from '@/types';
import AttendanceModal from '@/components/AttendanceModal';

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (eventDraft: EventDraft) => void;
}

const facilities: Facility[] = [
  { id: 'commercial-kitchen', name: 'Commercial Kitchen(s)' },
  { id: 'collaboration-space', name: 'Collaboration Space(s)' },
  { id: 'training-rooms', name: 'Training Rooms' }
];

// Mock training data
const mockTrainings: Training[] = [
  {
    id: 'business-tech-1',
    title: 'Intro to Business Tech',
    category: 'business',
    when: '2025-10-12T14:00:00'
  },
  {
    id: 'food-safety-1',
    title: 'Food Safety Certification',
    category: 'food',
    when: '2025-10-15T10:00:00'
  },
  {
    id: 'web-dev-1',
    title: 'Web Development Basics',
    category: 'tech',
    when: '2025-10-18T16:00:00'
  },
  {
    id: 'hybrid-marketing',
    title: 'Digital Marketing Strategy',
    category: 'hybrid',
    when: '2025-10-20T13:00:00'
  }
];

const categoryFilters: { value: TrainingCategory; label: string }[] = [
  { value: 'food', label: 'Food' },
  { value: 'business', label: 'Business' },
  { value: 'tech', label: 'Technology' },
  { value: 'hybrid', label: 'Combination' }
];

export default function AddEventModal({ isOpen, onClose, onSubmit }: AddEventModalProps) {
  const [currentSection, setCurrentSection] = useState<'spaces' | 'trainings'>('spaces')
  const [selectedCategory, setSelectedCategory] = useState<TrainingCategory | undefined>()
  const [selectedTraining, setSelectedTraining] = useState<Training | null>(null)
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false)
  const [formData, setFormData] = useState<EventDraft>({
    facilityId: '',
    date: '',
    time: '',
    durationMin: 60,
    note: ''
  });

  const filteredTrainings = selectedCategory 
    ? mockTrainings.filter(training => training.category === selectedCategory)
    : mockTrainings;

  const handleTrainingRegister = (training: Training) => {
    setSelectedTraining(training)
    setIsAttendanceModalOpen(true)
  }

  const handleAttendanceSubmit = (attendeeInfo: AttendeeInfo) => {
    console.log('Training registration:', {
      training: selectedTraining,
      attendee: attendeeInfo
    })
    // TODO: Handle training registration submission
    setIsAttendanceModalOpen(false)
    setSelectedTraining(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'durationMin' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.facilityId && formData.date && formData.time) {
      onSubmit(formData);
      setFormData({ facilityId: '', date: '', time: '', durationMin: 60, note: '' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative mx-auto max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl ring-1 ring-gray-900/5 overflow-hidden">
          {/* Header Section */}
          <div className="relative bg-gradient-to-br from-indigo-50 via-white to-violet-50 px-8 pt-6 pb-4">
            {/* Close Button */}
            <div className="absolute top-6 right-6">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-sm border border-gray-200 hover:border-gray-300 transition-all"
              >
                <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <button 
                  onClick={() => setCurrentSection('spaces')}
                  className={`p-2 rounded-full transition-colors ${
                    currentSection === 'spaces' ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <h2 className="text-2xl font-light tracking-tight text-gray-900">
                  {currentSection === 'spaces' ? 'Book a Space' : 'Trainings'}
                </h2>
                
                <button 
                  onClick={() => {
                    console.log('Right arrow clicked!');
                    setCurrentSection('trainings');
                  }}
                  className={`p-2 rounded-full transition-colors ${
                    currentSection === 'trainings' ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <p className="text-sm font-light text-gray-600">
                {currentSection === 'spaces' 
                  ? 'Reserve your preferred facility and time'
                  : 'Explore available training programs'
                }
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 pb-6">
            {currentSection === 'spaces' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Facility Selection */}
                <div>
                  <label htmlFor="facilityId" className="block text-sm font-medium text-gray-900 mb-2">
                    Facility selection
                  </label>
                  <div className="space-y-2">
                    {facilities.map((facility) => (
                      <label key={facility.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                        <span className="text-gray-900">{facility.name}</span>
                        <input
                          type="radio"
                          name="facilityId"
                          value={facility.id}
                          checked={formData.facilityId === facility.id}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Calendar Grid - Visual Only */}
                <div>
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                        <div key={index} className="text-center text-xs font-medium text-gray-500 py-1">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 21 }, (_, i) => (
                        <div key={i} className="aspect-square bg-white rounded border border-gray-100 flex items-center justify-center text-xs text-gray-400">
                          {i % 7 === 0 ? Math.floor(i / 7) + 1 : ''}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Date and Time Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-900 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-gray-900 bg-gray-50 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:bg-white transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-900 mb-2">
                      Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-gray-900 bg-gray-50 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Duration and Note Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="durationMin" className="block text-sm font-medium text-gray-900 mb-2">
                      Duration
                    </label>
                    <select
                      id="durationMin"
                      name="durationMin"
                      value={formData.durationMin}
                      onChange={handleInputChange}
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-gray-900 bg-gray-50 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:bg-white transition-all duration-200"
                    >
                      <option value={30}>30 min</option>
                      <option value={60}>1 hour</option>
                      <option value={90}>1.5 hours</option>
                      <option value={120}>2 hours</option>
                      <option value={180}>3 hours</option>
                      <option value={240}>4 hours</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="note" className="block text-sm font-medium text-gray-900 mb-2">
                      Notes
                    </label>
                    <input
                      type="text"
                      id="note"
                      name="note"
                      value={formData.note}
                      onChange={handleInputChange}
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-gray-900 bg-gray-50 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:bg-white transition-all duration-200"
                      placeholder="Special requirements..."
                    />
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Book
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                {/* Training Category Filters */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Training Catalog
                  </label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {categoryFilters.map((filter) => (
                      <button
                        key={filter.value}
                        onClick={() => setSelectedCategory(
                          selectedCategory === filter.value ? undefined : filter.value
                        )}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedCategory === filter.value
                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                            : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                  
                  {/* Online/In-Person Filters */}
                  <div className="flex gap-2 mb-6">
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors">
                      Online
                    </button>
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors">
                      In-Person
                    </button>
                  </div>
                </div>

                {/* Training List */}
                <div className="space-y-3">
                  {filteredTrainings.map((training) => (
                    <div key={training.id} className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1">{training.title}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              training.category === 'food' ? 'bg-green-100 text-green-700' :
                              training.category === 'business' ? 'bg-blue-100 text-blue-700' :
                              training.category === 'tech' ? 'bg-purple-100 text-purple-700' :
                              'bg-orange-100 text-orange-700'
                            }`}>
                              {categoryFilters.find(f => f.value === training.category)?.label}
                            </span>
                            <span className="text-xs text-gray-500">
                              {new Date(training.when).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                            <span className="text-sm text-gray-600">Trainer</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleTrainingRegister(training)}
                          className="px-4 py-2 text-sm text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Suggest New Training */}
                <div className="pt-4">
                  <button className="w-full py-3 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl border border-gray-200 transition-colors">
                    Suggest a new
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Training Registration Modal */}
      {selectedTraining && (
        <AttendanceModal
          isOpen={isAttendanceModalOpen}
          onClose={() => {
            setIsAttendanceModalOpen(false)
            setSelectedTraining(null)
          }}
          onSubmit={handleAttendanceSubmit}
          eventTitle={selectedTraining.title}
        />
      )}
    </div>
  );
}