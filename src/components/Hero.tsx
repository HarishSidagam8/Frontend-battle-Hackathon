
import React, { useState, useEffect } from 'react';
import { Star, Play, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

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

        {/* Main heading */}
        <div className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Create reports, forecasts,
            <br />
            dashboards & consolidations
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
