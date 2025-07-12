import { Link } from "react-router-dom";

export default function Header(){
    return(
    <header>
        <nav className="flex bg-slate-900 shadow-md justify-end">
            <ul className="md:flex items-center space-x-8 p-8">
                <Link to="/"><li className="text-lg font-bold text-white-600">Home</li></Link>
                <Link to="/about"><li className="text-lg font-bold text-white-600">About</li></Link>
                <Link to="/project"><li className="text-lg font-bold text-white-600">Project</li></Link>
                <Link to="/contact"><li className="text-lg font-bold text-white-600">Contact</li></Link>

            </ul>

        </nav>
    </header>   
    )
    
}