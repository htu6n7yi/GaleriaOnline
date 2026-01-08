import GalleryGrid from "@/components/gallery/GalleryGrid";
import HeroSection from "@/components/hero/HeroSection";
import { h1, main } from "framer-motion/client";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <GalleryGrid />
    </main>
  )
}
