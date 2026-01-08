import { Upload, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-[#0f1419]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Image className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold text-lg">
              Galeria de Fotos
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}