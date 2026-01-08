# 📸 Galeria de Fotos

Uma galeria de fotos moderna e responsiva construída com Next.js, integrada com a API do Pexels para fornecer imagens de alta qualidade.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌐 Demo ao Vivo

Acesse a aplicação em produção: **[galeria-online-taupe.vercel.app](https://galeria-online-taupe.vercel.app/)**

## 🚀 Funcionalidades

- ✅ **Galeria Responsiva**: Grid adaptável de 1 a 4 colunas
- ✅ **Busca em Tempo Real**: Filtro instantâneo pelo nome das fotos com debounce
- ✅ **Filtros por Categoria**: Tudo, Natureza, Arquitetura, Abstrata
- ✅ **Integração com Pexels API**: Fotos de alta qualidade
- ✅ **Carregamento Dinâmico**: Botão "Carregar Mais" para paginação
- ✅ **UI Moderna**: Design escuro com animações suaves
- ✅ **Otimização de Imagens**: Next.js Image para performance

## 🛠️ Tecnologias Utilizadas

### Core
- **[Next.js 16.1.1](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca UI
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática

### Estilização
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes React reutilizáveis
- **[Lucide React](https://lucide.dev/)** - Ícones modernos

### API
- **[Pexels API](https://www.pexels.com/api/)** - Fornecedor de imagens

## 📋 Pré-requisitos

- **Node.js** 18.x ou superior
- **npm** ou **yarn** ou **pnpm**
- **Conta no Pexels** (gratuita) para obter API Key

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/galeria-de-fotos.git
cd galeria-de-fotos
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
NEXT_PUBLIC_PEXELS_API_KEY=sua_chave_api_aqui
```

**Como obter sua API Key do Pexels:**
1. Acesse [https://www.pexels.com/api/](https://www.pexels.com/api/)
2. Crie uma conta gratuita
3. Acesse "Your API Key" no dashboard
4. Copie a chave e cole no `.env.local`

### 4. Execute o projeto

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz com Header e Footer
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globais
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Cabeçalho com logo e botões
│   │   └── Footer.tsx      # Rodapé com links
│   ├── hero/
│   │   ├── HeroSection.tsx # Seção hero com título
│   │   └── SearchBar.tsx   # Barra de busca com debounce
│   ├── gallery/
│   │   ├── GalleryGrid.tsx      # Grid principal de fotos
│   │   ├── PhotoCard.tsx        # Card individual de foto
│   │   └── CategoryFilter.tsx   # Filtros de categoria
│   └── ui/
│       └── (shadcn components)  # Componentes do shadcn
├── lib/
│   ├── pexels.ts           # Funções da API Pexels
│   ├── mockData.ts         # Dados mock para testes
│   └── utils.ts            # Utilitários
└── types/
    └── index.ts            # TypeScript interfaces
```

## 🎨 Componentes Principais

### SearchBar
- Busca em tempo real com debounce de 500ms
- Ícone de lupa e botão para limpar busca
- Filtra fotos pelo nome/título

### GalleryGrid
- Grid responsivo (1-4 colunas)
- Carregamento com skeleton loading
- Paginação com "Load More"
- Contador de resultados

### PhotoCard
- Card com hover effect
- Overlay com informações (título, autor)
- Badge de categoria
- Otimização de imagens com Next/Image

### CategoryFilter
- Filtros: All, Nature, Architecture, Abstract
- Estado ativo com visual diferenciado
- Integrado com API do Pexels

## 🔑 Variáveis de Ambiente

| Variável | Descrição | Obrigatória |
|----------|-----------|-------------|
| `NEXT_PUBLIC_PEXELS_API_KEY` | Chave da API do Pexels | ✅ Sim |

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa ESLint
```

## 🚀 Deploy

### ✅ Projeto em Produção

Este projeto está hospedado na Vercel: **[galeria-online-taupe.vercel.app](https://galeria-online-taupe.vercel.app/)**

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Importe o projeto na [Vercel](https://vercel.com)
3. Adicione a variável `NEXT_PUBLIC_PEXELS_API_KEY`
4. Deploy automático! 🎉

### Outras Plataformas

O projeto pode ser hospedado em qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 🎯 Funcionalidades Futuras

- [ ] Modal para visualizar fotos em tamanho grande
- [ ] Download de fotos
- [ ] Sistema de favoritos
- [ ] Compartilhamento social
- [ ] Infinite scroll
- [ ] Modo claro/escuro
- [ ] Filtros avançados (orientação, cores)

## 📝 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

Desenvolvido por José Carlos Cavalcanti.

---

⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!
