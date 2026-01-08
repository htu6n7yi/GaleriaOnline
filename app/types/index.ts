// Tipos da API do Pexels
export interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

export interface PexelsResponse {
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  total_results: number;
  next_page?: string;
}

// Tipos para o componente
export interface Photo {
  id: number;
  title: string;
  imageUrl: string;
  thumbnailUrl: string;
  author: string;
  authorUrl: string;
  category?: string;
  color?: string;
}

export type CategoryType = 'All' | 'Nature' | 'Architecture' | 'Abstract' | 'City';

export interface CategoryFilter {
  id: string;
  label: string;
  value: CategoryType;
}