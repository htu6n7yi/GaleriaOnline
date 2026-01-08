'use client';

import { useState, useEffect } from 'react';
import { Photo, CategoryType } from '@/app/types';
import PhotoCard from './PhotoCard';
import CategoryFilter from './CategoryFilter';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { getCuratedPhotos, searchPhotos } from '@/lib/pexels';

interface GalleryGridProps {
  searchQuery: string;
}

export default function GalleryGrid({ searchQuery }: GalleryGridProps) {
  const [allPhotos, setAllPhotos] = useState<Photo[]>([]);
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Carregar fotos iniciais
  useEffect(() => {
    loadPhotos(1, activeCategory);
  }, [activeCategory]);

  // Filtrar fotos quando a busca mudar
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredPhotos(allPhotos);
    } else {
      const filtered = allPhotos.filter(photo =>
        photo.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPhotos(filtered);
    }
  }, [searchQuery, allPhotos]);

  const loadPhotos = async (pageNum: number, category: CategoryType) => {
    setLoading(true);
    try {
      let newPhotos: Photo[];
      
      if (category === 'All') {
        newPhotos = await getCuratedPhotos(pageNum, 12);
      } else {
        newPhotos = await searchPhotos(category.toLowerCase(), pageNum, 12);
      }

      if (pageNum === 1) {
        setAllPhotos(newPhotos);
        setFilteredPhotos(newPhotos);
      } else {
        setAllPhotos(prev => [...prev, ...newPhotos]);
        setFilteredPhotos(prev => [...prev, ...newPhotos]);
      }

      setHasMore(newPhotos.length === 12);
      setPage(pageNum);
    } catch (error) {
      console.error('Error loading photos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category: CategoryType) => {
    setActiveCategory(category);
    setPage(1);
  };

  const handleLoadMore = () => {
    loadPhotos(page + 1, activeCategory);
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        {/* Título da seção */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest Uploads
          </h2>
          {searchQuery && (
            <p className="text-gray-400">
              {filteredPhotos.length} results for "{searchQuery}"
            </p>
          )}
        </div>

        {/* Filtros de categoria */}
        <CategoryFilter 
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Grid de fotos */}
        {loading && page === 1 ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        ) : filteredPhotos.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <p className="text-gray-400 text-xl mb-2">No photos found</p>
            <p className="text-gray-500">Try adjusting your search or filter</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPhotos.map((photo) => (
                <PhotoCard 
                  key={photo.id} 
                  photo={photo}
                  onClick={() => console.log('Photo clicked:', photo.id)}
                />
              ))}
            </div>

            {/* Botão Load More - só mostra se não estiver buscando */}
            {hasMore && !searchQuery && filteredPhotos.length > 0 && (
              <div className="flex justify-center mt-12">
                <Button
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-6 text-lg rounded-xl"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    'Load More Photos'
                  )}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}