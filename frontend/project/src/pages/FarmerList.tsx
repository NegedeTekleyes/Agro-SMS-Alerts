import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Download, Plus, Edit, Trash2, MessageCircle, Phone } from 'lucide-react';

const FarmerList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  
  // Mock data for farmers list
  const farmersData = [
    { id: 1, firstName: 'Abebe', lastName: 'Kasa', region: 'Amhara Region', Zone: 'North Shoa', phoneNumber: '+251 99 123 4567', primaryCrop: 'Wheat', registeredDate: '2023-05-12' },
    { id: 2, firstName: 'Megersa', lastName: 'Bedasa', region: 'Oromia Region', Zone: 'East Wollega', phoneNumber: '+251 88 765 4321', primaryCrop: 'Coffe', registeredDate: '2023-06-18' },
    { id: 3, firstName: 'Awol', lastName: 'Arba', region: 'Afar Region', Zone: 'Awash', phoneNumber: '+251 99 876 5432', primaryCrop: 'Cattle', registeredDate: '2023-07-24' },
    { id: 4, firstName: 'Hasen', lastName: 'Muhamed', region: 'Somalia Region', Zone: 'Jijiga', phoneNumber: '+251 88 234 5678', primaryCrop: 'Maize', registeredDate: '2023-08-05' },
    { id: 5, firstName: 'Getachew', lastName: 'Reda', region: 'Tgraiy Region', Zone: 'Aksum', phoneNumber: '+251 99 345 6789', primaryCrop: 'Groundnuts', registeredDate: '2023-09-15' }
  ];
  
  // Filter farmers based on search term and selected region
  const filteredFarmers = farmersData.filter(farmer => {
    const matchesSearch = searchTerm === '' || 
      `${farmer.firstName} ${farmer.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmer.phoneNumber.includes(searchTerm);
    
    const matchesRegion = selectedRegion === '' || farmer.region === selectedRegion;
    
    return matchesSearch && matchesRegion;
  });
  
  // Get unique regions for filter dropdown
  const regions = [...new Set(farmersData.map(farmer => farmer.region))];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Farmers</h1>
        <Link 
          to="/farmers/register" 
          className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg"
        >
          <Plus size={18} className="mr-1" />
          Add Farmer
        </Link>
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
              placeholder="Search farmers by name or phone..."
            />
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-500" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">All Regions</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
            
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 flex items-center">
              <Download size={18} className="mr-1" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone Number
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Primary Crop
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Registered Date
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredFarmers.map(farmer => (
                <tr key={farmer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-800">{farmer.firstName} {farmer.lastName}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-800">{farmer.region}</div>
                    <div className="text-sm text-gray-500">{farmer.Zone}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    {farmer.phoneNumber}
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    {farmer.primaryCrop}
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    {new Date(farmer.registeredDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-1.5 hover:bg-gray-100 rounded-full" title="Send SMS">
                        <MessageCircle size={18} className="text-green-600" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-full" title="Call">
                        <Phone size={18} className="text-blue-600" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-full" title="Edit">
                        <Edit size={18} className="text-gray-600" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded-full" title="Delete">
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredFarmers.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-gray-500">No farmers found matching your criteria</p>
          </div>
        )}
        
        <div className="p-4 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing {filteredFarmers.length} of {farmersData.length} farmers
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-200">
              Previous
            </button>
            <button className="px-3 py-1 bg-green-600 text-white rounded">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-200">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerList;