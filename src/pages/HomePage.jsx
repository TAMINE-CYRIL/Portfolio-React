import Footer from "../components/Footer"
import Header from "../components/Header"

export default function HomePage(){
    return(
        <>
            <Header />
            <h1 className="text-3xl font-bold text-white dark:text-white mb-2"> Hello, World !</h1>
            <h1>I am <span className="text-yellow-400">CYRIL TAMINE</span>.</h1>
            <Footer />
        </>

    )
}