import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Works } from "@/components/sections/works";
import { TechStack } from "@/components/sections/tech-stack";
import { Services } from "@/components/sections/services";
import { Journey } from "@/components/sections/journey";
import { Guestbook } from "@/components/sections/guestbook";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <TechStack />
        <Services />
        <Journey />
        <Guestbook />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
