
import React from 'react';
import { FileText, BarChart3, PieChart, Grid3x3, Zap, Shield, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const mainFeatures = [
    {
      icon: FileText,
      title: 'Advanced Reports',
      description: 'Generate comprehensive reports with real-time data visualization and automated insights.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Smart Forecasts',
      description: 'AI-powered predictive analytics to help you make data-driven decisions for the future.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: PieChart,
      title: 'Interactive Dashboards',
      description: 'Beautiful, customizable dashboards that provide instant insights into your key metrics.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Grid3x3,
      title: 'Data Consolidation',
      description: 'Seamlessly merge data from multiple sources into unified, actionable intelligence.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process millions of data points in seconds with our optimized engine.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance certifications.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights and collaborate with your team in real-time.'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Built to handle data from organizations of any size, anywhere in the world.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need for data excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Powerful tools designed to transform your data into actionable insights
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
