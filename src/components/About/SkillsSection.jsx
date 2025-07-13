import SkillCard from "./SkillCard";

export default function SkillsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          My Technical Skills
      </h2>
      
      <div className="space-y-10">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Programming Languages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillCard title="Java" />
            <SkillCard title="C++" />
            <SkillCard title="Python" />
            <SkillCard title="JavaScript" />
            <SkillCard title="HTML/CSS" />
            <SkillCard title="PHP" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Frameworks & Libraries
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillCard title="React" />
            <SkillCard title="Pandas" />
            <SkillCard title="TailwindCSS" />
            <SkillCard title="Matplotlib" />
            <SkillCard title="Swiper JS" />


          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Tools & Environments
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillCard title="Visual Studio Code" />
            <SkillCard title="Git/GitHub" />
            <SkillCard title="IntelliJ IDEA" />
            <SkillCard title="PyCharm" />
            <SkillCard title="Docker" />
            <SkillCard title="Figma" />
            <SkillCard title="WordPress" />

          </div>
        </div>
      </div>
    </section>
  );
}