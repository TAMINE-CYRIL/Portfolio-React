import Footer from "../components/Footer";
import Header from "../components/Header";
import icon from "../assets/iconAbout.png";
import SkillsSection from "../components/About/SkillsSection";
import { useTranslation } from "react-i18next";

export default function AboutPage(){

    const {t} = useTranslation();

    return(
        <>
            <Header />
            <section className="flex flex-col md:flex-row items-center gap-8 p-14 justify-center">
                <img className="w-48 h-auto md:w-64" src={icon} alt="Personal Icon" />

                <div className="flex flex-col gap-4 max-w-2xl">
                    <h1 className="text-2xl font-bold text-center">
                    {t('about.title')}<span className="text-amber-500">{t('about.me')}</span>
                    </h1>

                    <p>
                        {t('about.description1')}
                    </p>

                    <p>
                        {t('about.description2')}
                    </p>

                    <div>
                    <p>{t('about.beyondCoding')}</p>
                    <ul className="list-disc list-inside">
                        <li>{t('about.hobbies.gaming')}</li>
                        <li>{t('about.hobbies.reading')}</li>
                        <li>{t('about.hobbies.drawing')}</li>
                    </ul>
                    </div>
                </div>
            </section>

 
            <SkillsSection />   


            <Footer />
        </>
    )

}