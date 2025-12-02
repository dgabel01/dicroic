"use client"
import LogoSlider from "@/components/LogoSlider";
import ProjectsHero from "@/components/ProjectsComponents/ProjectsHero";
import References from "@/components/ProjectsComponents/References";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsPage = () => {
    useEffect(() => {
        // give Next.js time to render the DOM + images
        const timer = setTimeout(() => {
          AOS.refreshHard(); // refresh all elements
        }, 200); // 200ms usually enough
        return () => clearTimeout(timer);
      }, []);

    return <main>
        <ProjectsHero />
        <References />
        <LogoSlider />
    </main>;
}

export default ProjectsPage;