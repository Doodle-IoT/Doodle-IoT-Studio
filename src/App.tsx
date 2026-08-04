/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { QuoteEstimator } from './components/QuoteEstimator';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined);
  const [passedEstimateData, setPassedEstimateData] = useState<{
    platform: string;
    scope: string;
    features: string[];
    priceRange: string;
    weeksRange: string;
  } | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuote = () => {
    scrollToSection('estimator');
  };

  const handleOpenContact = () => {
    scrollToSection('contact');
  };

  const handleServiceSelectedForQuote = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    scrollToSection('contact');
  };

  const handleProjectSelectedForQuote = (projectTitle: string) => {
    setSelectedServiceForQuote(`Project Inquiry: ${projectTitle}`);
    scrollToSection('contact');
  };

  const handleSendEstimateToContact = (estimateData: {
    platform: string;
    scope: string;
    features: string[];
    priceRange: string;
    weeksRange: string;
  }) => {
    setPassedEstimateData(estimateData);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Navigation Header */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenQuote={handleOpenQuote}
          onOpenContact={handleOpenContact}
        />

        <ServicesSection
          onSelectServiceForQuote={handleServiceSelectedForQuote}
        />

        <PortfolioSection
          onSelectProjectForQuote={handleProjectSelectedForQuote}
        />

        <QuoteEstimator
          onSendEstimateToContact={handleSendEstimateToContact}
          preselectedService={selectedServiceForQuote}
        />

        <ProcessSection />

        <TestimonialsSection />

        <AboutSection />

        <FAQSection />

        <ContactSection
          initialService={selectedServiceForQuote}
          initialEstimate={passedEstimateData}
        />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
