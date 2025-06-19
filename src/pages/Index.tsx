
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FeatureCards from '../components/FeatureCards';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ParallaxSection from '../components/ParallaxSection';
import CarbonDashboard from '../components/CarbonDashboard';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Increased loading time to show the enhanced loader

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <Features />
        <TestimonialsCarousel />
        <ParallaxSection />
        <CarbonDashboard />
        
        {/* Reports Section */}
        <section id="reports" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Advanced Reporting Suite
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Generate comprehensive reports with real-time data visualization, automated insights, 
              and customizable templates that adapt to your business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Financial Summary', 'Performance Analysis', 'Quarterly Revenue', 'Compliance Report'].map((report, index) => (
                <div
                  key={report}
                  className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{report}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Forecasts Section */}
        <section id="forecasts" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Intelligent Forecasting
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Leverage AI-powered predictive analytics to anticipate market trends, 
              plan budgets, and make strategic decisions with confidence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Revenue Forecast', 'Market Trends', 'Budget Planning', 'Growth Projection'].map((forecast, index) => (
                <div
                  key={forecast}
                  className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{forecast}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consolidations Section */}
        <section id="consolidations" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Data Consolidation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Seamlessly merge data from multiple sources, departments, and regions 
              into unified, actionable business intelligence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Multi-Entity', 'Regional Merge', 'Department Agg.', 'Global Financial'].map((consolidation, index) => (
                <div
                  key={consolidation}
                  className="bg-gradient-to-br from-green-50 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-32 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{consolidation}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
