import AffiliateList from "@/components/affiliate-list";
import HeroSection from "@/components/hero-section";

export default async function Home() {
  return (
    <main className="min-h-screen items-center py-8">
      <div className="my-4">
        <HeroSection />
      </div>
      <div className="container my-4">
        <AffiliateList />
      </div>
    </main>
  );
}
