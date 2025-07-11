import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ContactPage(){
    return(
        <>
            <Header />

            <section className="bg-stone-700 rounded-sm m-40">
            <h1>Contact me !</h1>
            <form className="flex flex-col justify-center p-12">
                <label className="p-6">Email </label>
                <input className="p-6" type="email"  placeholder="Your email..."></input>
                <label className="p-6">Message</label>
                <textarea className="p-6" placeholder="Your message..." />

            </form>
            </section>
            <Footer />

        </>
    )
}