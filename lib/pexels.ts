import { PexelsResponse, Photo } from '@/app/types';

const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;
const BASE_URL = 'https://api.pexels.com/v1';

export async function getCuratedPhotos(page: number = 1, perPage: number = 12): Promise<Photo[]> {
  // Verificar API key
  if (!PEXELS_API_KEY) {
    console.error('❌ PEXELS_API_KEY não encontrada!');
    console.error('📝 Crie o arquivo .env.local na raiz com:');
    console.error('NEXT_PUBLIC_PEXELS_API_KEY=sua_chave_aqui');
    return [];
  }

  console.log('✅ API Key encontrada');
  console.log('🔍 Buscando fotos curadas, página:', page);

  try {
    const url = `${BASE_URL}/curated?page=${page}&per_page=${perPage}`;
    console.log('📡 URL:', url);

    const response = await fetch(url, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      cache: 'no-store',
    });

    console.log('📊 Status da resposta:', response.status);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('❌ Erro na API:', {
        status: response.status,
        statusText: response.statusText,
        body: errorBody
      });
      return [];
    }

    const data: PexelsResponse = await response.json();
    console.log('✅ Fotos recebidas:', data.photos.length);

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
    console.error('❌ Erro ao buscar fotos:', error);
    return [];
  }
}

export async function searchPhotos(
  query: string,
  page: number = 1,
  perPage: number = 12
): Promise<Photo[]> {
  if (!PEXELS_API_KEY) {
    console.error('❌ PEXELS_API_KEY não encontrada!');
    return [];
  }

  console.log('🔍 Buscando:', query, '| Página:', page);

  try {
    const url = `${BASE_URL}/search?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`;
    
    const response = await fetch(url, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      cache: 'no-store',
    });

    console.log('📊 Status da busca:', response.status);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('❌ Erro na busca:', {
        status: response.status,
        body: errorBody
      });
      return [];
    }

    const data: PexelsResponse = await response.json();
    console.log('✅ Resultados:', data.photos.length);

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
    console.error('❌ Erro na busca:', error);
    return [];
  }
}