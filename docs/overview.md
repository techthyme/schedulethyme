Project Overview
A comprehensive React-based booking platform for food entrepreneurs, providing access to commercial kitchens, training programs, expert consultations, and technology services. The application is built using React with Tailwind CSS for styling and Lucide React for icons.
Technical Stack
Framework: React with functional components and hooks
Styling: Tailwind CSS with custom utility classes
Icons: Lucide React library
State Management: React useState hooks
Routing: Single-page application with conditional rendering based on currentPage state
Core Application Structure
Main Component: ScheduleThyme
State Variables:
currentPage: Controls which page/view is displayed ('home', 'kitchen', 'training', 'consultant', 'technology', 'info', 'registration')
selection: Stores booking details when user makes selections
isMenuOpen: Controls mobile menu visibility
showRegistration: Toggles between client login and new registration forms
clientNumber: Stores client registration number input
Key Components

1. Header Component
   Responsive navigation with centered logo title "Welcome to Schedule Thyme"
   Desktop navigation menu (Home, Info, Services, My Account)
   Mobile hamburger menu with slide-down navigation
   Sticky positioning with green gradient background
   Navigation items trigger setCurrentPage() to switch views
2. Footer Component
   Four footer links: About Us, Contact, FAQ, Terms of Service
   Links use handleFooterLinkClick() function that:
   Sets currentPage to 'info'
   Uses setTimeout and scrollIntoView for smooth scrolling to specific sections
   Green background matching the brand theme
3. CTAButton Component
   Reusable call-to-action buttons for main services
   Four variants with distinct color schemes:
   Kitchen: Green gradients
   Training: Orange gradients
   Consultant: Red gradients
   Technology: Blue gradients
   Hover effects: transform scale, translate, and shadow changes
   Icon support with Lucide React icons
   Fixed dimensions: 192px x 192px (w-48 h-48)
4. CalendarComponent
   Complex calendar system with the following features:
   Multi-date selection capability for kitchen bookings
   Single date selection for other services
   Month navigation with forward/backward buttons
   Availability logic: days divisible by 4 are unavailable (simulated booking conflicts)
   Visual states: available, selected, unavailable with distinct styling
   Kitchen-specific features:
   Real-time display of selected time and duration below calendar
   Event listeners for dropdown selections using CustomEvent API
   Integration with external dropdown controls
   State Management:
   selectedDates: Array of selected date strings
   currentDate: Currently displayed month/year
   selectedTime: Selected start time from dropdown
   selectedDuration: Selected duration from dropdown
5. BookingSidebar Component
   Booking confirmation interface with title "Ready to Book"
   Displays selected service type, dates, times, and pricing
   Kitchen bookings show detailed breakdown:
   Selected dates list with scrollable container
   Start time and duration per day
   Total calculation (days × duration = total hours)
   Cost calculation ($75/hour × total hours)
   Dynamic button text based on service type
   Disabled state when no selection is made
   Page Implementations
6. Home Page
   Large hero section with "Your Space to Grow" headline
   Service description text
   Four CTAButton components in flexible layout
   Customer testimonial section with quote from "Maria Santos, Founder of Artisan Eats"
   Professional styling with shadows and rounded corners
7. Kitchen Booking Page
   Layout: Two-column layout (w-1/2 each)
   Left Column: CalendarComponent with kitchen-specific features
   Right Column Hierarchy:
   Capacity dropdown (Small to Extra Large options)
   Equipment Type dropdown (13+ commercial kitchen equipment options)
   Time Selection dropdown (positioned as specifically requested):
   Blue-themed styling (blue borders, blue-50 background)
   8 time slots from 6:00 AM to 8:00 PM
   Dispatches 'timeSelected' CustomEvent
   Duration Selection dropdown (positioned below time selection):
   Green-themed styling (green borders, green-50 background)
   4 duration options with pricing: 4hrs ($300), 8hrs ($600), 12hrs ($900), 24hrs ($1,800)
   Dispatches 'durationSelected' CustomEvent
   BookingSidebar with "Book Kitchen" button
   Calendar Integration:
   Listens for 'timeSelected' and 'durationSelected' events
   Updates internal state and triggers booking calculations
   Shows selected time/duration below calendar header
   Multi-date selection with running count display
8. Training Page
   Similar two-column layout
   Topic dropdown (Food Safety, Advanced Baking, Marketing)
   Instructor dropdown (Chef Maria Rodriguez, Business Coach John Smith, Safety Expert Lisa Chen)
   Single-date calendar selection
   Standard BookingSidebar
9. Consultant Page
   Expertise Area dropdown (Business Strategy, Marketing & Branding, Financial Planning)
   Expert Name dropdown with specific consultant profiles
   Single-date calendar selection
   Standard BookingSidebar
10. Technology Page
    Layout: Different from other service pages
    Left Column:
    Technology Request dropdown (8 options: Software Development, POS Integration, etc.)
    Branding Solutions dropdown (7 options: Logo Design, Website Development, etc.)
    BookingSidebar with "Request Service" button
    Right Column:
    Two informational cards in grid layout:
    Technology Services card (blue theme, $150/hour, Cpu icon)
    Branding Solutions card (pink theme, $125/hour, custom shield icon)
11. Info Page
    Comprehensive information hub with four sections:
    Navigation Menu: Color-coded buttons for section jumping
    About Us (green), Contact (blue), FAQ (orange), Facility Rules (red)
    Section Details:
    About Us (#about):
    Company story and mission (founded 2020)
    Impact metrics in 2x2 grid: 500+ businesses, 1,200+ training sessions, 300+ tech solutions, 95% success rate
    Services overview grid with 4 service types
    Contact (#contact):
    Contact information with icons: address, phone numbers, email
    Operating hours table (Monday-Friday 6AM-10PM, Saturday 8AM-8PM, Sunday 8AM-6PM)
    24/7 support availability
    FAQ (#faq):
    6 questions in 2-column layout
    Color-coded cards with left border styling
    Topics: equipment, licensing, cancellation, training levels, client registration, technology services
    Facility Rules (#rules):
    Four categorized sections with emoji icons:
    Safety Requirements (:warning: red theme)
    Booking Policies (:clipboard: blue theme)
    Usage Guidelines (:white_check_mark: green theme)
    Violations & Consequences (:scales: purple theme)
    Legal acknowledgment section with version tracking
12. Registration System
    Two-step process:
    Step 1: Client Check Screen
    Input field for existing client registration number (format: ST-YYYY-XXXXXX)
    Two buttons: "Continue with Existing Account" and "Register as New Client"
    handleClientCheck() function validates input
    Step 2: New Client Registration Form
    Form fields: Full Name*, Email*, Business Name
    "Complete Registration & Book" button with success alert
    "Back to Client Login" button to return to step 1
    Data Flow and State Management
    Booking Flow:
    User selects service type → triggers setCurrentPage()
    User interacts with calendar → triggers handleDayClick()
    User selects time/duration (kitchen only) → triggers CustomEvent dispatch
    Calendar component receives events → updates internal state
    Selection data passed to parent via handleDateSelect() callback
    Parent updates selection state with calculated totals
    BookingSidebar displays booking summary
    User proceeds to registration
    Key Functions:
    handleDateSelect(type): Returns callback function for processing calendar selections
    handleClientCheck(): Validates client numbers and processes login
    handleFooterLinkClick(section): Navigates to info page and scrolls to sections
    renderPage(): Switch statement returning appropriate JSX based on currentPage
    Styling and Design System
    Color Scheme:
    Primary Green: green-600 to green-800 gradients
    Secondary Colors: Orange (training), Red (consultant), Blue (technology)
    Neutral: Gray scales for text and backgrounds
    Typography:
    Headers: Font sizes from text-4xl to text-6xl
    Body: text-xl for descriptions, text-base for forms
    Font weights: light for headers, medium/semibold for emphasis
    Layout Patterns:
    Max width containers: max-w-7xl for full width, max-w-2xl for forms
    Consistent padding: px-4 sm:px-6 lg:px-8, py-8
    Gap spacing: gap-8 for major sections, gap-4 for related items
    Grid systems: grid-cols-7 for calendar, grid-cols-2 for info cards
    Interactive Elements:
    Hover effects: transform, scale, shadow changes
    Focus states: border color changes and outline removal
    Disabled states: gray backgrounds and cursor-not-allowed
    Transition classes: transition-colors, transition-all duration-300
    Technical Implementation Notes
    Event System:
    CustomEvent API for dropdown-to-calendar communication
    Event listeners with cleanup in useEffect hooks
    Document-level event dispatching and listening
    Calendar Logic:
    Date string format: "YYYY-M-D" for internal tracking
    Display format: "Month Day, Year" for user interface
    Availability simulation: day % 4 !== 0
    Multi-date selection with array manipulation
    Pricing Calculations:
    Kitchen: $75/hour base rate
    Duration parsing: parseInt(selectedDuration) to extract hour values
    Total calculation: totalDays × hoursPerDay × hourlyRate
    Responsive Design:
    Mobile-first approach with responsive breakpoints
    Hidden/shown elements: hidden md:flex, md:hidden
    Responsive text sizes: text-4xl md:text-5xl lg:text-6xl
    Flexible layouts: flex flex-wrap, grid-cols-1 md:grid-cols-2
    This implementation provides a complete, production-ready booking platform with sophisticated calendar functionality, responsive design, and comprehensive business information management.
