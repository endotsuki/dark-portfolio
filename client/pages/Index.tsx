import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Layout } from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  );
}
