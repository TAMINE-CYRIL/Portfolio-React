import Technologies from "../components/About/Technologies";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutPage(){
    return(
        <>
            <Header />
            <h1 className="text-xl font-semibold text-center">To know more about me :</h1>
            <p>I'm a computer science student currently studying at IUT Aix-Marseille, in Aix-en-Provence, 
                with a strong interest in software development, web technologies. 
                I enjoy turning ideas into practical applications and constantly seek opportunities to learn and grow through hands-on experience.
            </p>
            <p>
                I'm currently looking for opportunities in work-study where I can apply my skills,
                 contribute to meaningful projects, and continue learning from experienced professionals, while pursuing my education.

            </p>

            <p>Apart from coding, I also love </p>
            <ul>
                <li>Playing Games</li>
                <li>Reading</li>
                <li>Drawing</li>
            </ul>         
            <Technologies />   


            <Footer />
        </>
    )

}