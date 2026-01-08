import { PexelsResponse, Photo } from '@/app/types';

const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;
const BASE_URL = 'https://api.pexels.com/v1';

// Função para buscar fotos curadas
export async function getCuratedPhotos(page: number = 1, perPage: number = 12): Promise<Photo[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/curated?page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization: PEXELS_API_KEY || '',
        },
        next: { revalidate: 3600 }, // Cache por 1 hora
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch photos from Pexels');
    }

    const data: PexelsResponse = await response.json();
    return data.photos.map(photo => ({
      id: photo.id,
      title: photo.alt || 'Untitled',
      imageUrl: photo.src.large,
      thumbnailUrl: photo.src.medium,
      author: photo.photographer,
      authorUrl: photo.photographer_url,
      color: photo.avg_color,
    }));
  } catch (error) {
    console.error('Error fetching curated photos:', error);
    return [];
  }
}

// Função para buscar fotos por query
export async function searchPhotos(
  query: string, 
  page: number = 1, 
  perPage: number = 12
): Promise<Photo[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/search?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization: PEXELS_API_KEY || '',
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to search photos from Pexels');
    }

    const data: PexelsResponse = await response.json();
    return data.photos.map(photo => ({
      id: photo.id,
      title: photo.alt || 'Untitled',
      imageUrl: photo.src.large,
      thumbnailUrl: photo.src.medium,
      author: photo.photographer,
      authorUrl: photo.photographer_url,
      category: query,
      color: photo.avg_color,
    }));
  } catch (error) {
    console.error('Error searching photos:', error);
    return [];
  }
}