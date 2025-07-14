import Footer from "../components/Footer";
import Header from "../components/Header";
import icon from "../assets/iconAbout.png";
import SkillsSection from "../components/About/SkillsSection";

export default function AboutPage(){
    return(
        <>
            <Header />
            <section className="flex flex-col md:flex-row items-center gap-8 p-14 justify-center">
                <img className="w-48 h-auto md:w-64" src={icon} alt="Personal Icon" />

                <div className="flex flex-col gap-4 max-w-2xl">
                    <h1 className="text-2xl font-bold text-center">
                    Get to Know <span className="text-amber-500">Me</span>
                    </h1>

                    <p>
                    I'm a passionate Computer Science student currently enrolled at IUT Aix-Marseille in Aix-en-Provence.
                    I have a strong interest in software development and web technologies. I love transforming ideas into
                    functional applications and am always looking for new ways to learn and grow through hands-on experience.
                    </p>

                    <p>
                    I'm actively seeking a work-study opportunity where I can contribute to impactful projects,
                    apply my technical skills, and learn from experienced professionals while continuing my academic journey.
                    </p>

                    <div>
                    <p>Beyond coding, I also enjoy:</p>
                    <ul className="list-disc list-inside">
                        <li>Playing video games</li>
                        <li>Reading</li>
                        <li>Drawing</li>
                    </ul>
                    </div>
                </div>
            </section>

 
            <SkillsSection />   


            <Footer />
        </>
    )

}