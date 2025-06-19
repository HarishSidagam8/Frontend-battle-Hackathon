
import React, { useState, useEffect } from 'react';
import { Moon, Sun, BarChart3, FileText, PieChart, Grid3x3 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navItems = [
    {
      name: 'Reports',
      href: '#reports',
      icon: FileText,
      preview: [
        'Financial Summary Report',
        'Monthly Performance Analysis',
        'Quarterly Revenue Report',
        'Annual Compliance Report'
      ]
    },
    {
      name: 'Forecasts',
      href: '#forecasts',
      icon: BarChart3,
      preview: [
        'Revenue Forecast 2024',
        'Market Trend Predictions',
        'Budget Planning Forecast',
        'Growth Projection Analysis'
      ]
    },
    {
      name: 'Dashboards',
      href: '#dashboards',
      icon: PieChart,
      preview: [
        'Executive Dashboard',
        'Operations Overview',
        'Sales Performance',
        'Customer Analytics'
      ]
    },
    {
      name: 'Consolidations',
      href: '#consolidations',
      icon: Grid3x3,
      preview: [
        'Multi-Entity Consolidation',
        'Regional Data Merge',
        'Department Aggregation',
        'Global Financial Consolidation'
      ]
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Analytics Pro
              </h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 relative">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeHover === item.name;
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setActiveHover(item.name)}
                      onMouseLeave={() => setActiveHover(null)}
                    >
                      <a
                        href={item.href}
                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform ${
                          isActive 
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 scale-105 shadow-md' 
                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <IconComponent className={`w-4 h-4 mr-2 transition-all duration-300 ${
                          isActive ? 'text-blue-600 dark:text-blue-400' : ''
                        }`} />
                        <span className="relative">
                          {item.name}
                          {isActive && (
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                          )}
                        </span>
                      </a>
                      
                      {activeHover === item.name && (
                        <div className="absolute top-full left-0 mt-3 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 animate-fade-in z-10">
                          <div className="absolute -top-2 left-6 w-4 h-4 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 rotate-45"></div>
                          <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                            {item.name}
                          </h3>
                          <ul className="space-y-2">
                            {item.preview.map((previewItem, index) => (
                              <li
                                key={index}
                                className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-all duration-200 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
                              >
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                                <span className="truncate">{previewItem}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                            <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                              View All {item.name} →
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="relative hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? (
                <Sun className="h-5 w-5 transition-all duration-300" />
              ) : (
                <Moon className="h-5 w-5 transition-all duration-300" />
              )}
            </Button>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Start 14-day free trial
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
