# AulaInfinity - Educational Platform

## What is AulaInfinity?

AulaInfinity is a comprehensive online educational platform designed to empower students and educators through AI-enhanced learning and course management. It provides a dual-role system supporting both students and administrators with tailored experiences.

## Key Features

### For Students
- **Course Management**: Browse and enroll in structured courses organized by level (ESO, Bachillerato, EBAU)
- **Video Learning**: Access organized video content with YouTube integration and downloadable resources
- **AI Tutoring**: Get personalized help from an AI tutor powered by Gemini API with image analysis capabilities
- **Interactive Quizzes**: Test knowledge with video-linked quizzes and track performance
- **Progress Tracking**: Monitor learning progress with detailed analytics and statistics
- **Gamification**: Earn badges and achievements to stay motivated
- **Discussion & Comments**: Engage with course content through comments and community discussion
- **Tutoring Requests**: Request one-on-one tutoring sessions with scheduled availability
- **Agenda Management**: Track important dates, exams, and events
- **Subscription Model**: Access premium content through flexible subscription plans

### For Administrators
- **User Management**: Manage student accounts, subscriptions, and enrollment
- **Content Management**: Create, edit, and organize courses, subjects, and videos
- **Quiz Administration**: Create and manage quizzes linked to video content
- **Student Progress Monitoring**: View detailed analytics on student performance and engagement
- **Request Management**: Handle topic requests and tutoring session scheduling
- **Discussion Moderation**: Moderate comments and manage community interactions
- **Direct Messaging**: Communicate with students directly
- **Configuration**: Manage app settings, pricing, and business settings

## User Experience

### Student Flow
1. **Register/Login** - Create account or sign in
2. **Browse Courses** - Explore available courses by educational level
3. **Watch Videos** - Access video content with context and resources
4. **Take Quizzes** - Test knowledge on watched content
5. **Get AI Help** - Use the intelligent tutor for clarification
6. **Request Tutoring** - Schedule live tutoring sessions
7. **Track Progress** - Monitor learning achievements and statistics

### Admin Flow
1. **Manage Content** - Add/edit courses, subjects, videos, and quizzes
2. **Oversee Users** - Monitor student enrollment and subscriptions
3. **Review Analytics** - Track engagement and performance metrics
4. **Handle Requests** - Respond to tutoring and support requests
5. **Moderate Community** - Manage comments and discussions

## Technical Stack

- **Frontend**: React 19 + TypeScript with Vite for fast development
- **Styling**: Tailwind CSS with dark mode support
- **State Management**: React Context API + React Query for data fetching
- **Internationalization**: Multi-language support (Spanish, English)
- **AI Integration**: Google Gemini API for intelligent tutoring
- **Authentication**: Firebase Authentication with role-based access
- **Database**: Firebase Firestore (production) with in-memory mock for development
- **Routing**: React Router v7 with HashRouter for deployment flexibility
- **Forms**: React Hook Form for efficient form handling
- **Testing**: Vitest + React Testing Library

## Core Concepts

### Content Organization
```
CourseLevel (e.g., ESO, Bachillerato)
  └─ Subject (e.g., Matemáticas, Física)
    └─ VideoBlock (optional grouping)
      └─ Video (with YouTubeLinks, Resources)
        └─ Quiz (associated with video)
```

### Role-Based Access
- **Student Role**: Limited to `/app/*` routes - course browsing, learning, and personal features
- **Admin Role**: Full access to `/admin/*` routes - content and user management
- **Public Access**: Landing page and login available to all

### Real-Time Features
- Live progress updates when students complete videos
- Event-driven architecture for instant notification propagation
- Real-time comment publishing and moderation

## Getting Started

### Prerequisites
- Node.js (latest LTS)
- Gemini API key (for AI tutoring)
- Firebase project setup (for production)

### Quick Start
```bash
# Install dependencies
npm install

# Set up environment
echo "GEMINI_API_KEY=your_key_here" > .env.local

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

### Test Credentials
- **Student**: lucia@example.com / password123
- **Admin**: admin / password

## Deployment

- Hosted on **AI Studio** with automatic deployment pipeline
- Uses **HashRouter** for AI Studio compatibility
- Cloud Functions available for server-side operations (Node 18)
- Production-ready with Firebase integration for persistent data

## Mission

AulaInfinity bridges the gap between traditional education and modern technology, making quality education accessible and engaging through AI-powered personalization, interactive content, and community-driven learning.

