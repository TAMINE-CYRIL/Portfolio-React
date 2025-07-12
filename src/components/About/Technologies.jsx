import TechnologiesBlock from "./TechnologiesBlock";

export default function Technologies() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Mes Compétences Techniques
      </h2>
      
      <div className="space-y-10">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Langages de Programmation
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <TechnologiesBlock title="Java" />
            <TechnologiesBlock title="C++" />
            <TechnologiesBlock title="Python" />
            <TechnologiesBlock title="JavaScript" />
            <TechnologiesBlock title="HTML/CSS" />
            <TechnologiesBlock title="PHP" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Frameworks & Bibliothèques
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <TechnologiesBlock title="React" />
            <TechnologiesBlock title="Pandas" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Outils & Environnements
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <TechnologiesBlock title="Visual Studio Code" />
            <TechnologiesBlock title="Git/GitHub" />
            <TechnologiesBlock title="IntelliJ IDEA" />
            <TechnologiesBlock title="PyCharm" />
            <TechnologiesBlock title="Docker" />
            <TechnologiesBlock title="Figma" />
          </div>
        </div>
      </div>
    </section>
  );
}