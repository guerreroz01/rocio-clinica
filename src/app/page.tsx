import VideoSection from "@/components/VideoSection";
import BannerSection01 from "@/components/BannerSection01";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ClinicSection from "@/components/ClinicSection";
import OpenHours from "@/components/OpenHours";
import BannerSection02 from "@/components/BannerSection02";
import BlogSection from "@/components/BlogSection";
import Prueba from "@/components/Prueba";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <BannerSection01 />
      <VideoSection />
      <ClinicSection />
      <BannerSection02 />
      <OpenHours />
      <BlogSection />
      <Prueba />
    </main>
  );
}
