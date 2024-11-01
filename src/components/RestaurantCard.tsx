import { Star, Clock, DollarSign } from 'lucide-react';
import { Restaurant } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: Props) {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{restaurant.name}</h3>
          <div className="flex items-center mt-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{restaurant.rating}</span>
          </div>
          <div className="mt-2 text-sm text-gray-600 flex items-center space-x-4">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {restaurant.deliveryTime} min
            </span>
            <span className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              ${restaurant.deliveryFee.toFixed(2)} delivery
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {restaurant.categories.map((category) => (
              <span
                key={category}
                className="px-2 py-1 text-xs bg-gray-100 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;