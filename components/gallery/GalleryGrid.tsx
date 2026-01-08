'use client';

import { useState, useEffect } from 'react';
import { Photo, CategoryType } from '@/app/types';
import PhotoCard from './PhotoCard';
import CategoryFilter from './CategoryFilter';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { getCuratedPhotos, searchPhotos } from '@/lib/pexels';

export default function GalleryGrid() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Carregar fotos iniciais
  useEffect(() => {
    loadPhotos(1, activeCategory);
  }, [activeCategory]);

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
        setPhotos(newPhotos);
      } else {
        setPhotos(prev => [...prev, ...newPhotos]);
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
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center md:text-left">
          Latest Uploads
        </h2>

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
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {photos.map((photo) => (
                <PhotoCard 
                  key={photo.id} 
                  photo={photo}
                  onClick={() => console.log('Photo clicked:', photo.id)}
                />
              ))}
            </div>

            {/* Botão Load More */}
            {hasMore && photos.length > 0 && (
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