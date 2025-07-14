import Footer from "../components/Footer"
import Header from "../components/Header"
import illustration from "../assets/illustration.jpg"
export default function HomePage(){
    return(
        <>
            <Header />
                <section className="flex justify-center items-center p-32 gap-x-10">
                    <section className="flex flex-col">
                        <h1 className="text-2xl font-bold dark:text-white mb-2"> Hello, World !</h1>
                        <h2 className="text-xl">I am <span className="orangeCustom font-bold">CYRIL TAMINE</span>.</h2>
                    </section>
                    <img className="w-96 h-auto md:w-64" src={illustration} alt="Homepage Illustration"/>
                </section>
            <Footer />
        </>

    )
}