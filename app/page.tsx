'use client';

import { useState } from 'react';
import HeroSection from '@/components/hero/HeroSection';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <HeroSection onSearch={handleSearch} />
      <GalleryGrid searchQuery={searchQuery} />
    </>
  );
}