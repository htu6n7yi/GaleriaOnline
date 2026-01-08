export interface Photo {
  id: string;
  title: string;
  category: 'Nature' | 'Architecture' | 'Abstract' | 'City';
  imageUrl: string;
  author: string;
  description?: string;
}

export interface CategoryFilter {
  id: string;
  label: string;
  value: string;
}