import { useState } from 'react';

const categories = [
  'All',
  'Pizza',
  'Burgers',
  'Sushi',
  'Asian',
  'Italian',
  'Mexican',
  'Healthy',
];

export function CategoryFilter() {
  const [selected, setSelected] = useState('All');

  return (
    <div className="overflow-x-auto py-4">
      <div className="flex space-x-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
                selected === category
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;