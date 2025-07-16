import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project/Project";
import { useTranslation } from "react-i18next";

export default function ProjectPage() {
    const { t } = useTranslation();
    
    const projects = t('projects.list', { returnObjects: true });

    return (
        <>
            <Header />
            <section className="flex justify-center flex-col items-center p-6">
                <h1 className="text-amber-500 text-xl font-bold">Projects</h1>
                <p>These projects demonstrate 
                    my expertise with practical 
                    examples of some of my work, 
                    including brief descriptions and links to code repositories 
                    and live demos. They showcase my ability to tackle intricate challenges, 
                    adapt to various technologies, and efficiently oversee projects.
                </p>
            </section>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((proj) => (
                    <Project
                        key={proj.id}
                        title={proj.title}
                        desc={proj.desc}
                        github={proj.github}
                        languages={proj.languages}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}