import SearchBar from './SearchBar';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0f1419] via-[#1a2332] to-[#0f1419] py-20 md:py-32">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Galeria de Fotos
          </h1>
          
          {/* Subtítulo */}
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            explore uma coleção selecionada de fotos em alta resolução.
          </p>
          
          {/* Barra de Busca */}
          <SearchBar />
        </div>
      </div>
    </section>
  );
}