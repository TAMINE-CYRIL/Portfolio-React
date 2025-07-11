import TechnologiesBlock from "./TechnologiesBlock";

export default function Technologies(){
    return(
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <h1>Programming Languages</h1>
                <TechnologiesBlock title="Java" />
                <TechnologiesBlock title="C++" />
                <TechnologiesBlock title="Python" />
                <TechnologiesBlock title="HTML" />
                <TechnologiesBlock title="CSS" />
                <TechnologiesBlock title="PHP" />
                <TechnologiesBlock title="React" />

            <h1>Tools</h1>
                <TechnologiesBlock title="Visual Studio Code" />
                <TechnologiesBlock title="PyCharm" />
                <TechnologiesBlock title="IntelliJ Idea" />
                <TechnologiesBlock title="React" />






        </section>
    )

}