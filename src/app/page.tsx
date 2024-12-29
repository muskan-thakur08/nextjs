import Cards from "@/components/Cards";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import Webinars from "@/components/Webinars";


export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedSection />
        <Cards />
        <Webinars />
        <Instructor/>
        <Footer/>
      </main>

    </>
  );
}
