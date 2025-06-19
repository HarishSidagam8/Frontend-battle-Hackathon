
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
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setActiveHover(item.name)}
                      onMouseLeave={() => setActiveHover(null)}
                    >
                      <a
                        href={item.href}
                        className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                      >
                        <IconComponent className="w-4 h-4 mr-2" />
                        {item.name}
                      </a>
                      
                      {activeHover === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 animate-fade-in">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {item.name}
                          </h3>
                          <ul className="space-y-1">
                            {item.preview.map((previewItem, index) => (
                              <li
                                key={index}
                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors duration-150"
                              >
                                • {previewItem}
                              </li>
                            ))}
                          </ul>
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
              className="relative"
            >
              {isDark ? (
                <Sun className="h-5 w-5 transition-all duration-300" />
              ) : (
                <Moon className="h-5 w-5 transition-all duration-300" />
              )}
            </Button>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Start 14-day free trial
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
