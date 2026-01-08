import { Image, Globe, Instagram, Rss } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0e13] border-t border-gray-800 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Image className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold text-lg">
                Galeria
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              A beautiful space to showcase, discover, and share photography. Built for creators by creators.
            </p>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-white font-semibold mb-4">Discover</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Editor's Choice
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Curated Collections
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Popular Images
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Legal
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Globe"
              >
                <Globe className="w-5 h-5 text-gray-400" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="RSS"
              >
                <Rss className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Galeria de Fotos. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}