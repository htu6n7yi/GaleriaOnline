'use client';

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Aqui você implementará a lógica de busca
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="flex gap-3 max-w-2xl mx-auto"
    >
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Search for photos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 h-14 pl-5 pr-5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
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