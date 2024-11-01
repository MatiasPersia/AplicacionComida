import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Star, Clock, DollarSign } from 'lucide-react';
import { restaurants } from '../data/restaurants';
import { menuItems } from '../data/menu-items';
import { useCart } from '../context/CartContext';

export function RestaurantDetails() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const restaurant = restaurants.find(r => r.id === id);
  if (!restaurant) return <div>Restaurant not found</div>;

  const restaurantMenuItems = menuItems.filter(item => 
    restaurant.categories.includes(item.category)
  );

  const filteredItems = selectedCategory === 'All' 
    ? restaurantMenuItems
    : restaurantMenuItems.filter(item => item.category === selectedCategory);

  const categories = ['All', ...new Set(restaurantMenuItems.map(item => item.category))];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="relative h-64">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1">{restaurant.rating}</span>
            </span>
            <span className="flex items-center">
              <Clock className="w-5 h-5" />
              <span className="ml-1">{restaurant.deliveryTime} min</span>
            </span>
            <span className="flex items-center">
              <DollarSign className="w-5 h-5" />
              <span className="ml-1">${restaurant.deliveryFee.toFixed(2)} delivery</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex space-x-2 overflow-x-auto py-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                ${selectedCategory === category
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 mt-1">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;