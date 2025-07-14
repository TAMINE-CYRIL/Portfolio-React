import Footer from "../components/Footer"
import Header from "../components/Header"
import illustration from "../assets/illustration.jpg"
import { FaEnvelope, FaDownload } from "react-icons/fa"
import Education from "../components/Home/Education"

export default function HomePage() {
    return (
        <>
            <Header />
            <section className="flex flex-col md:flex-row justify-center items-center p-10 md:p-32 gap-10">
                <section className="flex flex-col max-w-xl">
                    <p className="text-gray-500 text-xl mb-2">Web Developer</p>
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                        Hi, I am <span className="text-amber-500 font-bold">CYRIL TAMINE</span>
                    </h1>
                    <p className="text-gray-700 leading-relaxed text-md md:text-lg mb-6">
                        “Front-end development is the art of bringing logic to life. <br />
                        It’s the bridge between what is imagined and what is felt. <br />
                        It demands empathy, precision, and the humility to know <br />
                        that perfection is never finished — only deployed.”
                    </p>
                    <section className="flex gap-4">
                        <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
                            <FaEnvelope />
                            Contact Me
                        </button>
                        <button className="flex items-center gap-2 bg-white border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
                            <FaDownload />
                            Download CV
                        </button>
                    </section>
                </section>
                <img
                    className="w-[300px] md:w-[400px] h-auto"
                    src={illustration}
                    alt="Homepage Illustration"
                />
            </section>
            <section className="flex flex-col justify-center items-center">
                <h1>Education </h1>
                <Education />
            </section>
            <Footer />
        </>
    )
}
