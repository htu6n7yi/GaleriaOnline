## 🏗️ Estrutura de Componentes


### **1. Layout Components** (`/components/layout/`)
- `Header.tsx` - Cabeçalho com logo e botão de upload
- `Footer.tsx` - Rodapé com links e informações
- `Navigation.tsx` - Navegação (se necessário)

### **2. Hero Components** (`/components/hero/`)
- `HeroSection.tsx` - Seção principal com título e busca
- `SearchBar.tsx` - Barra de pesquisa isolada

### **3. Gallery Components** (`/components/gallery/`)
- `GalleryGrid.tsx` - Grid principal de fotos
- `PhotoCard.tsx` - Card individual de foto
- `PhotoModal.tsx` - Modal para visualizar foto em tamanho grande
- `CategoryFilter.tsx` - Filtros de categoria (All, Nature, Architecture, Abstract)
- `LoadMoreButton.tsx` - Botão "Load More Photos"

### **4. UI Components** (`/components/ui/`)
- Componentes do shadcn (já instalados)
- `ImageWithFallback.tsx` - Componente de imagem com fallback
- `CategoryBadge.tsx` - Badge customizado para categorias

### **5. Feature Components** (`/components/features/`)
- `UploadButton.tsx` - Botão de upload com funcionalidade
- `UserAvatar.tsx` - Avatar do usuário

## 📁 Estrutura de Pastas Completa
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MainLayout.tsx
│   ├── hero/
│   │   ├── HeroSection.tsx
│   │   └── SearchBar.tsx
│   ├── gallery/
│   │   ├── GalleryGrid.tsx
│   │   ├── PhotoCard.tsx
│   │   ├── PhotoModal.tsx
│   │   ├── CategoryFilter.tsx
│   │   └── LoadMoreButton.tsx
│   ├── features/
│   │   ├── UploadButton.tsx
│   │   └── UserAvatar.tsx
│   └── ui/
│       ├── (shadcn components)
│       ├── ImageWithFallback.tsx
│       └── CategoryBadge.tsx
├── lib/
│   ├── utils.ts
│   └── data.ts (mock data das fotos)
├── types/
│   └── index.ts (TypeScript interfaces)
└── hooks/
    ├── usePhotoGallery.ts
    └── useSearch.ts