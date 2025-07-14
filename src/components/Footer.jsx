import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="py-6 mt-12 shadow-[0_-4px_10px_rgba(0,0,0,0.15)]">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
        <p className="text-sm">
          Developed and designed by <span className="font-semibold">Cyril Tamine</span>
        </p>
        <p className="text-sm">© 2025 - Tous droits réservés</p>
        <div className="flex justify-center space-x-6 pt-2">
          <a href="https://github.com/TAMINE-CYRIL" target="_blank">
            <AiFillGithub className="text-3xl transition-transform duration-300 hover:scale-125" />
          </a>
          <a href="https://www.linkedin.com/in/cyril-tamine-9068642b4/" target="_blank">
            <AiFillLinkedin className="text-3xl transition-transform duration-300 hover:scale-125" />
          </a>
        </div>

      </div>
    </footer>
  );
}
