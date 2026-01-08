'use client';

import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialValue?: string;
}

export default function SearchBar({ onSearch, initialValue = '' }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState(initialValue);

  // Busca em tempo real com debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchQuery);
    }, 500); // Aguarda 500ms após o usuário parar de digitar

    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex gap-3 max-w-2xl mx-auto"
    >
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <Input
          type="text"
          placeholder="Search for photos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 h-14 pl-12 pr-12 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      
      <Button 
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 rounded-xl font-semibold transition-all hover:scale-105"
      >
        Search
      </Button>
    </form>
  );
}