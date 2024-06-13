import { FC } from "react";
import HeroLeft from "~/components/ui/hero/HeroLeft";
import HeroRight from "~/components/ui/hero/HeroRight";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
};

export default Hero;
