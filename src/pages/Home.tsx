
import { Navigation } from "@/components/navigation";
import { HomeHero } from "@/components/home/hero";
import { SocialProof } from "@/components/home/social-proof";
import { ProblemStatement } from "@/components/home/problem-statement";
import { ServicesOverview } from "@/components/home/services-overview";
import { Methodology } from "@/components/home/methodology";
import { CaseStudyPreview } from "@/components/home/case-study-preview";
import { FinalCTA } from "@/components/home/final-cta";
import { Footer } from "@/components/footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#030303]">
      <Navigation />
      <HomeHero />
      <SocialProof />
      <ProblemStatement />
      <ServicesOverview />
      <Methodology />
      <CaseStudyPreview />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Home;
