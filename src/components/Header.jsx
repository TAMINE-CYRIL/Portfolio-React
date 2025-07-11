import { Link } from "react-router-dom";

export default function Header(){
    return(
    <header>
        <nav>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>

        </nav>
    </header>   
    )
    
}