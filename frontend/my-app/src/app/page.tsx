import Link from 'next/link';
import WeatherForm from '../components/WeatherForm';
import ProductForm from '../components/ProductForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Smart Farming Admin Dashboard
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Manage your farm operations, weather updates, and product information in one place
          </p>
        </header>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 mb-10">
          <Link 
            href="/farmers" 
            className="px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 hover:bg-blue-50 border border-blue-100"
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
            </svg> */}
            View Farmers
          </Link>
          <Link 
            href="/messages" 
            className="px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 hover:bg-cyan-50 border border-cyan-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
            </svg>
            View Messages
          </Link>
          <Link 
            href="/products" 
            className="px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 hover:bg-green-50 border border-green-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
            </svg>
            View Products
          </Link>
          <Link 
            href="/analytics" 
            className="px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 hover:bg-purple-50 border border-purple-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            View Analytics
          </Link>
        </nav>

        {/* Main Content */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 flex items-center gap-2">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg> */}
              Weather Updates
            </h2>
            <WeatherForm />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
            <h2 className="text-2xl font-semibold mb-4 text-green-600 flex items-center gap-2">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg> */}
              Product Management
            </h2>
            <ProductForm />
          </div>
        </main>

        {/* Quick Stats Section */}
        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-blue-100">
            <h3 className="text-gray-500 text-sm font-medium">Total Farmers</h3>
            <p className="text-2xl font-bold text-blue-600">1,248</p>
            <p className="text-green-500 text-sm flex items-center">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg> */}
              +12% from last month
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-green-100">
            <h3 className="text-gray-500 text-sm font-medium">Active Products</h3>
            <p className="text-2xl font-bold text-green-600">84</p>
            <p className="text-green-500 text-sm flex items-center">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg> */}
              +5% from last month
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-amber-100">
            <h3 className="text-gray-500 text-sm font-medium">Pending Messages</h3>
            <p className="text-2xl font-bold text-amber-600">23</p>
            <p className="text-red-500 text-sm flex items-center">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
              </svg> */}
              -3% from last month
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-purple-100">
            <h3 className="text-gray-500 text-sm font-medium">Weather Alerts</h3>
            <p className="text-2xl font-bold text-purple-600">2</p>
            <p className="text-green-500 text-sm flex items-center">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg> */}
              -50% from last month
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}