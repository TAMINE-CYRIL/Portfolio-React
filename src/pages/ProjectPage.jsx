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
                <section className="relative overflow-hidden bg-gradient-to-br from-white via-amber-50/70 to-sky-100/70 px-6 py-16">
                <div className="absolute inset-0 overflow-hidden">
                </div>
                <div className="relative mx-auto max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
                        <span className="text-sm font-medium text-amber-700">Portfolio</span>
                    </div>
                    
                    <h1 className="mb-6 bg-gradient-to-r from-stone-900 via-amber-600 to-stone-900 bg-clip-text text-4xl font-bold text-transparent md:text-6xl animate-fade-in">
                        {t('nav.project')}
                    </h1>
                    
                    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-600 md:text-xl animate-fade-in-delay">
                        {t('projects.description')}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-6 mt-10">
                        <div className="rounded-2xl border border-stone-200/70 bg-white/85 px-6 py-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="text-2xl font-bold text-amber-600">{projects.length}</div>
                            <div className="text-sm text-stone-600">{t('nav.project')}</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-white to-stone-50/80 px-4 py-10">
            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            </section>
            <Footer />
        </>
    );
}
