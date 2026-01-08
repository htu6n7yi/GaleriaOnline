'use client';

import Image from 'next/image';
import { Photo } from '@/app/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PhotoCardProps {
  photo: Photo;
  onClick?: () => void;
}

export default function PhotoCard({ photo, onClick }: PhotoCardProps) {
  return (
    <Card 
      className="group relative overflow-hidden bg-gray-800 border-gray-700 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-2xl"
      onClick={onClick}
    >
      {/* Imagem */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={photo.thumbnailUrl}
          alt={photo.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay com informações */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-lg mb-1 line-clamp-2">
              {photo.title}
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-gray-300 text-sm">
                By {photo.author}
              </p>
              {photo.category && (
                <Badge variant="secondary" className="bg-blue-600 text-white">
                  {photo.category}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}