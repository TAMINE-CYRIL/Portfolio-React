import Footer from "../components/Footer"
import Header from "../components/Header"
import illustration from "../assets/illustration.jpg"
import { FaEnvelope, FaDownload } from "react-icons/fa"
import { useTranslation } from 'react-i18next'

export default function HomePage() {
    const { t } = useTranslation();

    const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/path/to/your/cv.pdf'; 
    link.download = 'Cyril_Tamine_CV.pdf';
    link.click();
    };

    return (
        <>
            <Header />
            <section className="flex flex-col md:flex-row justify-center items-center p-10 md:p-32 gap-10">
                <section className="flex flex-col max-w-xl">
                    <p className="text-gray-500 text-xl mb-2">{t('home.role')}</p>
                    <h1 className="font-montserrat text-3xl md:text-4xl font-semibold mb-4">
                        {t('home.greeting')} <span className="text-amber-500 font-bold">CYRIL TAMINE</span>
                    </h1>
                    <p className="font-inter text-gray-700 leading-relaxed text-md md:text-lg mb-6">
                        "{t('home.quote')}"
                    </p>
                    <section className="flex gap-4">
                        <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
                            <FaEnvelope />
                            {t('home.contactMe')}
                        </button>
                        <button onClick={handleDownloadCV} className="flex items-center gap-2 bg-white border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
                            <FaDownload />
                            {t('home.downloadCV')}
                        </button>
                    </section>
                </section>
                <img
                    className="w-[300px] md:w-[400px] h-auto"
                    src={illustration}
                    alt="Homepage Illustration"
                />
            </section>
            <Footer />
        </>
    )
}