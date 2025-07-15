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