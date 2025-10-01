import { Calendar, Event, Collab, HeroSection, Profile, Resource, User, EventStatus } from "@/types";
import { AboutUsData } from "@/types";

export const _mockEvents: Event[] = [
  {
    id: "1",
    title: "Sunset Beach Yoga",
    dateStart: 1758709200,
    dateEnd: 1758716400,
    location: "Miami Beach, FL",
    type: "training",
    date: "",
    place: "",
    description:
      "Join us for a relaxing yoga session as the sun sets over the ocean.",
    price: 20,
    imageUrl: "https://picsum.photos/seed/yoga/400/250",
    status: "scheduled",
  },
  {
    id: "2",
    title: "Farm-to-Table Dinner",
    dateStart: 1758795600,
    location: "Napa Valley, CA",
    type: "training",
    date: "",
    place: "",
    description:
      "A five-course dining experience featuring locally sourced ingredients.",
    price: 120,
    imageUrl: "https://picsum.photos/seed/dinner/400/250",
    status: "scheduled",
  },
  {
    id: "3",
    title: "Tech Startup Pitch Night",
    dateStart: 1758882000,
    location: "Austin, TX",
    type: "training",
    date: "",
    place: "",
    description: "Watch startups pitch their ideas to a panel of investors.",
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/multiracial-group-of-office-workers-2025-03-05-05-25-38-utc.jpg",
    status: "cancelled",
  },
  {
    id: "4",
    title: "Outdoor Movie Screening: Inception",
    dateStart: 1758968400,
    location: "Central Park, NY",
    type: "training",
    date: "",
    place: "",
    description: "Bring a blanket and enjoy a free outdoor movie night.",
    imageUrl: "https://picsum.photos/seed/movie/400/250",
    status: "cancelled",
  },
  {
    id: "5",
    title: "Live Jazz Night",
    dateStart: 1759054800,
    location: "New Orleans, LA",
    type: "training",
    date: "",
    place: "",
    description: "Collab smooth jazz performed by local musicians.",
    price: 15,
    imageUrl: "https://picsum.photos/seed/jazz/400/250",
    status: "cancelled",
  },
  {
    id: "6",
    title: "Art & Wine Festival",
    dateStart: 1759141200,
    dateEnd: 1759227600,
    location: "Sonoma, CA",
    type: "training",
    date: "",
    place: "",
    description: "Browse art exhibits while enjoying local wines.",
    price: 40,
    imageUrl: "https://picsum.photos/seed/artwine/400/250",
    status: "cancelled",
  },
  {
    id: "7",
    title: "Coding Bootcamp Demo Day",
    dateStart: 1759314000,
    location: "San Francisco, CA",
    type: "training",
    date: "",
    place: "",
    description: "Meet graduates showcasing their final tech projects.",
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/togetherness-modern-light-office-sitting-on-the-2024-10-14-22-23-58-utc.jpg",
    status: "cancelled",
  },
  {
    id: "8",
    title: "Community Beach Cleanup",
    dateStart: 1759400400,
    location: "Santa Monica, CA",
    type: "training",
    date: "",
    place: "",
    description: "Help keep the beach clean and safe for everyone.",
    imageUrl: "https://picsum.photos/seed/cleanup/400/250",
    status: "cancelled",
  },
  {
    id: "9",
    title: "Wine & Paint Night",
    dateStart: 1759486800,
    location: "Chicago, IL",
    type: "training",
    date: "",
    place: "",
    description: "Unleash your creativity while enjoying a glass of wine.",
    price: 35,
    imageUrl: "https://picsum.photos/seed/paint/400/250",
    status: "cancelled",
  },
  {
    id: "10",
    title: "Startup Networking Mixer",
    dateStart: 1759573200,
    location: "Boston, MA",
    type: "training",
    date: "",
    place: "",
    description: "Meet fellow entrepreneurs, investors, and professionals.",
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/two-businesswomen-recording-a-podcast-in-modern-of-2025-08-26-11-54-58-utc.jpg",
    status: "cancelled",
  },
  {
    id: "11",
    title: "Salsa Dance Class",
    dateStart: 1759659600,
    location: "Miami, FL",
    type: "training",
    date: "",
    place: "",
    description: "Learn salsa basics with live music accompaniment.",
    price: 25,
    imageUrl: "https://picsum.photos/seed/salsa/400/250",
    status: "cancelled",
  },
  {
    id: "12",
    title: "Food Truck Festival",
    dateStart: 1759746000,
    location: "Portland, OR",
    type: "training",
    date: "",
    place: "",
    description: "Taste dishes from dozens of local food trucks.",
    price: undefined,
    imageUrl: "https://picsum.photos/seed/foodtruck/400/250",
    status: "cancelled",
  },
  {
    id: "13",
    title: "Charity 5K Run",
    dateStart: 1759832400,
    location: "Denver, CO",
    type: "training",
    date: "",
    place: "",
    description: "Run or walk to raise money for local charities.",
    price: 30,
    imageUrl: "https://picsum.photos/seed/run/400/250",
    status: "cancelled",
  },
  {
    id: "14",
    title: "Board Game Night",
    dateStart: 1759918800,
    location: "Seattle, WA",
    type: "training",
    date: "",
    place: "",
    description: "Join us for a night of classic and modern board games.",
    imageUrl: "https://picsum.photos/seed/boardgame/400/250",
    status: "cancelled",
  },
  {
    id: "15",
    title: "Photography Workshop",
    dateStart: 1760005200,
    location: "Sedona, AZ",
    type: "training",
    date: "",
    place: "",
    description: "Learn photography techniques in a scenic desert landscape.",
    price: 60,
    imageUrl: "https://picsum.photos/seed/photo/400/250",
    status: "cancelled",
  },
  {
    id: "16",
    title: "Wine Tasting Tour",
    dateStart: 1760091600,
    location: "Finger Lakes, NY",
    type: "training",
    date: "",
    place: "",
    description: "Visit multiple wineries and sample award-winning wines.",
    price: 75,
    imageUrl: "https://picsum.photos/seed/winetour/400/250",
    status: "cancelled",
  },
  {
    id: "17",
    title: "Comedy Open Mic Night",
    dateStart: 1760178000,
    location: "Los Angeles, CA",
    type: "training",
    date: "",
    place: "",
    description: "Enjoy up-and-coming comedians performing live.",
    price: 10,
    imageUrl: "https://picsum.photos/seed/comedy/400/250",
    status: "cancelled",
  },
  {
    id: "18",
    title: "Book Club: Sci-Fi Classics",
    dateStart: 1760264400,
    location: "Brooklyn, NY",
    type: "training",
    date: "",
    place: "",
    description: "Discuss classic sci-fi novels with fellow readers.",
    imageUrl: "https://picsum.photos/seed/bookclub/400/250",
    status: "cancelled",
  },
  {
    id: "19",
    title: "Craft Beer Tasting",
    dateStart: 1760350800,
    location: "San Diego, CA",
    type: "training",
    date: "",
    place: "",
    description: "Sample a wide variety of local craft beers.",
    price: 50,
    imageUrl: "https://picsum.photos/seed/beer/400/250",
    status: "cancelled",
  },
  {
    id: "20",
    title: "Holiday Market",
    dateStart: 1760437200,
    dateEnd: 1760523600,
    location: "Philadelphia, PA",
    type: "training",
    date: "",
    place: "",
    description: "Shop for unique gifts and enjoy festive treats.",
    imageUrl: "https://picsum.photos/seed/holiday/400/250",
    status: "cancelled",
  },
];

export const mockProfiles: Profile[] = [
  {
    id: "22", 
    name: "the guy", 
    user: {
      id: "user-123",
      name: "Antonio Rosario",
      email: "antonio@gmail.com",
      phone: "+1 (555) 987-6543",
      organization: "TechThyme",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    bio: "Educator and developer building AI-powered solutions in the Virgin Islands 🌴🤖",

  },
  {
    id: "1",
    name: "Alice Johnson",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    user: {
      id: "1",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-202-555-0143",
      organization: "TechCorp",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
  },
  {
    id: "2",
    name: "Bob Smith",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Carla Mendes",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "4",
    name: "David Lee",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: "5",
    name: "Eva Chen",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "6",
    name: "Frank Wilson",
    avatarUrl: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: "7",
    name: "Grace Kim",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: "8",
    name: "Henry Thompson",
    avatarUrl: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: "9",
    name: "Isabella Rossi",
    avatarUrl: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: "10",
    name: "Jack Brown",
    avatarUrl: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: "11",
    name: "Karen Davis",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: "12",
    name: "Leo Martin",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "13",
    name: "Mia Gonzalez",
    avatarUrl: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: "14",
    name: "Noah Patel",
    avatarUrl: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: "15",
    name: "Olivia Nguyen",
    avatarUrl: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: "16",
    name: "Paul Edwards",
    avatarUrl: "https://i.pravatar.cc/150?img=16",
  },
  {
    id: "17",
    name: "Quinn Rivera",
    avatarUrl: "https://i.pravatar.cc/150?img=17",
  },
  {
    id: "18",
    name: "Rachel Adams",
    avatarUrl: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: "19",
    name: "Samuel Green",
    avatarUrl: "https://i.pravatar.cc/150?img=19",
  },
  {
    id: "20",
    name: "Tina Lopez",
    avatarUrl: "https://i.pravatar.cc/150?img=20",
  },
];



export const heroData: HeroSection = {
  // announcement: {
  //   text: "Announcing our next round of funding.",
  //   linkText: "Read more",
  //   linkUrl: "#"
  // },
  heading: "Data to enrich your online business",
  description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
  primaryCTA: {
    text: "Get started",
    url: "#"
  },
  secondaryCTA: {
    text: "Learn more",
    url: "#"
  }
};

//about
export const aboutUsData: AboutUsData = {
  stats: [
    { label: "Team Members", value: "4" },
    { label: "Spaces Available", value: "50+" },
    { label: "Events Hosted", value: "1000+" }
  ],
  values: [
    {
      title: "Simplicity",
      description: "We make event hosting and space booking effortless with intuitive scheduling tools."
    },
    {
      title: "Accessibility",
      description: "Connecting event organizers with the perfect spaces for seminars, workshops, and gatherings."
    },
    {
      title: "Community",
      description: "Building a platform that brings people together through seamless event experiences."
    }
  ]
};



export const mockCollabs: Collab[] = [
  // Services (20)
  {
    id: "clb-1",
    name: "USVI Small Business Startup Workshop",
    dateStart: Math.floor(new Date('2025-10-01T09:00:00').getTime() / 1000),
    dateEnd: Math.floor(new Date('2025-10-01T12:00:00').getTime() / 1000),
    location: "University of the Virgin Islands Innovation Hub, St. Thomas",
    description: "Master the fundamentals of launching your business in the USVI. Learn about EDC benefits, local licensing, Caribbean market opportunities, and tax incentives unique to the territory.",
    price: 85,
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/business-team-meeting-in-modern-office-discussing-2025-04-29-18-00-07-utc.jpg",
    status: "scheduled",
    type: "service",
    date: "2025-10-01",
    time: "9:00 AM",
    timezone: "America/St_Thomas",
    place: "UVI Innovation Lab, St. Thomas",
    instructors: [{
      name: "Carlos Bermudez",
      title: "USVI Economic Development Authority Senior Advisor"
    }],
    maxAttendees: 25,
    currentAttendees: 18,
    registrationRequired: true,
    registrationDeadline: "2025-09-29"
  },
  {
    id: "clb-33",
    name: "Caribbean Tourism Excellence Certification",
    dateStart: Math.floor(new Date('2025-10-01T09:00:00').getTime() / 1000),
    dateEnd: Math.floor(new Date('2025-10-01T12:00:00').getTime() / 1000),
    location: "Bluebeard's Castle Resort, St. Thomas",
    description: "Elevate your tourism service standards with this comprehensive certification program. Learn hospitality best practices, cultural tourism, and sustainable island business operations.",
    price: 125,
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/smiling-african-american-female-executive-leading-2025-02-25-00-27-09-utc.jpg",
    status: "scheduled",
    type: "event",
    date: "2025-10-01",
    time: "9:00 AM",
    timezone: "America/St_Thomas",
    place: "UVI Innovation Lab, St. Thomas",
    instructors: [{
      name: "Carlos Bermudez",
      title: "USVI Economic Development Authority Senior Advisor"
    }],
    maxAttendees: 25,
    currentAttendees: 18,
    registrationRequired: true,
    registrationDeadline: "2025-09-29"
  },
  {
    id: "clb-2",
    name: "Caribbean Digital Marketing Mastery",
    dateStart: Math.floor(new Date('2025-10-03T14:00:00').getTime() / 1000),
    dateEnd: Math.floor(new Date('2025-10-03T17:00:00').getTime() / 1000),
    location: "Yacht Haven Grande Business Center, St. Thomas",
    description: "Dominate Caribbean tourism markets with targeted digital strategies. Master Instagram for destination marketing, Google Ads for cruise passengers, and email campaigns that convert island visitors into loyal customers.",
    price: 110,
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/business-people-working-in-office-2025-02-21-13-22-15-utc.jpg",
    status: "scheduled",
    type: "service",
    date: "2025-10-03",
    time: "2:00 PM",
    timezone: "America/St_Thomas",
    place: "Charlotte Amalie Community Center, St. Thomas",
    instructors: [{
      name: "Isabella Santos",
      title: "Caribbean Tourism Digital Strategy Consultant"
    }],
    maxAttendees: 30,
    currentAttendees: 22,
    registrationRequired: true,
    registrationDeadline: "2025-10-01"
  },
  {
    id: "clb-3",
    name: "Luxury Caribbean Hospitality Strategy Session",
    dateStart: Math.floor(new Date('2025-10-05T10:00:00').getTime() / 1000),
    dateEnd: Math.floor(new Date('2025-10-05T11:30:00').getTime() / 1000),
    location: "The Ritz-Carlton St. Thomas, Estate Great Bay",
    description: "Exclusive one-on-one strategy sessions for premium tourism operators. Optimize your luxury service offerings, develop high-value guest experiences, and capture the growing ultra-high-net-worth Caribbean travel market.",
    price: 295,
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/businessman-and-businesswoman-having-discussion-ar-2024-10-19-05-32-47-utc.jpg",
    status: "scheduled",
    type: "service",
    date: "2025-10-05",
    time: "10:00 AM",
    timezone: "America/St_Thomas",
    place: "Paradise Point Resort, St. Thomas",
    instructors: [{
      name: "Victoria Blackwood",
      title: "Luxury Hospitality Operations Director"
    }],
    maxAttendees: 5,
    currentAttendees: 3,
    registrationRequired: true,
    registrationDeadline: "2025-10-03"
  },
  {
    id: "clb-4",
    name: "Marine Ecotourism Business Development",
    dateStart: Math.floor(new Date('2025-10-07T08:30:00').getTime() / 1000),
    dateEnd: Math.floor(new Date('2025-10-07T16:00:00').getTime() / 1000),
    location: "Coral World Ocean Park, St. Thomas",
    description: "Turn your passion for marine conservation into a thriving ecotourism business. Learn sustainable diving operations, marine education programming, and how to partner with conservation organizations for authentic Caribbean experiences.",
    price: 165,
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/group-of-people-sitting-around-table-with-laptops-2025-09-25-14-07-57-utc.jpg",
    status: "scheduled",
    type: "service",
    date: "2025-10-07",
    time: "8:30 AM",
    timezone: "America/St_Thomas",
    place: "Coral World Ocean Park, St. Thomas",
    instructors: [{
      name: "Captain Miguel Fuentes",
      title: "Marine Tourism Operations Expert"
    }, {
      name: "Dr. Amelia Richardson",
      title: "Caribbean Marine Conservation Director"
    }],
    maxAttendees: 15,
    currentAttendees: 12,
    registrationRequired: true,
    registrationDeadline: "2025-10-05"
  },
  {
    id: "clb-5",
    name: "USVI Culinary Business Accelerator",
    dateStart: Math.floor(new Date('2025-10-09T16:00:00').getTime() / 1000),
    dateEnd: Math.floor(new Date('2025-10-09T19:00:00').getTime() / 1000),
    location: "Frenchtown Culinary Arts Center, St. Thomas",
    description: "Launch your Caribbean culinary enterprise with authentic island flavors. Master traditional Virgin Islands cuisine, food truck regulations, catering for resorts, and building relationships with local fishermen and farmers.",
    price: 95,
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/business-people-working-in-office-2025-02-21-13-22-15-utc.jpg",
    status: "scheduled",
    type: "service",
    date: "2025-10-09",
    time: "4:00 PM",
    timezone: "America/St_Thomas",
    place: "Frenchtown Community Kitchen, St. Thomas",
    instructors: [{
      name: "Chef Lucia St. Clair",
      title: "Virgin Islands Culinary Heritage Specialist"
    }],
    maxAttendees: 12,
    currentAttendees: 8,
    registrationRequired: true,
    registrationDeadline: "2025-10-07"
  },
  {
    id: "clb-6",
    name: "USVI Tax Strategy & Island Business Finance",
    dateStart: Math.floor(new Date('2025-10-12T10:00:00').getTime() / 1000),
    dateEnd: Math.floor(new Date('2025-10-12T13:00:00').getTime() / 1000),
    location: "FirstBank Virgin Islands Business Center, Red Hook",
    description: "Master the unique financial landscape of USVI business operations. Learn about territorial tax benefits, hurricane preparedness funding, seasonal cash flow management, and offshore banking advantages.",
    price: 75,
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/female-boss-shows-presentation-on-screen-at-busine-2024-10-19-03-25-07-utc.jpg",
    status: "scheduled",
    type: "service",
    date: "2025-10-12",
    time: "10:00 AM",
    timezone: "America/St_Thomas",
    place: "Red Hook Plaza Conference Room, St. Thomas",
    instructors: [{
      name: "Marcus Petersen CPA",
      title: "USVI Tax & Business Finance Advisor"
    }],
    maxAttendees: 20,
    currentAttendees: 14,
    registrationRequired: true,
    registrationDeadline: "2025-10-10"
  },

  ...Array.from({ length: 15 }, (_, i) => ({
    id: `evt-${i + 6}`,
    type: "service" as const,
    name: `Caribbean Business Strategy Session #${i + 6}`,
    description: "Personalized consulting for USVI entrepreneurs and island businesses.",
    host: `Consultant ${i + 6}`,
    price: 200 + i * 10,
    location: i % 2 === 0 ? "Virtual" : "St. Croix",
    dateStart: 1767657600000 + i * 86400000,
    place: i % 2 === 0 ? "Online" : "Business Hub",
    status: "upcoming",
    dateEnd: Math.floor(new Date('2025-10-12T13:00:00').getTime() / 1000),
    imageUrl: i % 3 === 0 ? "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/business-people-talking-at-the-seminar-2025-02-11-15-39-05-utc.jpg" : i % 3 === 1 ? "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/multiracial-group-of-office-workers-2025-03-05-05-25-38-utc.jpg" : "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/happy-young-adults-sitting-at-table-while-drinking-2025-02-18-08-48-25-utc.jpg",
    date: "2025-10-12",
    time: "10:00 AM",
    timezone: "America/St_Thomas",
    instructors: [{
      name: "Marcus Petersen CPA",
      title: "USVI Tax & Business Finance Advisor"
    }],
    maxAttendees: 20,
    currentAttendees: 14,
    registrationRequired: true,
    registrationDeadline: "2025-10-10"
  })),
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `svc-${i + 6}`,
    type: "event" as const,
    name: `Sustainable Island Agriculture Workshop #${i + 6}`,
    description: "Personalized consulting for USVI entrepreneurs and island businesses.",
    host: `Consultant ${i + 6}`,
    price: 200 + i * 10,
    location: i % 2 === 0 ? "Virtual" : "St. Croix",
    dateStart: 1767657600000 + i * 86400000,
    place: i % 2 === 0 ? "Online" : "Business Hub",
    status: "upcoming",
    dateEnd: Math.floor(new Date('2025-10-12T13:00:00').getTime() / 1000),
    imageUrl: i % 3 === 0 ? "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/portrait-of-a-businessman-holding-glasses-looking-2024-10-19-04-33-11-utc.jpg" : i % 3 === 1 ? "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/a-young-business-woman-sitting-in-the-office-looki-2025-03-13-01-23-25-utc.jpg" : "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/unrecognizable-woman-raising-hand-during-conferenc-2025-02-10-09-49-36-utc.jpg",
    date: "2025-10-12",
    time: "10:00 AM",
    timezone: "America/St_Thomas",
    instructors: [{
      name: "Marcus Petersen CPA",
      title: "USVI Tax & Business Finance Advisor"
    }],
    maxAttendees: 20,
    currentAttendees: 14,
    registrationRequired: true,
    registrationDeadline: "2025-10-10"
  })),  
  // 18009403446
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `svc-${i + 6}`,
    type: "service" as const,
    name: `Caribbean Business Strategy Session #${i + 6}`,
    description: "Personalized consulting for USVI entrepreneurs and island businesses.",
    host: `Consultant ${i + 6}`,
    price: 200 + i * 10,
    location: i % 2 === 0 ? "Virtual" : "St. Croix",
    dateStart: 1767657600000 + i * 86400000,
    place: i % 2 === 0 ? "Online" : "Business Hub",
    status: "upcoming",
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/business-people-talking-at-the-seminar-2025-02-11-15-39-05-utc.jpg",
    date: "2025-10-12",
    time: "10:00 AM",
    timezone: "America/St_Thomas",
    instructors: [{
      name: "Marcus Petersen CPA",
      title: "USVI Tax & Business Finance Advisor"
    }],
    maxAttendees: 20,
    currentAttendees: 14,
    registrationRequired: true,
    registrationDeadline: "2025-10-10"
  })),
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `trn-${i + 6}`,
    type: "training" as const,
    name: `USVI Professional Development Series #${i + 6}`,
    description: `Career advancement training for Virgin Islands professionals.`,
    host: `Consultant ${i + 6}`,
    price: 200 + i * 10,
    location: i % 2 === 0 ? "Virtual" : "St. Croix",
    dateStart: 1767657600000 + i * 86400000,
    place: i % 2 === 0 ? "Online" : "Business Hub",
    status: "upcoming",
    imageUrl: i % 3 === 0 ? "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/young-speaker-talking-to-audience-at-conference-2025-03-09-23-13-04-utc.jpg" : i % 3 === 1 ? "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/group-of-engineers-analyzing-the-results-of-techno-2025-01-09-06-23-16-utc.jpg" : "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/latin-woman-taking-selfie-at-a-carnival-party-in-t-2025-08-11-05-36-12-utc.jpg",
    date: "2025-10-12",
    time: "10:00 AM",
    timezone: "America/St_Thomas",
    instructors: [{
      name: "Marcus Petersen CPA",
      title: "USVI Tax & Business Finance Advisor"
    }],
    maxAttendees: 20,
    currentAttendees: 14,
    registrationRequired: true,
    registrationDeadline: "2025-10-10"
  })),
  ...Array.from({ length: 15 }, (_, i) => ({
      id: `wks-${i + 6}`,
    type: "event" as const,
    name: `Caribbean Skills Development Workshop #${i + 6}`,
    description: "Hands-on skill building for the modern Caribbean workforce.",
    host: `Trainer ${i + 6}`,
    price: 30 + i * 5,
    location: i % 2 === 0 ? "St. Thomas" : "Virtual",
    dateStart: 1768176000000 + i * 86400000,
    dateEnd: 1768183200000 + i * 86400000,
    place: i % 2 === 0 ? "UVI Innovation Lab" : "Online",
    status: "upcoming" as const,
    registrationRequired: true,
    maxAttendees: 40,
    currentAttendees: 5 + i,
    imageUrl: i % 3 === 0 ? "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/business-people-sitting-at-meeting-2025-02-25-02-26-51-utc.jpg" : i % 3 === 1 ? "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/a-group-of-people-in-a-pub-drinking-and-talking-2024-10-22-03-35-41-utc.jpg" : "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/eden-island-seychelles-2024-12-16-04-53-59-utc.jpg",
    date: "2025-10-12",
    time: "10:00 AM",
    timezone: "America/St_Thomas",
    instructors: [{
      name: "Marcus Petersen CPA",
      title: "USVI Tax & Business Finance Advisor"
    }],
    registrationDeadline: "2025-10-10"
  })),

  
  // replicate to make 20
  ...Array.from({ length: 15 }, (_, i) => ({
  id: `spc-${i + 6}`,
  type: "space" as const,
  name: `St. Thomas Co-Working Hub #${i + 6}`,
  description: "Modern workspace designed for island entrepreneurs and remote professionals.",
  location: i % 2 === 0 ? "St. Thomas" : "St. Croix",
  dateStart: 1768694400000 + i * 86400000,
  dateEnd: undefined,
  date: new Date(1768694400000 + i * 86400000).toISOString().split("T")[0], // e.g., "2025-12-18"
  time: undefined,
  timezone: "America/St_Thomas",
  place: i % 2 === 0 ? "Tech Hub" : "Business Resource Center",
  status: "scheduled" as EventStatus,
  registrationRequired: true,
  maxAttendees: 40,
  currentAttendees: 5 + i,
  imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/contemporary-young-people-in-business-meeting-2025-03-07-09-29-24-utc.jpg",
  instructors: [{
    name: "CPA Jennifer Lee",
    title: "Financial Planning Specialist"
  }],
  registrationDeadline: "2025-10-10"
})),
];


// Google Calendar-style events for St. Thomas, USVI
export const mockEvents: Event[] = [
  {
    id: "clb-1",
    title: "Starting Your Island Business",
    dateStart: Math.floor(new Date('2025-10-01T09:00:00').getTime() / 1000),
    dateEnd: Math.floor(new Date('2025-10-01T12:00:00').getTime() / 1000),
    location: "UVI Innovation Lab, St. Thomas",
    description: "Learn the essentials of starting a business in the US Virgin Islands. Topics include permits, taxes, and local regulations.",
    price: 75,
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/business-team-meeting-in-modern-office-discussing-2025-04-29-18-00-07-utc.jpg",
    status: "scheduled",
    type: "training",
    date: "2025-10-01",
    time: "9:00 AM",
    timezone: "America/St_Thomas",
    place: "UVI Innovation Lab, St. Thomas",
    instructors: [{
      name: "Carlos Bermudez",
      title: "USVI Economic Development Authority Senior Advisor"
    }],
    maxAttendees: 25,
    currentAttendees: 18,
    registrationRequired: true,
    registrationDeadline: "2025-09-29"
  },
  {
    id: "clb-33",
    title: "Another type of event",
    dateStart: Math.floor(new Date('2025-10-01T09:00:00').getTime() / 1000),
    dateEnd: Math.floor(new Date('2025-10-01T12:00:00').getTime() / 1000),
    location: "UVI Innovation Lab, St. Thomas",
    description: "Learn the essentials of starting a business in the US Virgin Islands. Topics include permits, taxes, and local regulations.",
    price: 75,
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/smiling-african-american-female-executive-leading-2025-02-25-00-27-09-utc.jpg",
    status: "scheduled",
    type: "event",
    date: "2025-10-01",
    time: "9:00 AM",
    timezone: "America/St_Thomas",
    place: "UVI Innovation Lab, St. Thomas",
    instructors: [{
      name: "Carlos Bermudez",
      title: "USVI Economic Development Authority Senior Advisor"
    }],
    maxAttendees: 25,
    currentAttendees: 18,
    registrationRequired: true,
    registrationDeadline: "2025-09-29"
  },
  {
    id: "clb-2",
    title: "Tech Training: Digital Marketing for Caribbean Businesses",
    dateStart: Math.floor(new Date('2025-10-03T14:00:00').getTime() / 1000),
    dateEnd: Math.floor(new Date('2025-10-03T17:00:00').getTime() / 1000),
    location: "Charlotte Amalie Community Center, St. Thomas",
    description: "Master social media marketing, Google Ads, and email campaigns specifically for Caribbean tourism and retail businesses.",
    price: 95,
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/business-people-working-in-office-2025-02-21-13-22-15-utc.jpg",
    status: "scheduled",
    type: "training",
    date: "2025-10-03",
    time: "2:00 PM",
    timezone: "America/St_Thomas",
    place: "Charlotte Amalie Community Center, St. Thomas",
    instructors: [{
      name: "Isabella Santos",
      title: "Caribbean Tourism Digital Strategy Consultant"
    }],
    maxAttendees: 30,
    currentAttendees: 22,
    registrationRequired: true,
    registrationDeadline: "2025-10-01"
  },
  {
    id: "clb-3",
    title: "Tourism Industry Consultation Session",
    dateStart: Math.floor(new Date('2025-10-05T10:00:00').getTime() / 1000),
    dateEnd: Math.floor(new Date('2025-10-05T11:30:00').getTime() / 1000),
    location: "Paradise Point Resort, St. Thomas",
    description: "One-on-one consultations for tourism businesses looking to expand or improve their services.",
    price: 150,
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/businessman-and-businesswoman-having-discussion-ar-2024-10-19-05-32-47-utc.jpg",
    status: "scheduled",
    type: "consultation",
    date: "2025-10-05",
    time: "10:00 AM",
    timezone: "America/St_Thomas",
    place: "Paradise Point Resort, St. Thomas",
    instructors: [{
      name: "Victoria Blackwood",
      title: "Luxury Hospitality Operations Director"
    }],
    maxAttendees: 5,
    currentAttendees: 3,
    registrationRequired: true,
    registrationDeadline: "2025-10-03"
  },
  {
    id: "clb-4",
    title: "Coral World Marine Science Workshop",
    dateStart: Math.floor(new Date('2025-10-07T08:30:00').getTime() / 1000),
    dateEnd: Math.floor(new Date('2025-10-07T16:00:00').getTime() / 1000),
    location: "Coral World Ocean Park, St. Thomas",
    description: "Hands-on marine biology workshop including snorkeling, species identification, and conservation techniques.",
    price: 125,
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/group-of-people-sitting-around-table-with-laptops-2025-09-25-14-07-57-utc.jpg",
    status: "scheduled",
    type: "training",
    date: "2025-10-07",
    time: "8:30 AM",
    timezone: "America/St_Thomas",
    place: "Coral World Ocean Park, St. Thomas",
    instructors: [{
      name: "Captain Miguel Fuentes",
      title: "Marine Tourism Operations Expert"
    }, {
      name: "Dr. Amelia Richardson",
      title: "Caribbean Marine Conservation Director"
    }],
    maxAttendees: 15,
    currentAttendees: 12,
    registrationRequired: true,
    registrationDeadline: "2025-10-05"
  },
  {
    id: "clb-5",
    title: "Culinary Arts: Caribbean Fusion Cooking",
    dateStart: Math.floor(new Date('2025-10-09T16:00:00').getTime() / 1000),
    dateEnd: Math.floor(new Date('2025-10-09T19:00:00').getTime() / 1000),
    location: "Frenchtown Community Kitchen, St. Thomas",
    description: "Learn to create modern Caribbean fusion dishes using local ingredients and traditional techniques.",
    price: 85,
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/business-people-working-in-office-2025-02-21-13-22-15-utc.jpg",
    status: "scheduled",
    type: "training",
    date: "2025-10-09",
    time: "4:00 PM",
    timezone: "America/St_Thomas",
    place: "Frenchtown Community Kitchen, St. Thomas",
    instructors: [{
      name: "Chef Lucia St. Clair",
      title: "Virgin Islands Culinary Heritage Specialist"
    }],
    maxAttendees: 12,
    currentAttendees: 8,
    registrationRequired: true,
    registrationDeadline: "2025-10-07"
  },
  {
    id: "clb-6",
    title: "Financial Planning Workshop for Small Business",
    dateStart: Math.floor(new Date('2025-10-12T10:00:00').getTime() / 1000),
    dateEnd: Math.floor(new Date('2025-10-12T13:00:00').getTime() / 1000),
    location: "Red Hook Plaza Conference Room, St. Thomas",
    description: "Learn essential financial planning strategies, budgeting, and investment options specifically for Caribbean small businesses.",
    price: 65,
    imageUrl: "https://pub-23a61d2910624d5082df829f68577f33.r2.dev/business-people-talking-at-the-seminar-2025-02-11-15-39-05-utc.jpg",
    status: "scheduled",
    type: "training",
    date: "2025-10-12",
    time: "10:00 AM",
    timezone: "America/St_Thomas",
    place: "Red Hook Plaza Conference Room, St. Thomas",
    instructors: [{
      name: "Marcus Petersen CPA",
      title: "USVI Tax & Business Finance Advisor"
    }],
    maxAttendees: 20,
    currentAttendees: 14,
    registrationRequired: true,
    registrationDeadline: "2025-10-10"
  }
];

export const mockResources: Resource[] =[
  {
    id: "1",
    name: "nadine", 
    type: "trainer",
  },
]

export const calendars: Calendar[] =[
  {
    id: "1",
    name: "nadine's calendar", 
  },
]


export const mockReviews = {
  average: 4.8,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>The USVI Small Business Startup Workshop gave me exactly what I needed to launch my tourism business. Carlos explained the EDC benefits so clearly - I saved thousands on taxes in my first year!</p>
      `,
      date: "September 15, 2024",
      datetime: "2024-09-15",
      author: "Maria Gonzalez",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Isabella's Caribbean Digital Marketing workshop transformed my charter boat business. My Instagram engagement increased 300% and I'm booked solid through cruise season. Worth every penny!</p>
      `,
      date: "August 22, 2024",
      datetime: "2024-08-22",
      author: "Captain James Baptiste",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 3,
      rating: 5,
      content: `
        <p>Chef Lucia's culinary workshop helped me turn my food truck dream into reality. Learning about local sourcing and resort partnerships was game-changing for my Caribbean fusion menu.</p>
      `,
      date: "July 18, 2024",
      datetime: "2024-07-18",
      author: "Keisha Williams",
      avatarSrc:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
};
export const mockFaqs = [
  {
    question: "What business topics do your workshops cover?",
    answer:
      "Our workshops focus on USVI-specific business opportunities including tourism, culinary ventures, marine ecotourism, digital marketing for Caribbean markets, and leveraging territorial tax benefits like the EDC program.",
  },
  {
    question: "Are the workshops suitable for both beginners and experienced entrepreneurs?",
    answer:
      "Yes. Our instructors tailor content to all experience levels. Beginners learn fundamentals while experienced business owners discover advanced strategies specific to the Caribbean market and USVI regulations.",
  },
  {
    question: "Do I get certificates or credentials after completing workshops?",
    answer:
      "Yes. Most workshops provide completion certificates, and our Tourism Excellence program offers official Caribbean hospitality certification recognized throughout the region.",
  },
  {
    question: "Can I get one-on-one business consulting?",
    answer:
      "Absolutely. We offer personalized consultation sessions, including our premium Luxury Caribbean Hospitality Strategy Sessions for high-end tourism operators.",
  },
];
export const mockLicense = {
  href: "#",
  summary:
    "For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.",
  content: `
    <h4>Overview</h4>
    
    <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>
    
    <ul role="list">
    <li>You\'re allowed to use the icons in unlimited projects.</li>
    <li>Attribution is not required to use the icons.</li>
    </ul>
    
    <h4>What you can do with it</h4>
    
    <ul role="list">
    <li>Use them freely in your personal and professional work.</li>
    <li>Make them your own. Change the colors to suit your project or brand.</li>
    </ul>
    
    <h4>What you can\'t do with it</h4>
    
    <ul role="list">
    <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
    <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
    </ul>
  `,
};
