'use client';

import { Badge } from '@/components/ui/badge';
import { CategoryType } from '@/app/types';

interface CategoryFilterProps {
  activeCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

const categories: { label: string; value: CategoryType }[] = [
  { label: 'All', value: 'All' },
  { label: 'Nature', value: 'Nature' },
  { label: 'Architecture', value: 'Architecture' },
  { label: 'Abstract', value: 'Abstract' },
];

export default function CategoryFilter({ 
  activeCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <Badge
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`
            px-6 py-2 text-sm font-medium cursor-pointer transition-all
            ${activeCategory === category.value
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }
          `}
        >
          {category.label}
        </Badge>
      ))}
    </div>
  );
}