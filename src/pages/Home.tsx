import { useState } from 'react';
import { restaurants } from '../data/restaurants';
import { RestaurantCard } from '../components/RestaurantCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { MapPin } from 'lucide-react';

export function Home() {
  const [address] = useState('123 Main St, City');

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-2 mb-6">
          <MapPin className="h-5 w-5 text-red-500" />
          <span className="text-gray-700">{address}</span>
        </div>

        <h1 className="text-3xl font-bold mb-6">Featured Restaurants</h1>
        
        <CategoryFilter />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;