export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  deliverables: string[];
  techStack: string[];
  avgTimeline: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'fullstack' | 'iot';
  client: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
  imageUrl: string;
  features: string[];
  liveUrl?: string;
  deviceType: 'desktop' | 'mobile' | 'both';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  projectType: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'process' | 'pricing' | 'tech';
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  deliverable: string;
}

export interface QuoteSelection {
  platform: 'web' | 'mobile' | 'both' | 'iot_fullstack';
  scope: 'mvp' | 'standard' | 'enterprise';
  features: string[];
  timeline: 'rush' | 'standard' | 'flexible';
  designLevel: 'essential' | 'custom' | 'premium_3d';
}

export interface EstimatedQuote {
  minPrice: number;
  maxPrice: number;
  minWeeks: number;
  maxWeeks: number;
  summary: string[];
}
