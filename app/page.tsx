import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { FounderFeature } from "@/components/home/FounderFeature";
import { Marquee } from "@/components/Marquee";
import { Engagements } from "@/components/home/Engagements";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";
import { marqueeItems } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <PracticeAreas />
      <FounderFeature />
      <Marquee items={marqueeItems} tone="light" durationSeconds={38} />
      <Engagements />
      <InsightsPreview />
      <ContactCtaSection />
    </>
  );
}
