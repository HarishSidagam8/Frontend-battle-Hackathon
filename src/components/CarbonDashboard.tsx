
import React from 'react';
import { Download, Filter, TrendingDown, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CarbonDashboard = () => {
  const chartData = [
    { year: '2019', value: 875, target: 500 },
    { year: '2020', value: 278, target: 500 },
    { year: '2021', value: 975, target: 500 },
    { year: '2022', value: 617, target: 500 },
    { year: '2023', value: 185, target: 500 },
    { year: '2024', value: 191, target: 500 },
    { year: '2025', value: 122, target: 600 },
    { year: '2026', value: 550, target: 600 },
    { year: '2027', value: 881, target: 600 },
    { year: '2028', value: 539, target: 600 },
    { year: '2029', value: 289, target: 600 },
    { year: '2030', value: 29, target: 600 },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  const portfolioMetrics = [
    {
      title: 'Managed portfolio carbon footprint',
      value: '45,048',
      unit: 'tCO₂e',
      change: '+16%',
      trend: 'up',
      yearlyData: [
        { year: '2022', value: 45048 },
        { year: '2021', value: 14111 },
        { year: '2020', value: 32813 },
        { year: '2019', value: 38673 }
      ]
    },
    {
      title: 'Managed portfolio energy intensity',
      value: '123',
      unit: 'kWh/m²',
      change: '-22%',
      trend: 'down',
      yearlyData: [
        { year: '2022', value: 123 },
        { year: '2021', value: 128 },
        { year: '2020', value: 135 },
        { year: '2019', value: 157 }
      ]
    },
    {
      title: 'Managed portfolio energy consumption',
      value: '47,790,662',
      unit: 'kWh',
      change: '-27%',
      trend: 'down',
      yearlyData: [
        { year: '2022', value: 47790662 },
        { year: '2021', value: 49324077 },
        { year: '2020', value: 48784205 },
        { year: '2019', value: 65198706 }
      ]
    }
  ];

  return (
    <section id="dashboards" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carbon Emissions Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-12 shadow-lg">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                EMBODIED CARBON EMISSIONS
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Intensity measured by kgCO₂e/m²
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <Button variant="outline" size="sm" className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filter by
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Download the data
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Type</span>
              <Badge variant="secondary">Refurbishment</Badge>
              <Badge variant="secondary">New build</Badge>
              <Badge variant="default">All</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</span>
              <Badge variant="default">Complete</Badge>
              <Badge variant="secondary">Estimate</Badge>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center">
              <div className="w-4 h-0.5 bg-gray-400 mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                500 kgCO₂e/m² - Embodied Carbon Target 2030
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-0.5 bg-gray-500 mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                600 kgCO₂e/m² - Embodied Carbon Target 2025
              </span>
            </div>
          </div>

          {/* Chart */}
          <div className="relative h-80">
            <div className="flex items-end justify-between h-full space-x-2">
              {chartData.map((item, index) => (
                <div key={item.year} className="flex flex-col items-center flex-1">
                  <div className="relative w-full bg-gray-100 dark:bg-gray-700 rounded-t">
                    <div
                      className="bg-carbon-red-600 rounded-t transition-all duration-700 ease-out"
                      style={{
                        height: `${(item.value / maxValue) * 100}%`,
                        minHeight: '4px'
                      }}
                    ></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {item.value}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Target lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-full border-t-2 border-dashed border-gray-400" style={{ top: '40%' }}></div>
              <div className="absolute w-full border-t-2 border-dashed border-gray-500" style={{ top: '35%' }}></div>
            </div>
          </div>
        </div>

        {/* Portfolio Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioMetrics.map((metric, index) => (
            <div
              key={metric.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {metric.title}
                </h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {metric.value}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {metric.unit}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-red-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-red-500' : 'text-green-500'
                  }`}>
                    {metric.change}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                    from 2019
                  </span>
                </div>
              </div>

              {/* Yearly breakdown */}
              <div className="space-y-3">
                {metric.yearlyData.map((item, idx) => (
                  <div key={item.year} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.year}
                    </span>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-carbon-red-600 h-2 rounded-full transition-all duration-500"
                          style={{
                            width: `${(item.value / Math.max(...metric.yearlyData.map(d => d.value))) * 100}%`
                          }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white min-w-[80px] text-right">
                        {item.value.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button variant="ghost" size="sm" className="w-full justify-start p-0">
                  <Download className="w-4 h-4 mr-2" />
                  Download the data
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarbonDashboard;
