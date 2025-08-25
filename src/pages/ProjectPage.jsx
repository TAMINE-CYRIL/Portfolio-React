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
                <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-6 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                </div>
                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                        <span className="text-amber-600 dark:text-amber-400 text-sm font-medium">Portfolio</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-amber-600 to-gray-900 dark:from-white dark:via-amber-400 dark:to-white bg-clip-text text-transparent mb-6 animate-fade-in">
                        {t('nav.project')}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fade-in-delay">
                        {t('projects.description')}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-6 mt-10">
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-all 300 hover:shadow-xl">
                            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{projects.length}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">{t('nav.project')}</div>
                        </div>
                    </div>
                </div>
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