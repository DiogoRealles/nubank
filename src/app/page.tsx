import Hero from "@/components/Hero/Index";
import People from "@/components/People/Index";
import Features from "@/components/Features/Index";
import Testimonials from "@/components/Testimonials/Index";
import AccountDigital from "@/components/AccountDigital/Index";
import YourCard from "@/components/YourCard/Index";
import DownloadApp from "@/components/DownloadApp/Index";
import Cta from "@/components/Cta/Index";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <People />
      <Features />
      <Testimonials />
      <AccountDigital />
      <YourCard />
      <DownloadApp />
      <Cta />
    </main>
  );
}
