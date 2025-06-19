
import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Active Users",
      description: "Companies trust our platform"
    },
    {
      icon: TrendingUp,
      number: "500M+",
      label: "Data Points",
      description: "Processed monthly"
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries",
      description: "Worldwide presence"
    },
    {
      icon: Award,
      number: "99.9%",
      label: "Uptime",
      description: "Reliable service"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-indigo-900/90"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="transform transition-all duration-1000 ease-out"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
          }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
            Trusted Globally
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Join thousands of companies worldwide who rely on our platform for their most critical data analytics needs
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 animate-scale-in"
                style={{ 
                  animationDelay: `${0.6 + index * 0.1}s`,
                  transform: `translateY(${scrollY * -0.1}px)`
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-blue-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-200 opacity-80">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animated waves at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
            className="text-white dark:text-gray-900"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="-200 0;0 0;-200 0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
            className="text-white dark:text-gray-900"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0 0;200 0;0 0"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
            className="text-white dark:text-gray-900"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="-100 0;100 0;-100 0"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </section>
  );
};

export default ParallaxSection;
