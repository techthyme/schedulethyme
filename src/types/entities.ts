
// =============================================================================
// CORE USER ENTITIES
// =============================================================================

export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    profilePicture?: string;
    businessType?: BusinessType;
    interests: Interest[];
    role: UserRole;
    isEmailVerified: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserProfile {
    userId: string;
    bio?: string;
    company?: string;
    website?: string;
    socialLinks: SocialLink[];
    preferences: UserPreferences;
}

export interface SocialLink {
    platform: 'twitter' | 'linkedin' | 'instagram' | 'facebook' | 'website';
    url: string;
}

export interface UserPreferences {
    emailNotifications: boolean;
    smsNotifications: boolean;
    reminderSettings: ReminderSettings;
    timezone: string;
    language: string;
}

export interface ReminderSettings {
    spaceBooking: {
        enabled: boolean;
        reminderTimes: number[]; // minutes before event
    };
    training: {
        enabled: boolean;
        reminderTimes: number[];
    };
    consulting: {
        enabled: boolean;
        reminderTimes: number[];
    };
}

// =============================================================================
// AUTHENTICATION & PERMISSIONS
// =============================================================================

export interface Permission {
    id: string;
    name: string;
    resource: string;
    action: 'create' | 'read' | 'update' | 'delete' | 'admin';
    scope?: string;
}

export interface Role {
    id: string;
    name: UserRole;
    description: string;
    permissions: Permission[];
    isSystem: boolean;
}

// =============================================================================
// SPACE BOOKING ENTITIES
// =============================================================================

export interface Space {
    id: string;
    name: string;
    description: string;
    type: SpaceType;
    capacity: number;
    size: number; // in sqft
    amenities: Amenity[];
    location: Location;
    images: string[];
    pricePerHour: number;
    isActive: boolean;
    availabilityRules: AvailabilityRule[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Amenity {
    id: string;
    name: string;
    description?: string;
    icon?: string;
}

export interface Location {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
}

export interface AvailabilityRule {
    id: string;
    dayOfWeek: number; // 0-6, Sunday to Saturday
    startTime: string; // HH:mm format
    endTime: string;
    isAvailable: boolean;
}

export interface SpaceBooking {
    id: string;
    userId: string;
    user: User;
    spaceId: string;
    space: Space;
    startTime: Date;
    endTime: Date;
    purpose: string;
    estimatedAttendees: number;
    specialRequirements?: string;
    status: BookingStatus;
    totalCost: number;
    paymentStatus: PaymentStatus;
    createdAt: Date;
    updatedAt: Date;
    cancelledAt?: Date;
    cancellationReason?: string;
}

// =============================================================================
// TRAINING ENTITIES
// =============================================================================

export interface Training {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    category: TrainingCategory;
    deliveryMethod: DeliveryMethod;
    instructorId: string;
    instructor: Instructor;
    duration: number; // in minutes
    capacity: number;
    prerequisites?: string;
    targetAudience: string;
    materials: TrainingMaterial[];
    price: number;
    isActive: boolean;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface TrainingSession {
    id: string;
    trainingId: string;
    training: Training;
    startTime: Date;
    endTime: Date;
    location?: string; // for in-person sessions
    meetingLink?: string; // for online sessions
    spaceId?: string; // if using internal space
    space?: Space;
    status: SessionStatus;
    registrations: TrainingRegistration[];
    waitlist: TrainingWaitlist[];
    maxCapacity: number;
    actualAttendees?: number;
    feedback: SessionFeedback[];
    createdAt: Date;
    updatedAt: Date;
}

export interface TrainingRegistration {
    id: string;
    userId: string;
    user: User;
    trainingSessionId: string;
    trainingSession: TrainingSession;
    registrationDate: Date;
    status: RegistrationStatus;
    paymentStatus: PaymentStatus;
    attended: boolean;
    feedback?: string;
    rating?: number; // 1-5
    certificateIssued?: boolean;
}

export interface TrainingWaitlist {
    id: string;
    userId: string;
    user: User;
    trainingSessionId: string;
    trainingSession: TrainingSession;
    position: number;
    addedAt: Date;
    notified: boolean;
}

export interface TrainingRequest {
    id: string;
    userId: string;
    user: User;
    topic: string;
    description: string;
    preferredFormat: DeliveryMethod;
    estimatedParticipants: number;
    urgency: 'low' | 'medium' | 'high';
    status: 'pending' | 'under_review' | 'approved' | 'rejected' | 'completed';
    adminNotes?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface TrainingMaterial {
    id: string;
    name: string;
    type: 'document' | 'video' | 'link' | 'image';
    url: string;
    description?: string;
    isRequired: boolean;
}

export interface Instructor {
    id: string;
    userId: string;
    user: User;
    bio: string;
    credentials: string[];
    specialties: TrainingCategory[];
    experience: string;
    rating: number;
    totalTrainings: number;
    isVerified: boolean;
    availability: InstructorAvailability[];
    createdAt: Date;
    updatedAt: Date;
}

export interface InstructorAvailability {
    id: string;
    instructorId: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
    timezone: string;
}

// =============================================================================
// CONSULTING ENTITIES
// =============================================================================

export interface Consultant {
    id: string;
    userId: string;
    user: User;
    bio: string;
    expertise: ExpertiseArea[];
    credentials: string[];
    experience: string;
    hourlyRate: number;
    rating: number;
    totalConsultations: number;
    isVerified: boolean;
    availabilityType: ('online' | 'in-person' | 'both')[];
    availability: ConsultantAvailability[];
    createdAt: Date;
    updatedAt: Date;
}

export interface ConsultantAvailability {
    id: string;
    consultantId: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    sessionTypes: ConsultationDuration[];
    isAvailable: boolean;
    timezone: string;
}

export interface ConsultingAppointment {
    id: string;
    userId: string;
    user: User;
    consultantId: string;
    consultant: Consultant;
    startTime: Date;
    endTime: Date;
    duration: ConsultationDuration;
    type: 'online' | 'in-person' | 'phone';
    meetingLink?: string;
    location?: string;
    description: string;
    needs: string;
    status: AppointmentStatus;
    totalCost: number;
    paymentStatus: PaymentStatus;
    notes?: string;
    followUpRequired: boolean;
    createdAt: Date;
    updatedAt: Date;
    completedAt?: Date;
}

// =============================================================================
// COMMUNICATION ENTITIES
// =============================================================================

export interface Message {
    id: string;
    senderId: string;
    sender: User;
    recipientId: string;
    recipient: User;
    threadId: string;
    content: string;
    attachments: MessageAttachment[];
    isRead: boolean;
    readAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface MessageThread {
    id: string;
    participants: User[];
    relatedEntityType: 'space_booking' | 'training' | 'consulting';
    relatedEntityId: string;
    lastMessage?: Message;
    lastActivityAt: Date;
    createdAt: Date;
}

export interface MessageAttachment {
    id: string;
    filename: string;
    originalName: string;
    mimeType: string;
    size: number;
    url: string;
}

export interface Notification {
    id: string;
    userId: string;
    user: User;
    type: NotificationType;
    title: string;
    content: string;
    relatedEntityType?: string;
    relatedEntityId?: string;
    isRead: boolean;
    readAt?: Date;
    scheduledFor?: Date;
    sentAt?: Date;
    createdAt: Date;
}

// =============================================================================
// FEEDBACK & REVIEWS
// =============================================================================

export interface SessionFeedback {
    id: string;
    userId: string;
    user: User;
    sessionId: string;
    sessionType: 'training' | 'consulting';
    rating: number; // 1-5
    feedback: string;
    wouldRecommend: boolean;
    createdAt: Date;
}

export interface SpaceFeedback {
    id: string;
    userId: string;
    user: User;
    spaceId: string;
    space: Space;
    bookingId: string;
    rating: number; // 1-5
    feedback: string;
    wouldRecommend: boolean;
    createdAt: Date;
}

// =============================================================================
// PAYMENT ENTITIES
// =============================================================================

export interface Payment {
    id: string;
    userId: string;
    user: User;
    amount: number;
    currency: string;
    paymentMethod: PaymentMethod;
    relatedEntityType: 'space_booking' | 'training' | 'consulting';
    relatedEntityId: string;
    status: PaymentStatus;
    stripePaymentIntentId?: string;
    failureReason?: string;
    refundedAmount?: number;
    refundedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface PaymentMethod {
    id: string;
    userId: string;
    type: 'card' | 'bank_account' | 'paypal';
    last4?: string;
    brand?: string;
    isDefault: boolean;
    stripePaymentMethodId: string;
    createdAt: Date;
}

// =============================================================================
// ANALYTICS & REPORTING
// =============================================================================

export interface UsageAnalytics {
    id: string;
    userId?: string;
    eventType: AnalyticsEvent;
    entityType?: string;
    entityId?: string;
    metadata?: Record<string, unknown>;
    timestamp: Date;
    ipAddress?: string;
    userAgent?: string;
}

// =============================================================================
// ENUMS & CONSTANTS
// =============================================================================

export enum UserRole {
    USER = 'user',
    TRAINER = 'trainer',
    CONSULTANT = 'consultant',
    ADMIN = 'admin',
    SUPER_ADMIN = 'super_admin'
}

export enum BusinessType {
    FOOD_SERVICE = 'food_service',
    TECHNOLOGY = 'technology',
    AGRICULTURE = 'agriculture',
    CONSULTING = 'consulting',
    EDUCATION = 'education',
    HEALTHCARE = 'healthcare',
    RETAIL = 'retail',
    MANUFACTURING = 'manufacturing',
    OTHER = 'other'
}

export enum Interest {
    FOOD = 'food',
    TECHNOLOGY = 'technology',
    BUSINESS = 'business',
    AGRICULTURE = 'agriculture',
    MARKETING = 'marketing',
    FINANCE = 'finance',
    OPERATIONS = 'operations',
    LEADERSHIP = 'leadership'
}

export enum SpaceType {
    KITCHEN = 'kitchen',
    COLLABORATION = 'collaboration',
    TRAINING_ROOM = 'training_room',
    MEETING_ROOM = 'meeting_room',
    OFFICE = 'office',
    WORKSHOP = 'workshop'
}

export enum BookingStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled',
    NO_SHOW = 'no_show'
}

export enum PaymentStatus {
    PENDING = 'pending',
    PROCESSING = 'processing',
    COMPLETED = 'completed',
    FAILED = 'failed',
    REFUNDED = 'refunded',
    PARTIALLY_REFUNDED = 'partially_refunded'
}

export enum TrainingCategory {
    FOOD_INDUSTRY = 'food_industry',
    BUSINESS_DEVELOPMENT = 'business_development',
    TECHNOLOGY = 'technology',
    AGRICULTURE = 'agriculture',
    MARKETING = 'marketing',
    FINANCE = 'finance',
    LEADERSHIP = 'leadership',
    OPERATIONS = 'operations',
    HYBRID = 'hybrid'
}

export enum DeliveryMethod {
    ONLINE = 'online',
    IN_PERSON = 'in_person',
    HYBRID = 'hybrid'
}

export enum SessionStatus {
    SCHEDULED = 'scheduled',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled',
    POSTPONED = 'postponed'
}

export enum RegistrationStatus {
    REGISTERED = 'registered',
    CONFIRMED = 'confirmed',
    CANCELLED = 'cancelled',
    WAITLISTED = 'waitlisted',
    ATTENDED = 'attended',
    NO_SHOW = 'no_show'
}

export enum ExpertiseArea {
    BUSINESS_STRATEGY = 'business_strategy',
    MARKETING = 'marketing',
    FINANCE = 'finance',
    OPERATIONS = 'operations',
    TECHNOLOGY = 'technology',
    FOOD_INDUSTRY = 'food_industry',
    AGRICULTURE = 'agriculture',
    LEADERSHIP = 'leadership',
    LEGAL = 'legal',
    HR = 'hr'
}

export enum ConsultationDuration {
    THIRTY_MINUTES = 30,
    ONE_HOUR = 60,
    TWO_HOURS = 120,
    HALF_DAY = 240,
    FULL_DAY = 480
}

export enum AppointmentStatus {
    SCHEDULED = 'scheduled',
    CONFIRMED = 'confirmed',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled',
    RESCHEDULED = 'rescheduled',
    NO_SHOW = 'no_show'
}

export enum NotificationType {
    BOOKING_CONFIRMATION = 'booking_confirmation',
    BOOKING_REMINDER = 'booking_reminder',
    BOOKING_CANCELLED = 'booking_cancelled',
    TRAINING_REGISTRATION = 'training_registration',
    TRAINING_REMINDER = 'training_reminder',
    TRAINING_CANCELLED = 'training_cancelled',
    WAITLIST_OPENING = 'waitlist_opening',
    APPOINTMENT_CONFIRMATION = 'appointment_confirmation',
    APPOINTMENT_REMINDER = 'appointment_reminder',
    APPOINTMENT_CANCELLED = 'appointment_cancelled',
    MESSAGE_RECEIVED = 'message_received',
    PAYMENT_SUCCESS = 'payment_success',
    PAYMENT_FAILED = 'payment_failed',
    SYSTEM_ANNOUNCEMENT = 'system_announcement'
}

export enum AnalyticsEvent {
    USER_REGISTERED = 'user_registered',
    USER_LOGIN = 'user_login',
    SPACE_VIEWED = 'space_viewed',
    SPACE_BOOKED = 'space_booked',
    TRAINING_VIEWED = 'training_viewed',
    TRAINING_REGISTERED = 'training_registered',
    CONSULTANT_VIEWED = 'consultant_viewed',
    APPOINTMENT_BOOKED = 'appointment_booked',
    PAYMENT_INITIATED = 'payment_initiated',
    SEARCH_PERFORMED = 'search_performed'
}