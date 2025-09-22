<div className="flex gap-8 mb-8">
              <div className="w-1/2">
                <CalendarComponent 
                  onDateSelect={handleDateSelect('training')} 
                  type="training"
                />
              </div>
              
              <div className="w-1/2 space-y-4">
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:border-green-700 focus:outline-none">
                  <option value="">Topic</option>
                  <option>Food Safety</option>
                  <option>Advanced Baking</option>
                  <option>Marketing for Startups</option>
                </select>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:border-green-700 focus:outline-none">
                  <option value="">Instructor</option>
                  <option>Chef Maria Rodriguez</option>
                  <option>Business Coach John Smith</option>
                  <option>Safety Expert Lisa Chen</option>
                </select>

                <div className="mt-6">
                  <BookingSidebar 
                    selection={selection} 
                    onProceed={() => setCurrentPage('registration')}
                  />
                </div>
              </div>
            </div>

            <UpcomingEvents />
          </div>
        );

      case 'consultant':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Meet with a Consultant
              </h1>
              <p className="text-xl text-gray-600">
                Get personalized guidance from industry experts to grow your business
              </p>
            </div>

            <div className="flex gap-8 mb-8">
              <div className="w-1/2">
                <CalendarComponent 
                  onDateSelect={handleDateSelect('consultant')} 
                  type="consultant"
                />
              </div>
              
              <div className="w-1/2 space-y-4">
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:border-green-700 focus:outline-none">
                  <option value="">Expertise Area</option>
                  <option>Business Strategy</option>
                  <option>Marketing & Branding</option>
                  <option>Financial Planning</option>
                </select>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:border-green-700 focus:outline-none">
                  <option value="">Expert Name</option>
                  <option>Jane Doe - Strategy</option>
                  <option>Mark Johnson - Marketing</option>
                  <option>Sarah Wilson - Finance</option>
                </select>

                <div className="mt-6">
                  <BookingSidebar 
                    selection={selection} 
                    onProceed={() => setCurrentPage('registration')}
                  />
                </div>
              </div>
            </div>

            <UpcomingEvents />
          </div>
        );

      case 'technology':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-blue-800 mb-4">
                Incorporate Technology Solutions
              </h1>
              <p className="text-xl text-gray-600">
                Enhance your business with cutting-edge technology and branding solutions
              </p>
            </div>

            <div className="flex gap-8 mb-8">
              <div className="w-1/2 space-y-4">
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:border-blue-700 focus:outline-none">
                  <option value="">Technology Request</option>
                  <option>Custom Software Development</option>
                  <option>POS System Integration</option>
                  <option>Inventory Management Systems</option>
                  <option>Online Ordering Platforms</option>
                  <option>Digital Menu Solutions</option>
                  <option>Kitchen Display Systems</option>
                  <option>Mobile App Development</option>
                </select>
                
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:border-blue-700 focus:outline-none">
                  <option value="">Branding Solutions</option>
                  <option>Logo Design & Brand Identity</option>
                  <option>Website Development</option>
                  <option>Social Media Strategy</option>
                  <option>Marketing Materials Design</option>
                  <option>Brand Guidelines Creation</option>
                  <option>Digital Marketing Campaigns</option>
                </select>

                <div className="mt-6">
                  <BookingSidebar 
                    selection={selection} 
                    onProceed={() => setCurrentPage('registration')}
                    buttonText="Request Service"
                  />
                </div>
              </div>
              
              <div className="w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                  <div className="text-center mb-4">
                    <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Cpu className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-blue-800">Technology Services</h3>
                  </div>
                  <p className="text-blue-700 text-center text-sm mb-4">
                    Custom software, POS systems, and integrated platforms.
                  </p>
                  <div className="text-center">
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      $150/hour
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-2 border-pink-200">
                  <div className="text-center mb-4">
                    <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <svg className="text-white" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2Z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-pink-800">Branding Solutions</h3>
                  </div>
                  <p className="text-pink-700 text-center text-sm mb-4">
                    Logo design, websites, and marketing strategies.
                  </p>
                  <div className="text-center">
                    <span className="inline-block bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      $125/hour
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <UpcomingEvents />
          </div>
        );

      case 'info':
        return (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#about" className="bg-green-100 text-green-800 px-6 py-3 rounded-xl font-semibold hover:bg-green-200 transition-colors">
                  About Us
                </a>
                <a href="#contact" className="bg-blue-100 text-blue-800 px-6 py-3 rounded-xl font-semibold hover:bg-blue-200 transition-colors">
                  Contact
                </a>
                <a href="#faq" className="bg-orange-100 text-orange-800 px-6 py-3 rounded-xl font-semibold hover:bg-orange-200 transition-colors">
                  FAQ
                </a>
                <a href="#rules" className="bg-red-100 text-red-800 px-6 py-3 rounded-xl font-semibold hover:bg-red-200 transition-colors">
                  Facility Rules
                </a>
              </div>
            </div>

            <div className="space-y-12">
              <section id="about" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-green-800 mb-4">About Schedule Thyme</h2>
                  <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Schedule Thyme was founded in 2020 with a simple mission: to democratize access to professional culinary resources 
                      and empower food entrepreneurs to turn their passion into profitable businesses.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      What started as a single commercial kitchen has grown into a comprehensive ecosystem supporting over 500 food businesses 
                      with state-of-the-art facilities, expert training, professional consultations, and cutting-edge technology solutions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Impact</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center bg-green-50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-green-600">500+</div>
                        <div className="text-green-800 font-medium">Businesses Served</div>
                      </div>
                      <div className="text-center bg-blue-50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600">1,200+</div>
                        <div className="text-blue-800 font-medium">Training Sessions</div>
                      </div>
                      <div className="text-center bg-orange-50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-orange-600">300+</div>
                        <div className="text-orange-800 font-medium">Tech Solutions</div>
                      </div>
                      <div className="text-center bg-purple-50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-purple-600">95%</div>
                        <div className="text-purple-800 font-medium">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gray-50 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-green-600 font-semibold">Professional Kitchens</div>
                      <div className="text-sm text-gray-600">Commercial-grade facilities</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-orange-600 font-semibold">Expert Training</div>
                      <div className="text-sm text-gray-600">Culinary & business skills</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-red-600 font-semibold">Professional Consultations</div>
                      <div className="text-sm text-gray-600">Industry expert guidance</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-blue-600 font-semibold">Technology Solutions</div>
                      <div className="text-sm text-gray-600">Digital transformation</div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="contact" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-blue-800 mb-4">Get in Touch</h2>
                  <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Visit Us</h3>
                        <p className="text-gray-600">123 Culinary Drive<br/>Food District, ST 12345</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Call Us</h3>
                        <p className="text-gray-600">Main: (555) 123-COOK (2665)<br/>Emergency: (555) 123-HELP (4357)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Email Us</h3>
                        <p className="text-gray-600">hello@schedulethyme.com<br/>support@schedulethyme.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Operating Hours</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Monday - Friday</span>
                          <span className="font-semibold text-gray-800">6:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Saturday</span>
                          <span className="font-semibold text-gray-800">8:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sunday</span>
                          <span className="font-semibold text-gray-800">8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="border-t pt-3 mt-4">
                          <div className="flex justify-between">
                            <span className="text-gray-600">24/7 Support</span>
                            <span className="font-semibold text-green-600">Always Available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="faq" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-orange-800 mb-4">Frequently Asked Questions</h2>
                  <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-400">
                      <h3 className="font-semibold text-orange-900 mb-2">What equipment is available in the commercial kitchen?</h3>
                      <p className="text-orange-800 text-sm">Our kitchens feature industrial ovens, commercial mixers, prep stations, refrigeration units, and all necessary cooking utensils meeting health department standards.</p>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                      <h3 className="font-semibold text-blue-900 mb-2">Do I need a business license to use the facilities?</h3>
                      <p className="text-blue-800 text-sm">Yes, a valid business license is required for all facility bookings to ensure compliance with local regulations and food safety standards.</p>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                      <h3 className="font-semibold text-green-900 mb-2">What's the cancellation policy?</h3>
                      <p className="text-green-800 text-sm">Cancellations must be made at least 24 hours in advance for a full refund. Same-day cancellations may incur a 50% fee.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
                      <h3 className="font-semibold text-purple-900 mb-2">Are training sessions suitable for beginners?</h3>
                      <p className="text-purple-800 text-sm">We offer training programs for all skill levels. Each session description includes recommended experience level and prerequisites.</p>
                    </div>
                    
                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                      <h3 className="font-semibold text-red-900 mb-2">How do I get a client registration number?</h3>
                      <p className="text-red-800 text-sm">You'll receive a client number (format: ST-YYYY-XXXXXX) when you complete your first booking registration with us.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-400">
                      <h3 className="font-semibold text-gray-900 mb-2">What technology services do you offer?</h3>
                      <p className="text-gray-800 text-sm">We provide custom software development, POS integration, branding solutions, website development, and comprehensive digital marketing services.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="rules" className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-red-800 mb-4">Facility Rules & Safety Guidelines</h2>
                  <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                        <span className="bg-red-100 p-2 rounded-full mr-3">⚠️</span>
                        Safety Requirements
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Closed-toe shoes required at all times</li>
                        <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Hair nets/restraints mandatory in kitchen areas</li>
                        <li className="flex items-start"><span className="text-red-500 mr-2">•</span> No loose jewelry or clothing near equipment</li>
                        <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Food safety certification recommended</li>
                        <li className="flex items-start"><span className="text-red-500 mr-2">•</span> First aid stations available throughout facility</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                        <span className="bg-blue-100 p-2 rounded-full mr-3">📋</span>
                        Booking Policies
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Minimum 2-hour booking required</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> 15-minute setup/cleanup time included</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Late arrivals forfeit time, no refunds given</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Valid business license required for all bookings</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Payment due at time of reservation</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                        <span className="bg-green-100 p-2 rounded-full mr-3">✅</span>
                        Usage Guidelines
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start"><span className="text-green-500 mr-2">•</span> Clean as you go policy strictly enforced</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">•</span> Report equipment issues immediately to staff</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">•</span> No outside equipment without prior approval</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">•</span> Respect other users' scheduled time slots</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">•</span> Temperature logs must be maintained</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                        <span className="bg-purple-100 p-2 rounded-full mr-3">⚖️</span>
                        Violations & Consequences
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start"><span className="text-purple-500 mr-2">•</span> First violation: Written warning issued</li>
                        <li className="flex items-start"><span className="text-purple-500 mr-2">•</span> Second violation: 30-day facility suspension</li>
                        <li className="flex items-start"><span className="text-purple-500 mr-2">•</span> Third violation: Permanent facility ban</li>
                        <li className="flex items-start"><span className="text-purple-500 mr-2">•</span> Damage fees apply for equipment misuse</li>
                        <li className="flex items-start"><span className="text-purple-500 mr-2">•</span> Appeals process available for all decisions</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Agreement Acknowledgment</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    By using Schedule Thyme facilities and services, you acknowledge that you have read, understood, and agree to comply with all terms, policies, and rules outlined above. 
                    Violations may result in immediate termination of services without refund. For questions or clarifications, please contact our support team.
                  </p>
                  <div className="mt-4 text-center">
                    <span className="text-xs text-gray-500">Last updated: January 1, 2025 | Version 2.1</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );

      case 'registration':
        if (!showRegistration) {
          return (
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Client Registration Required</h1>
                
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter your Client Registration Number
                  </label>
                  <input
                    type="text"
                    value={clientNumber}
                    onChange={(e) => setClientNumber(e.target.value)}
                    placeholder="e.g., ST-2024-001234"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none text-center"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleClientCheck}
                    className="bg-green-700 text-white py-3 px-6 rounded-xl font-bold hover:bg-green-800 transition-colors"
                  >
                    Continue with Existing Account
                  </button>
                  
                  <button
                    onClick={() => setShowRegistration(true)}
                    className="bg-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                  >
                    Register as New Client
                  </button>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">New Client Registration</h1>
              <p className="text-gray-600 mb-8">
                Please provide your information to complete the booking process
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none"
                  />
                </div>

                <button
                  onClick={() => {
                    alert('Registration and booking confirmed! Your client number is ST-2024-001234.');
                    setCurrentPage('home');
                    setSelection(null);
                  }}
                  className="w-full bg-green-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-colors"
                >
                  Complete Registration & Book
                </button>

                <button
                  onClick={() => setShowRegistration(false)}
                  className="w-full bg-gray-500 text-white py-2 rounded-xl font-medium hover:bg-gray-600 transition-colors"
                >
                  Back to Client Login
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="min-h-screen">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleThyme;import React, { useState } from 'react';
import { Menu, X, Utensils, BookOpen, Users, Cpu } from 'lucide-react';

const ScheduleThyme = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selection, setSelection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [clientNumber, setClientNumber] = useState('');

  const Link = ({ href, children, className, onClick }) => (
    <a 
      href="#" 
      className={className}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
    >
      {children}
    </a>
  );

  const Header = () => {
    const navItems = [
      { href: '/', label: 'Home', key: 'home' },
      { href: '/info', label: 'Info', key: 'info' },
      { href: '/services', label: 'Services', key: 'services' },
      { href: '/account', label: 'My Account', key: 'account' }
    ];

    return (
      <header className="bg-gradient-to-br from-green-600 to-green-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-10 relative">
            <Link 
              href="/" 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white font-sans tracking-wide"
              onClick={() => setCurrentPage('home')}
            >
              Welcome to Schedule Thyme
            </Link>
            
            <nav className="hidden md:flex space-x-8 absolute right-0">
              {navItems.map(item => (
                <Link 
                  key={item.key}
                  href={item.href} 
                  className="text-green-100 hover:text-white font-medium transition-colors"
                  onClick={() => setCurrentPage(item.key)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden absolute right-0 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navItems.map(item => (
                  <Link 
                    key={item.key}
                    href={item.href} 
                    className="text-green-100 hover:text-white font-medium"
                    onClick={() => {
                      setCurrentPage(item.key);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    );
  };

  const Footer = () => {
    const handleFooterLinkClick = (section) => {
      setCurrentPage('info');
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };

    return (
      <footer className="bg-green-700 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-8 mb-4">
            <button 
              onClick={() => handleFooterLinkClick('about')}
              className="hover:text-green-200 transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button 
              onClick={() => handleFooterLinkClick('contact')}
              className="hover:text-green-200 transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button 
              onClick={() => handleFooterLinkClick('faq')}
              className="hover:text-green-200 transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <button 
              onClick={() => handleFooterLinkClick('rules')}
              className="hover:text-green-200 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
          <div className="text-center">
            <p>&copy; 2024 Schedule Thyme. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

  const CTAButton = ({ onClick, variant, children, icon: Icon }) => {
    const variantClasses = {
      kitchen: 'bg-gradient-to-br from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700',
      training: 'bg-gradient-to-br from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600',
      consultant: 'bg-gradient-to-br from-red-400 to-red-600 text-white hover:from-red-500 hover:to-red-700',
      technology: 'bg-gradient-to-br from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700'
    };

    const shadowClasses = {
      kitchen: 'shadow-green-400/50 hover:shadow-green-500/60',
      training: 'shadow-orange-400/50 hover:shadow-orange-500/60',
      consultant: 'shadow-red-400/50 hover:shadow-red-500/60',
      technology: 'shadow-blue-400/50 hover:shadow-blue-500/60'
    };

    return (
      <button
        onClick={onClick}
        className={`
          inline-flex flex-col items-center justify-center gap-3 p-8 rounded-3xl font-bold text-lg
          transform transition-all duration-300 hover:-translate-y-2 hover:scale-105
          w-48 h-48 border-t-2 border-l-2 border-white/30
          shadow-2xl hover:shadow-3xl ${shadowClasses[variant]}
          ${variantClasses[variant]}
        `}
      >
        {Icon && <Icon size={32} />}
        <span className="text-center">{children}</span>
      </button>
    );
  };

  const CalendarComponent = ({ onDateSelect, type }) => {
    const [selectedDates, setSelectedDates] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('');
    
    const timeSlots = ['6:00 AM', '8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'];
    const durations = ['4 hours', '8 hours', '12 hours', '24 hours'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    React.useEffect(() => {
      const handleTimeSelection = (event) => {
        const time = event.detail;
        setSelectedTime(time);
        updateSelection(selectedDates, time, selectedDuration);
      };

      const handleDurationSelection = (event) => {
        const duration = event.detail;
        setSelectedDuration(duration);
        updateSelection(selectedDates, selectedTime, duration);
      };

      document.addEventListener('timeSelected', handleTimeSelection);
      document.addEventListener('durationSelected', handleDurationSelection);

      return () => {
        document.removeEventListener('timeSelected', handleTimeSelection);
        document.removeEventListener('durationSelected', handleDurationSelection);
      };
    }, [selectedDates, selectedTime, selectedDuration]);

    const handleDayClick = (day) => {
      const clickedDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
      
      if (type === 'kitchen') {
        let newSelectedDates;
        if (selectedDates.includes(clickedDate)) {
          newSelectedDates = selectedDates.filter(date => date !== clickedDate);
        } else {
          newSelectedDates = [...selectedDates, clickedDate].sort();
        }
        setSelectedDates(newSelectedDates);
        
        if (newSelectedDates.length > 0 && selectedTime && selectedDuration) {
          const monthName = months[currentDate.getMonth()];
          const year = currentDate.getFullYear();
          
          const dateStrings = newSelectedDates.map(date => {
            const dayNum = date.split('-')[2];
            return `${monthName} ${dayNum}, ${year}`;
          });
          
          onDateSelect({ 
            dates: dateStrings,
            time: selectedTime,
            duration: selectedDuration,
            totalDays: newSelectedDates.length
          });
        }
      } else {
        setSelectedDates([clickedDate]);
        const randomTime = timeSlots[Math.floor(Math.random() * timeSlots.length)];
        const monthName = months[currentDate.getMonth()];
        const year = currentDate.getFullYear();
        onDateSelect({ day, time: randomTime, date: `${monthName} ${day}, ${year}` });
      }
    };

    const updateSelection = (dates, time, duration) => {
      if (type === 'kitchen' && dates.length > 0 && time && duration) {
        const monthName = months[currentDate.getMonth()];
        const year = currentDate.getFullYear();
        
        const dateStrings = dates.map(date => {
          const dayNum = date.split('-')[2];
          return `${monthName} ${dayNum}, ${year}`;
        });
        
        onDateSelect({ 
          dates: dateStrings,
          time: time,
          duration: duration,
          totalDays: dates.length
        });
      }
    };

    const isAvailable = (day) => {
      return day % 4 !== 0;
    };

    const isSelected = (day) => {
      const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
      return selectedDates.includes(dateKey);
    };

    const getDaysInMonth = () => {
      return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = () => {
      return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    };

    const navigateMonth = (direction) => {
      const newDate = new Date(currentDate);
      newDate.setMonth(currentDate.getMonth() + direction);
      setCurrentDate(newDate);
      setSelectedDates([]);
      setSelectedTime('');
      setSelectedDuration('');
    };

    const canGoBack = () => {
      const today = new Date();
      const firstOfCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const firstOfCalendarMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      return firstOfCalendarMonth > firstOfCurrentMonth;
    };

    const renderCalendarDays = () => {
      const daysInMonth = getDaysInMonth();
      const firstDay = getFirstDayOfMonth();
      const dayElements = [];

      for (let i = 0; i < firstDay; i++) {
        dayElements.push(<div key={`empty-${i}`} className="aspect-square"></div>);
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const available = isAvailable(day);
        const selected = isSelected(day);
        
        dayElements.push(
          <button
            key={day}
            onClick={() => available && handleDayClick(day)}
            disabled={!available}
            className={`
              aspect-square flex items-center justify-center rounded-md font-medium text-base
              transition-all duration-200 border-2
              ${available 
                ? selected
                  ? 'bg-green-700 text-white border-green-700 transform scale-105 shadow-lg'
                  : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:scale-105 cursor-pointer shadow-sm'
                : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
              }
            `}
          >
            {day}
          </button>
        );
      }

      return dayElements;
    };

    return (
      <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-200 w-full">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigateMonth(-1)}
            disabled={!canGoBack()}
            className={`px-3 py-2 rounded text-lg font-medium transition-colors ${
              canGoBack() 
                ? 'text-green-700 hover:bg-green-100 cursor-pointer' 
                : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            ‹
          </button>
          <h3 className="text-xl font-bold text-center">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button
            onClick={() => navigateMonth(1)}
            className="px-3 py-2 rounded text-lg font-medium text-green-700 hover:bg-green-100 cursor-pointer transition-colors"
          >
            ›
          </button>
        </div>
        
        {type === 'kitchen' && (
          <div className="mb-4 text-center">
            <p className="text-sm text-gray-600 mb-2">
              Click multiple dates for series booking | {selectedDates.length} day{selectedDates.length !== 1 ? 's' : ''} selected
            </p>
            {selectedTime && (
              <p className="text-xs text-blue-600">Start Time: {selectedTime}</p>
            )}
            {selectedDuration && (
              <p className="text-xs text-green-600">Duration: {selectedDuration}</p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-7 gap-2 mb-3">
          {days.map(day => (
            <div key={day} className="text-center font-semibold py-2 text-sm">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {renderCalendarDays()}
        </div>
      </div>
    );
  };

  const BookingSidebar = ({ selection, onProceed, buttonText = "Proceed to Registration" }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
      <h3 className="text-xl font-bold mb-4">Ready to Book</h3>
      
      <div className="mb-6">
        {selection ? (
          <div className="space-y-2">
            <p className="font-semibold">{selection.type}</p>
            
            {selection.dates ? (
              <div className="space-y-2">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">Selected Dates:</p>
                  <div className="text-xs text-blue-600 max-h-20 overflow-y-auto">
                    {selection.dates.map((date, index) => (
                      <div key={index}>• {date}</div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600"><strong>Start Time:</strong> {selection.time}</p>
                <p className="text-gray-600"><strong>Duration per Day:</strong> {selection.duration}</p>
                <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-400">
                  <p className="text-sm text-gray-700">
                    <strong>Total:</strong> {selection.totalDays} day{selection.totalDays !== 1 ? 's' : ''} × {selection.duration} = {selection.totalHours} hours
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm font-medium text-green-800">Total Cost: ${selection.totalCost}</p>
                  <p className="text-xs text-green-600 mt-1">$75/hour × {selection.totalHours} hours</p>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-gray-600">{selection.date}</p>
                <p className="text-gray-600">{selection.time}</p>
                <div className="mt-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm font-medium text-green-800">Cost: $75/hour</p>
                  <p className="text-xs text-green-600 mt-1">Payment due upon confirmation</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-500">Select a date and time to see details here</p>
        )}
      </div>

      <button
        onClick={onProceed}
        disabled={!selection}
        className={`
          block w-full py-3 px-4 rounded-xl font-bold text-center transition-colors
          ${selection 
            ? 'bg-green-700 text-white hover:bg-green-800' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }
        `}
      >
        {buttonText}
      </button>
    </div>
  );

  const UpcomingEvents = () => {
    const upcomingEvents = [
      {
        title: 'Food Safety Certification Workshop',
        date: 'January 15, 2025',
        time: '9:00 AM - 12:00 PM',
        type: 'Training',
        location: 'Main Training Room'
      },
      {
        title: 'Commercial Baking Masterclass',
        date: 'January 18, 2025',
        time: '2:00 PM - 5:00 PM',
        type: 'Training',
        location: 'Kitchen A'
      },
      {
        title: 'Business Strategy Consultation',
        date: 'January 22, 2025',
        time: '10:00 AM - 11:30 AM',
        type: 'Consultation',
        location: 'Conference Room'
      }
    ];

    const getTypeColor = (type) => {
      const colors = {
        'Training': 'bg-orange-100 text-orange-800',
        'Consultation': 'bg-blue-100 text-blue-800',
        'Demo': 'bg-purple-100 text-purple-800',
        'Event': 'bg-green-100 text-green-800'
      };
      return colors[type] || 'bg-gray-100 text-gray-800';
    };

    return (
      <div className="mt-12 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800 text-sm leading-tight">{event.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                  {event.type}
                </span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="font-medium">{event.date}</p>
                <p>{event.time}</p>
                <p className="text-gray-500">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleDateSelect = (type) => (selectionData) => {
    const typeNames = {
      kitchen: 'Commercial Kitchen',
      training: 'Training Session',
      consultant: 'Consultation',
      technology: 'Technology Solution'
    };

    if (type === 'kitchen' && selectionData.dates) {
      const totalHours = selectionData.totalDays * parseInt(selectionData.duration);
      const costPerHour = 75;
      const totalCost = totalHours * costPerHour;
      
      setSelection({
        type: typeNames[type],
        dates: selectionData.dates,
        time: selectionData.time,
        duration: selectionData.duration,
        totalDays: selectionData.totalDays,
        totalHours: totalHours,
        totalCost: totalCost
      });
    } else {
      setSelection({
        type: typeNames[type],
        date: selectionData.date,
        time: selectionData.time
      });
    }
  };

  const handleClientCheck = () => {
    if (clientNumber.trim()) {
      alert('Client found! Proceeding to booking confirmation.');
      setCurrentPage('home');
      setSelection(null);
    } else {
      alert('Please enter your client registration number or register as a new client.');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <section className="text-center py-16 bg-white rounded-3xl mb-12 shadow-2xl border border-gray-100">
              <h1 className="text-5xl md:text-6xl font-light text-green-700 mb-6">
                Your Space to Grow
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                Connect with professional kitchens, training programs, expert consultants,
                and technology opportunities to help your business flourish.
              </p>
              
              <div className="flex justify-center items-center gap-6 max-w-6xl mx-auto flex-wrap">
                <CTAButton 
                  onClick={() => setCurrentPage('kitchen')} 
                  variant="kitchen"
                  icon={Utensils}
                >
                  Book a<br/>Kitchen
                </CTAButton>
                <CTAButton 
                  onClick={() => setCurrentPage('training')} 
                  variant="training"
                  icon={BookOpen}
                >
                  Reserve Training
                </CTAButton>
                <CTAButton 
                  onClick={() => setCurrentPage('consultant')} 
                  variant="consultant"
                  icon={Users}
                >
                  Meet a Consultant
                </CTAButton>
                <CTAButton 
                  onClick={() => setCurrentPage('technology')} 
                  variant="technology"
                  icon={Cpu}
                >
                  Incorporate<br/>Technology
                </CTAButton>
              </div>
              
              <div className="mt-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-8 shadow-md">
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed text-center">
                    "Schedule Thyme transformed our food business completely. From accessing professional kitchen space to learning digital marketing, 
                    we increased our revenue by 300% in just six months."
                  </blockquote>
                  <footer className="mt-4 text-center text-green-700 font-semibold">
                    — Maria Santos, Founder of Artisan Eats
                  </footer>
                </div>
              </div>
            </section>
          </div>
        );

      case 'kitchen':
        return (
          <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-green-800 mb-4 font-mono tracking-wider">
                  Your Professional Kitchen
                </h1>
                <p className="text-xl text-gray-600 font-light">
                  Book a fully equipped commercial kitchen space for your food production needs
                </p>
              </div>

              <div className="flex gap-8 mb-8">
                <div className="w-1/2">
                  <CalendarComponent 
                    onDateSelect={handleDateSelect('kitchen')} 
                    type="kitchen"
                  />
                </div>
                
                <div className="w-1/2 space-y-4">
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:border-green-700 focus:outline-none">
                    <option value="">Capacity</option>
                    <option>Small (1-2 people)</option>
                    <option>Medium (3-5 people)</option>
                    <option>Large (6+ people)</option>
                    <option>Extra Large (10+ people)</option>
                  </select>
                  
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:border-green-700 focus:outline-none">
                    <option value="">Equipment Type</option>
                    <option>Industrial Convection Oven</option>
                    <option>Commercial Gas Range</option>
                    <option>Electric Range Top</option>
                    <option>Commercial Deep Fryer</option>
                    <option>60-Qt Stand Mixer</option>
                    <option>Commercial Food Processor</option>
                    <option>Walk-in Freezer</option>
                    <option>Walk-in Refrigerator</option>
                    <option>Commercial Dishwasher</option>
                    <option>3-Compartment Sink</option>
                    <option>Prep Tables (Stainless Steel)</option>
                    <option>Commercial Blender</option>
                  </select>

                  <div className="space-y-4 border-t pt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Start Time
                      </label>
                      <select 
                        className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg text-base focus:border-blue-700 focus:outline-none bg-blue-50"
                        onChange={(e) => {
                          if (e.target.value) {
                            const event = new CustomEvent('timeSelected', { detail: e.target.value });
                            document.dispatchEvent(event);
                          }
                        }}
                      >
                        <option value="">Choose start time</option>
                        <option value="6:00 AM">6:00 AM</option>
                        <option value="8:00 AM">8:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Duration per Day
                      </label>
                      <select 
                        className="w-full px-4 py-3 border-2 border-green-200 rounded-lg text-base focus:border-green-700 focus:outline-none bg-green-50"
                        onChange={(e) => {
                          if (e.target.value) {
                            const event = new CustomEvent('durationSelected', { detail: e.target.value });
                            document.dispatchEvent(event);
                          }
                        }}
                      >
                        <option value="">Choose duration</option>
                        <option value="4 hours">4 hours - $300 per day</option>
                        <option value="8 hours">8 hours - $600 per day</option>
                        <option value="12 hours">12 hours - $900 per day</option>
                        <option value="24 hours">24 hours - $1,800 per day</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <BookingSidebar 
                      selection={selection} 
                      onProceed={() => setCurrentPage('registration')}
                      buttonText="Book Kitchen"
                    />
                  </div>
                </div>
              </div>

              <UpcomingEvents />
            </div>
          </div>
        );

      case 'training':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Reserve Training Sessions
              </h1>
              <p className="text-xl text-gray-600">
                Join expert-led training programs to enhance your culinary and business skills
              </p>
            </div>