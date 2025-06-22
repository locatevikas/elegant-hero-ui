
import { Navigation } from "@/components/navigation";
import { HomeHero } from "@/components/home/hero";
import { SocialProof } from "@/components/home/social-proof";
import { ProblemStatement } from "@/components/home/problem-statement";
import { ServicesOverview } from "@/components/home/services-overview";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#030303]">
      <Navigation />
      <HomeHero />
      <SocialProof />
      <ProblemStatement />
      <ServicesOverview />
    </div>
  );
};

export default Home;
