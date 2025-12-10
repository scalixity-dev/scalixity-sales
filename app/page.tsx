import Hero from "../component/hero";
import ScalixityBlends from "../component/scalixityblends";
import Guarantee from "../component/guarantee";
import GrowthPartner from "../component/growthpartner";
import WhyChooseUs from "../component/whychooseus";
import ProcessBuilt from "../component/processbuilt";
import GlobalPartner from "../component/globalpartner";
import CTA from "../component/cta";
import Resource from "../component/resource";

export default function Home() {
  return (
    <>
      <Hero />
      <ScalixityBlends />
      <Guarantee />
      <GrowthPartner />
      <WhyChooseUs />
   
      <ProcessBuilt />
      <GlobalPartner />
      <Resource />
      <CTA />
    </>
  );
}
