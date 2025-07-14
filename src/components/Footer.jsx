import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

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
            <img
              src={github}
              alt="GitHub logo"
              className="w-8 transition-all duration-300 hover:w-[35px] hover:shadow-lg rounded"
            />
          </a>
          <a href="https://www.linkedin.com/in/cyril-tamine-9068642b4/" target="_blank">
            <img
              src={linkedin}
              alt="LinkedIn logo"
              className="w-8 transition-all duration-300 hover:w-[35px] hover:shadow-lg rounded"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
