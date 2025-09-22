'use client';

import { Button } from '@/components/ui/button';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/section';

export function HeroSection() {
  return (
    <Section className="bg-gradient-to-b from-blue-50 to-white min-h-[80vh] flex items-center">
      <div className="w-full">
        <SectionHeader>
          <SectionTitle as="h1" className="mb-6">
            Your One-Stop Platform for{' '}
            <span className="text-blue-600">Spaces, Training & Consulting</span>
          </SectionTitle>
          <SectionSubtitle className="mb-8">
            Book facilities, join professional training sessions, and connect with expert consultants. 
            Everything you need to grow your business in one mobile-friendly platform.
          </SectionSubtitle>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg"
              href="#get-started"
              className="w-full sm:w-auto"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              href="#services"
              className="w-full sm:w-auto"
            >
              Explore Services
            </Button>
          </div>
        </SectionHeader>
        
        {/* Hero Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Professional Spaces</h3>
            <p className="text-gray-600 text-sm">Book kitchens, meeting rooms, and collaborative workspaces</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Expert Training</h3>
            <p className="text-gray-600 text-sm">Join sessions on food, business, tech, and hybrid topics</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Personal Consulting</h3>
            <p className="text-gray-600 text-sm">Connect with industry specialists for one-on-one guidance</p>
          </div>
        </div>
      </div>
    </Section>
  );
}