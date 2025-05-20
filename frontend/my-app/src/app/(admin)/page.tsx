import StatsCards from "/components/dashboard/StatsCards";
import RecentFarmers from "@/components/dashboard/RecentFarmers";
import { getFarmers, getMessages, getWeather, getProducts } from "@/lib/db";

export default async function DashboardPage() {
  const [farmers, messages, weather, products] = await Promise.all([
    getFarmers(),
    getMessages(),
    getWeather(),
    getProducts()
  ]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      <StatsCards 
        farmersCount={farmers.length}
        pendingMessages={messages.filter(m => m.status === "PENDING").length}
        weatherAlerts={weather.filter(w => w.alert).length}
        productsCount={products.length}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentFarmers farmers={farmers.slice(0, 5)} />
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Weather Alerts</h2>
          {/* Weather alerts component */}
        </div>
      </div>
    </div>
  );
}