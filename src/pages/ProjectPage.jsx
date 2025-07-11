import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project/Project";
import projet from "../components/Project/projectData"

export default function ProjectPage(){
    return(
        <>
            <Header />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projet.map((proj) => (
                        <Project
                        key={proj.id}
                        title={proj.title}
                        desc={proj.desc}
                        github={proj.github} />

                    ))}
                </div>

            <Footer />
        </>

    )
}