import { ServiceItem, PortfolioProject, Testimonial, FAQItem, ProcessStep } from '../types';

export const COMPANY_STATS = [
  { label: 'Apps & Websites Delivered', value: '140+', highlight: '100% Client Code Ownership' },
  { label: 'Client Satisfaction Rating', value: '4.9/5', highlight: 'Based on 90+ Verified Reviews' },
  { label: 'Average Sprint Speed', value: '2x', highlight: 'Faster Than Traditional Agencies' },
  { label: 'Global Clients Served', value: '18+', highlight: 'US, UK, Europe, Singapore, Asia' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Custom Web Application Development',
    badge: 'Core Specialty',
    shortDesc: 'High-speed, conversion-focused web applications built with React, Next.js, and modern serverless backends.',
    fullDesc: 'We engineer bespoke web applications designed for extreme speed, search engine visibility, and seamless conversion. From complex SaaS dashboards to high-traffic client portals, every line of code is optimized for reliability.',
    iconName: 'Globe',
    deliverables: [
      'Responsive React/Next.js SPA or SSR App',
      'Custom Design System & Component Library',
      'API Integration & Serverless Cloud Functions',
      'SEO Optimization & Performance Audit',
      'Admin Control Panel & Content Management'
    ],
    techStack: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL', 'PostgreSQL'],
    avgTimeline: '3 - 6 Weeks'
  },
  {
    id: 'mobile-apps',
    title: 'iOS & Android Mobile App Development',
    badge: 'Popular',
    shortDesc: 'Native & cross-platform mobile apps featuring 60fps animations, offline sync, and intuitive touch UX.',
    fullDesc: 'We turn app concepts into top-tier App Store and Google Play applications. Utilizing React Native and Flutter, we deliver native-feeling experiences with a single clean codebase that cuts time-to-market in half.',
    iconName: 'Smartphone',
    deliverables: [
      'Cross-Platform iOS & Android Codebase',
      'Offline Storage & Background Sync',
      'Push Notification Architecture',
      'App Store & Play Store Publishing Support',
      'Biometric Authentication & In-App Purchases'
    ],
    techStack: ['React Native', 'Expo', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'SQLite'],
    avgTimeline: '4 - 8 Weeks'
  },
  {
    id: 'iot-software',
    title: 'IoT & Telemetry Dashboards',
    badge: 'Niche Expertise',
    shortDesc: 'Real-time telemetry software, sensor monitoring web platforms, and smart device control applications.',
    fullDesc: 'Living up to our Doodle IoT heritage, we build low-latency WebSocket dashboards and mobile apps that interface directly with hardware sensors, MQTT brokers, and cloud telemetry streams.',
    iconName: 'Cpu',
    deliverables: [
      'Real-Time WebSocket & MQTT Data Streams',
      'Interactive Live Charts (D3 / Canvas)',
      'Device Fleet Management Portal',
      'Alerting Engine & SMS/Email Webhooks',
      'Low-Power Bluetooth (BLE) Mobile Pairing'
    ],
    techStack: ['WebSockets', 'MQTT', 'Node.js', 'D3.js', 'TimescaleDB', 'Docker', 'AWS IoT Core'],
    avgTimeline: '5 - 9 Weeks'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Interactive Product Design',
    badge: 'Design First',
    shortDesc: 'User-centered design systems, interactive prototypes, and high-contrast dark/light visual identity.',
    fullDesc: 'Before writing code, we map out intuitive user flows, perform visual wireframing, and construct pixel-perfect Figma prototypes. We focus on usability metrics, accessibility (WCAG AA), and micro-interactions.',
    iconName: 'Layout',
    deliverables: [
      'Interactive Figma Clickable Prototype',
      'Full Component UI Kit & Tokens',
      'User Journey Mapping & Wireframes',
      'Micro-animations & Lottie Assets',
      'Developer Handoff Specifications'
    ],
    techStack: ['Figma', 'Framer', 'Lottie', 'Storybook', 'Tailwind CSS'],
    avgTimeline: '2 - 4 Weeks'
  },
  {
    id: 'api-backend',
    title: 'Cloud Backend & API Infrastructure',
    badge: 'Scalability',
    shortDesc: 'Robust RESTful & GraphQL microservices, database architecture, and serverless infrastructure.',
    fullDesc: 'A powerful app needs an ironclad backend. We architect high-concurrency APIs, configure automated database migrations, set up OAuth authentication, and ensure zero-downtime deployments.',
    iconName: 'Server',
    deliverables: [
      'Scalable Node.js / Python API Gateway',
      'Database Schema Design & Indexing',
      'OAuth 2.0 / JWT User Authentication',
      'CI/CD Automated Deployment Pipelines',
      'Third-Party Payment & Webhook Integrations'
    ],
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'Cloud Run', 'Stripe API'],
    avgTimeline: '3 - 6 Weeks'
  },
  {
    id: 'mvp-launchpad',
    title: 'Rapid Startup MVP Development',
    badge: 'Fast-Track',
    shortDesc: 'Turn startup ideas into launch-ready functional web & mobile products in under 30 days.',
    fullDesc: 'Designed specifically for founders seeking seed funding or rapid market validation. We trim feature bloat to focus on core value propositions, building an investor-ready MVP at sprint speed.',
    iconName: 'Zap',
    deliverables: [
      'Production-Ready MVP Application',
      'User Registration & Payment Collection',
      'Product Analytics Setup (Mixpanel / PostHog)',
      'Source Code & Deployment Handover',
      '30-Day Post-Launch Bug Warranty'
    ],
    techStack: ['Vite', 'React', 'Node.js', 'Tailwind', 'Supabase / Firebase'],
    avgTimeline: '2 - 4 Weeks'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'aurapulse-iot',
    title: 'AuraPulse IoT Health & Telemetry',
    category: 'iot',
    client: 'AuraTech Bio Inc.',
    tagline: 'Real-time telemetry mobile application & live sensor cloud platform',
    summary: 'A continuous vital tracking application paired with a web telemetry dashboard monitoring 500+ active IoT heart rate and biometric nodes.',
    challenge: 'The client needed to visualize high-frequency sensor streams (100 Hz) without freezing the mobile UI or dropping WebSocket connections.',
    solution: 'Engineered a React Native app paired with a D3 WebGL canvas web portal utilizing binary WebSocket decoding and local SQLite buffer caching.',
    impactMetrics: [
      { label: 'Latency', value: '< 15ms' },
      { label: 'Active Devices', value: '12,000+' },
      { label: 'Data Processing', value: '50M events/day' }
    ],
    tags: ['React Native', 'WebSockets', 'D3.js', 'IoT Telemetry', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Live Bluetooth Low Energy (BLE) device pairing',
      'Real-time heartbeat waveform visualization',
      'Automated threshold alert notifications via FCM',
      'Exportable HIPAA-compliant PDF clinical reports'
    ],
    deviceType: 'both'
  },
  {
    id: 'nexisflow-saas',
    title: 'NexisFlow Enterprise B2B SaaS',
    category: 'web',
    client: 'Nexis Systems',
    tagline: 'Collaborative team workflow & automated document engine',
    summary: 'A multi-tenant web application featuring real-time document collaboration, Kanban milestone tracking, and dynamic PDF generation.',
    challenge: 'Existing legacy portal was slow, taking 8+ seconds to load complex team workspaces.',
    solution: 'Rebuilt the frontend using Next.js 14 and Vite with server-side caching and virtualized data grids, reducing page load to under 400ms.',
    impactMetrics: [
      { label: 'Page Speed Improvement', value: '95%' },
      { label: 'User Retention', value: '+42%' },
      { label: 'Monthly Active Teams', value: '8,500+' }
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Drag-and-drop workspace Kanban boards',
      'Multi-user live cursor co-editing',
      'Custom role-based permissions (RBAC)',
      'Automated Stripe recurring subscription billing'
    ],
    deviceType: 'desktop'
  },
  {
    id: 'veloce-ecommerce',
    title: 'Veloce Headless Mobile App & Store',
    category: 'mobile',
    client: 'Veloce Apparel Co.',
    tagline: 'Ultra-fast iOS & Android e-commerce application with AR product preview',
    summary: 'A premium mobile shopping experience for an international fashion brand featuring 1-tap Apple/Google Pay and 3D product previews.',
    challenge: 'High cart abandonment rates on mobile web due to slow checkout steps and laggy image carousels.',
    solution: 'Created a cross-platform React Native app with native gesture animations, preloaded media assets, and zero-friction Apple Pay integration.',
    impactMetrics: [
      { label: 'Checkout Conversion', value: '+34%' },
      { label: 'App Store Rating', value: '4.9 ⭐' },
      { label: 'Avg Order Value', value: '$148' }
    ],
    tags: ['React Native', 'Shopify Storefront API', 'Tailwind', 'Apple Pay'],
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    features: [
      '1-tap Apple Pay and Google Wallet checkout',
      'Personalized AI recommendation feed',
      'Instant push notifications for flash sales',
      'Interactive 3D garment inspection'
    ],
    deviceType: 'mobile'
  },
  {
    id: 'pulsedrive-telemetry',
    title: 'PulseDrive Fleet Monitoring Portal',
    category: 'iot',
    client: 'LogiPulse Global',
    tagline: 'GPS vehicle fleet tracking & driver safety telemetry software',
    summary: 'A comprehensive map-based web portal tracking over 2,000 commercial vehicles in real time with automated geofencing.',
    challenge: 'Visualizing thousands of moving vehicles smoothly on interactive maps without degrading browser performance.',
    solution: 'Developed a custom vector map layer with dynamic marker clustering and hardware-accelerated rendering.',
    impactMetrics: [
      { label: 'Fleet Managed', value: '2,400 Vehicles' },
      { label: 'Fuel Savings', value: '18%' },
      { label: 'Uptime', value: '99.99%' }
    ],
    tags: ['React', 'Google Maps API', 'IoT Hardware API', 'Express', 'Redis'],
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Sub-second GPS vehicle position updates',
      'Geofence boundary breach instant alerts',
      'Driver behavior scoring & fuel efficiency analytics',
      'Historical route replay timeline'
    ],
    deviceType: 'desktop'
  },
  {
    id: 'mindfulzen-app',
    title: 'MindfulZen Daily Wellness App',
    category: 'mobile',
    client: 'Zenith Labs',
    tagline: 'Offline-first meditation & audio sleep story iOS & Android application',
    summary: 'A serene mobile app providing guided breathing routines, customized ambient sound generators, and daily streak tracking.',
    challenge: 'Ensuring total functionality even when users are offline during flights or outdoor retreats.',
    solution: 'Implemented an offline-first SQLite cache architecture with background audio synthesis and local notification scheduling.',
    impactMetrics: [
      { label: 'Downloads', value: '85,000+' },
      { label: 'Daily Retention', value: '68%' },
      { label: 'User Rating', value: '4.9 ⭐' }
    ],
    tags: ['React Native', 'Audio Synthesizer', 'SQLite', 'Expo', 'Zustand'],
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Interactive diaphragmatic breathing visualizer',
      'Custom soundscape mixer with 20+ ambient tracks',
      'Haptic feedback guided meditation timer',
      'Encrypted local mood journal'
    ],
    deviceType: 'mobile'
  },
  {
    id: 'estatesphere-portal',
    title: 'EstateSphere Luxury Real Estate Portal',
    category: 'web',
    client: 'Sphere Realty Group',
    tagline: 'High-end property discovery platform with virtual tours & lead routing',
    summary: 'A fast, visually immersive web portal enabling prospective buyers to filter high-end luxury listings and schedule live walkthroughs.',
    challenge: 'Heavy high-res images and 4K property walkthrough video tours caused slow initial page renders.',
    solution: 'Utilized adaptive image delivery, progressive blur-up placeholders, and lazy-loaded WebGL 360 viewer components.',
    impactMetrics: [
      { label: 'Inquiries Generated', value: '+185%' },
      { label: 'Avg Session Time', value: '4m 20s' },
      { label: 'Page Load Speed', value: '0.8s' }
    ],
    tags: ['React 19', 'Tailwind CSS', 'Mapbox', 'Node.js', 'Cloudinary'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Interactive 360° virtual property room tours',
      'Map-based neighborhood school & amenities filter',
      'Mortgage calculation & instant agent booking',
      'Automated client CRM lead distribution'
    ],
    deviceType: 'desktop'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Product Architecture',
    subtitle: 'Blueprint & Strategy',
    description: 'We align on your business goals, target audience, and technical requirements. We map out screen architecture, user flows, and backend database schemas.',
    details: [
      'Requirement gathering & technical scoping call',
      'Database schema & API endpoint architecture',
      'Competitive landscape analysis & UX audit',
      'Fixed-price milestone agreement & transparent roadmap'
    ],
    deliverable: 'Technical Scope Document & Wireframe Blueprint'
  },
  {
    step: 2,
    title: 'UI/UX & Interactive Prototyping',
    subtitle: 'Pixel-Perfect Design',
    description: 'Our design team crafts high-fidelity UI mockups and click-through Figma prototypes. You test and refine the interface before code is written.',
    details: [
      'Custom design system (typography, colors, UI tokens)',
      'Desktop & mobile responsive UI screen design',
      'Clickable prototype for stakeholder testing',
      'Design review iterations until 100% satisfied'
    ],
    deliverable: 'Approved High-Fidelity Figma Design System'
  },
  {
    step: 3,
    title: 'Agile Engineering & Weekly Demos',
    subtitle: 'Clean Code Sprints',
    description: 'We build your application in 1-week sprints using modern stack best practices. You receive live preview links every Friday to test progress.',
    details: [
      'Modular React / React Native / Node.js development',
      'Unit & end-to-end automated testing',
      'Secure API proxying & environment management',
      'Weekly interactive staging demos for real feedback'
    ],
    deliverable: 'Staging Environment & Weekly Working Builds'
  },
  {
    step: 4,
    title: 'Launch, Code Handover & Post-Launch Support',
    subtitle: 'Zero-Downtime Deployment',
    description: 'We deploy your app to Cloud Run, Vercel, App Store, or Play Store. We deliver complete source code repository ownership and provide post-launch SLA coverage.',
    details: [
      'Production environment & domain SSL configuration',
      'App Store & Google Play publishing management',
      'Complete Git repository & IP transfer',
      '30-day bug warranty & maintenance options'
    ],
    deliverable: 'Live Production App & Full Source Code Ownership'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Vance',
    role: 'Co-Founder & CTO',
    company: 'AuraTech Bio',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Doodle IoT took our complex hardware telemetry concept and turned it into a breathtaking, rock-solid React Native app in just 6 weeks. Our investors were blown away by the live WebSocket speed.',
    projectType: 'IoT Mobile & Cloud Dashboard',
    rating: 5
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: 'Head of Product',
    company: 'Nexis Systems',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    content: 'Working with Doodle IoT felt like hiring an elite internal product team. Their attention to pixel precision, clean TypeScript architecture, and proactive communication set a new standard.',
    projectType: 'Enterprise Web Application',
    rating: 5
  },
  {
    id: 't3',
    name: 'David Chen',
    role: 'Founder & CEO',
    company: 'Veloce Apparel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Our mobile app conversion jumped 34% within 2 weeks of launching the new React Native app built by Doodle IoT. Best decision we made for our e-commerce business this year.',
    projectType: 'iOS & Android Mobile App',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How much does a custom website or mobile app cost?',
    answer: 'Our custom web projects generally start from $2,500 for rapid landing pages/MVPs up to $12,000+ for complex enterprise SaaS platforms. Mobile applications typically range between $4,500 and $15,000 depending on features (e.g., real-time IoT sync, payments, offline support). You can use our interactive Project Cost Estimator below to calculate an instant quote!',
    category: 'pricing'
  },
  {
    id: 'faq-2',
    question: 'Do I own the source code and intellectual property (IP)?',
    answer: 'Yes, 100%! Upon project completion and final milestone payout, full ownership of all source code, design assets, database schemas, and IP rights are transferred directly to you. We provide complete GitHub repository transfer.',
    category: 'general'
  },
  {
    id: 'faq-3',
    question: 'How long does it take to complete a project?',
    answer: 'Typical turnaround times: Rapid MVP / Web Apps take 3 to 5 weeks. Full-featured Mobile Apps (iOS + Android) take 5 to 8 weeks. Complex IoT Telemetry systems take 6 to 10 weeks. We work in 1-week sprints with weekly live demos.',
    category: 'process'
  },
  {
    id: 'faq-4',
    question: 'What tech stack does Doodle IoT specialize in?',
    answer: 'We specialize in modern full-stack development: Frontend (React 19, Next.js, Vite, Tailwind CSS), Mobile (React Native, Expo, Flutter), Backend (Node.js, Express, Python, WebSockets, GraphQL), and Cloud (Docker, PostgreSQL, Cloud Run, Firebase, AWS IoT).',
    category: 'tech'
  },
  {
    id: 'faq-5',
    question: 'Can you help with app maintenance and updates after launch?',
    answer: 'Absolutely. Every project includes a complimentary 30-day post-launch warranty for bug fixes and monitoring. We also offer ongoing monthly maintenance SLAs for continuous updates, server management, and feature additions.',
    category: 'process'
  },
  {
    id: 'faq-6',
    question: 'How do we get started with Doodle IoT?',
    answer: 'Simply fill out our contact form or click "Get Instant Quote". We will reach out within 2 hours to schedule a free 15-minute technical discovery call and deliver a detailed scope proposal within 24 hours.',
    category: 'general'
  }
];
