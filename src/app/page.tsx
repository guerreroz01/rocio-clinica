import VideoSection from "@/components/VideoSection";
import BannerSection01 from "@/components/BannerSection01";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ClinicSection from "@/components/ClinicSection";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <BannerSection01 />
      <VideoSection />
      <ClinicSection />
      <BannerSection01 />
    </main>
  );
}
