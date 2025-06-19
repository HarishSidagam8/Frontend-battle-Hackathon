
import React, { useState, useEffect } from 'react';
import { Star, Play, Sparkles, FileText, BarChart3, PieChart, Grid3x3 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const ratings = [
    { platform: 'Capterra', rating: '4.8', reviews: null },
    { platform: 'G2', rating: '4.8', reviews: null },
    { platform: 'Gartner', rating: '350+', reviews: 'reviews' },
    { platform: 'TrustRadius', rating: '550+', reviews: 'reviews' }
  ];

  const interactiveWords = {
    reports: {
      icon: FileText,
      preview: [
        'Financial Summary Report',
        'Monthly Performance Analysis',
        'Quarterly Revenue Report',
        'Annual Compliance Report'
      ]
    },
    forecasts: {
      icon: BarChart3,
      preview: [
        'Revenue Forecast 2024',
        'Market Trend Predictions',
        'Budget Planning Forecast',
        'Growth Projection Analysis'
      ]
    },
    dashboards: {
      icon: PieChart,
      preview: [
        'Executive Dashboard',
        'Operations Overview',
        'Sales Performance',
        'Customer Analytics'
      ]
    },
    consolidations: {
      icon: Grid3x3,
      preview: [
        'Multi-Entity Consolidation',
        'Regional Data Merge',
        'Department Aggregation',
        'Global Financial Consolidation'
      ]
    }
  };

  const InteractiveWord = ({ word, children }: { word: string; children: React.ReactNode }) => {
    const wordData = interactiveWords[word as keyof typeof interactiveWords];
    const IconComponent = wordData?.icon;
    const isActive = activeHover === word;

    return (
      <span
        className="relative inline-block"
        onMouseEnter={() => setActiveHover(word)}
        onMouseLeave={() => setActiveHover(null)}
      >
        <span
          className={`relative cursor-pointer transition-all duration-300 ${
            isActive 
              ? 'text-blue-300 bg-white/10 px-2 py-1 rounded-lg shadow-lg scale-105' 
              : 'hover:text-blue-200'
          }`}
        >
          {children}
          {isActive && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-300 rounded-full"></span>
          )}
        </span>
        
        {isActive && wordData && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 animate-fade-in z-20">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 rotate-45"></div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg flex items-center">
              <IconComponent className="w-5 h-5 mr-2 text-blue-600" />
              {word.charAt(0).toUpperCase() + word.slice(1)}
            </h3>
            <ul className="space-y-2">
              {wordData.preview.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-all duration-200 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
              <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                View All {word.charAt(0).toUpperCase() + word.slice(1)} →
              </button>
            </div>
          </div>
        )}
      </span>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-300 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Rating badges */}
        <div className={`flex flex-wrap justify-center gap-6 mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {ratings.map((rating, index) => (
            <div
              key={rating.platform}
              className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">
                {rating.rating} {rating.reviews ? `${rating.reviews} on` : 'rating on'} {rating.platform}
              </span>
            </div>
          ))}
        </div>

        {/* Main heading with interactive words */}
        <div className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Create <InteractiveWord word="reports">reports</InteractiveWord>, <InteractiveWord word="forecasts">forecasts</InteractiveWord>,
            <br />
            <InteractiveWord word="dashboards">dashboards</InteractiveWord> & <InteractiveWord word="consolidations">consolidations</InteractiveWord>
          </h1>
        </div>

        {/* AI insights badge */}
        <div className={`inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
          <span className="text-white font-medium">Now with AI-insights</span>
        </div>

        {/* CTA buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg transition-all duration-200 hover:scale-105"
          >
            Start 14-day free trial
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg flex items-center"
          >
            <Play className="w-5 h-5 mr-2" />
            See what we do
          </Button>
        </div>

        {/* Dashboard preview mockup */}
        <div className={`mt-16 relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mock chart 1 */}
              <div className="bg-white/20 rounded-lg p-4 h-32">
                <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded opacity-70"></div>
              </div>
              
              {/* Mock chart 2 */}
              <div className="bg-white/20 rounded-lg p-4 h-32">
                <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded opacity-70"></div>
              </div>
              
              {/* Mock chart 3 */}
              <div className="bg-white/20 rounded-lg p-4 h-32">
                <div className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
