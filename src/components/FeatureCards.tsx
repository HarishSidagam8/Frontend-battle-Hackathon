
import React, { useState } from 'react';
import { BarChart3, PieChart, TrendingUp, Users, Shield, Zap, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FeatureCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights with our powerful analytics engine that processes millions of data points in real-time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      stats: "99.9% Accuracy",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: PieChart,
      title: "Interactive Dashboards",
      description: "Create stunning, interactive dashboards that make complex data easy to understand and act upon.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      stats: "50+ Templates",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Predictive Forecasting",
      description: "Leverage AI-powered forecasting to predict trends and make data-driven decisions with confidence.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      stats: "95% Prediction Rate",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration tools and shared workspaces.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      stats: "Unlimited Users",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SSO, and compliance with major standards.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      stats: "SOC2 Compliant",
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      icon: Zap,
      title: "Lightning Fast",
      description: "Process and visualize large datasets instantly with our optimized infrastructure.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      stats: "<100ms Response",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const createRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(card.clientWidth, card.clientHeight);
    const radius = diameter / 2;

    const rect = card.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add("ripple");

    const ripple = card.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }

    card.appendChild(circle);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-32 h-32 bg-blue-400 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-400 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Everything you need to transform your data into actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in ripple-container"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={createRipple}
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-80`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm font-semibold">{feature.stats}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <Button
                    variant="ghost"
                    className={`group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 p-0 h-auto font-semibold ${
                      hoveredCard === feature.id ? 'translate-x-2' : ''
                    }`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
