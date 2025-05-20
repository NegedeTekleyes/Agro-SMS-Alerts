import React, { useState } from 'react';
import { Search, Plus, Eye, File, Calendar, BookOpen, Download } from 'lucide-react';

const ProductGuidance: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Mock data
  const categories = ['Fertilizers', 'Pesticides', 'Seeds', 'Equipment', 'Training'];
  
  const guidanceData = [
    {
      id: 1,
      title: 'Effective Use of Organic Fertilizers',
      category: 'Fertilizers',
      description: 'Comprehensive guide on how to properly apply organic fertilizers to maximize crop yield while maintaining soil health.',
      date: '2023-09-18',
      type: 'document',
      views: 246,
    },
    {
      id: 2,
      title: 'Safe Handling of Pesticides',
      category: 'Pesticides',
      description: 'Safety procedures and best practices for handling, mixing, and applying pesticides to ensure farmer safety and environmental protection.',
      date: '2023-09-10',
      type: 'document',
      views: 189,
    },
    {
      id: 3,
      title: 'Hybrid Maize Varieties: Selection Guide',
      category: 'Seeds',
      description: 'Detailed comparison of available hybrid maize varieties with recommendations based on regional climate conditions.',
      date: '2023-08-25',
      type: 'document',
      views: 312,
    },
    {
      id: 4,
      title: 'Tractor Maintenance Training Video',
      category: 'Equipment',
      description: 'Step-by-step video guide on routine maintenance procedures for agricultural tractors to extend equipment life.',
      date: '2023-08-15',
      type: 'video',
      views: 178,
    },
    {
      id: 5,
      title: 'Sustainable Farming Certification Program',
      category: 'Training',
      description: 'Information about the upcoming certification program for sustainable farming practices and its benefits for accessing premium markets.',
      date: '2023-08-05',
      type: 'event',
      views: 203,
    },
  ];
  
  // Filter guidance based on search term and selected category
  const filteredGuidance = guidanceData.filter(item => {
    const matchesSearch = 
      searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Type icons
  const typeIcons = {
    document: <File size={16} className="text-blue-500" />,
    video: <Eye size={16} className="text-purple-500" />,
    event: <Calendar size={16} className="text-green-500" />
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Product Guidance</h1>
        <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg">
          <Plus size={18} className="mr-1" />
          Add New Guide
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Search guides..."
            />
          </div>
          
          <div className="flex items-center gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGuidance.map((guide) => (
              <div key={guide.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="px-2.5 py-0.5 text-xs rounded bg-green-100 text-green-800 flex items-center">
                      {guide.category}
                    </span>
                    <span className="ml-2 text-xs text-gray-500 flex items-center">
                      {typeIcons[guide.type as keyof typeof typeIcons]}
                      <span className="ml-1">{guide.type}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{guide.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{guide.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {new Date(guide.date).toLocaleDateString()} • {guide.views} views
                    </span>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-1.5 rounded-full hover:bg-gray-100" title="View">
                        <BookOpen size={18} className="text-green-600" />
                      </button>
                      <button className="p-1.5 rounded-full hover:bg-gray-100" title="Download">
                        <Download size={18} className="text-blue-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredGuidance.length === 0 && (
            <div className="py-8 text-center">
              <p className="text-gray-500">No guides found matching your criteria</p>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing {filteredGuidance.length} of {guidanceData.length} guides
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border border-gray-300 rounded text-gray-600">
              Previous
            </button>
            <button className="px-3 py-1 bg-green-600 text-white rounded">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-gray-600">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGuidance;