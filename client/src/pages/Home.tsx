import {Banner} from "../components/core/banner.tsx";
import {SkillCard} from "../components/skill-card.tsx";
import {Link} from "react-router-dom";
import {Button} from "../components/ui/button.tsx";


export function Home () {
    const skills = [
        'Object-Oriented Programming',
        'Systems Programming',
        'Algorithm Development',
        'Database Management',
        'Agile & Scrum Methodologies',
        'Time Management'];

    const languages = [
        'Java',
        'JavaScript',
        'TypeScript',
        'HTML5',
        'CSS',
        'TailwindCSS',
        'NodeJS',
        'C & C++',];

    const software = [
        'Git & Github',
        'Visual Studio Code',
        'IntelliJ & Webstorm',
        'Oracle SQL Developer',
        'JDBC',
        'Prisma',];


    return (
        <>

            <Banner />
            <section id={"about-section"} className={"flex flex-row mt-5 px-5"}>
                <div className="flex flex-col justify-evenly items-center">

                    <div className="flex flex-col items-center text-wrap max-w-lg mr-5">
                        <h1 className={"text-2xl underline underline-offset-5 mb-3"}>About Me</h1>
                        <p>I'm Charlotte, a Junior CS student at Worcester Polytechnic Institute.</p>
                        <p>Check out my skills and projects!</p>

                        <div id={"quick-links-container"} className={"flex flex-row items-center justify-evenly gap-4 mt-5"}>
                            <Link to={"https://github.com/Logan-Lutolf"}>
                                <img src={"../../public/github-logo.png"} width={35}/>
                            </Link>
                            <Link to={"https://www.linkedin.com/in/logan-lutolf"}>
                                <img src={"../../public/linkedin-logo.png"} width={35}/>
                            </Link>
                            <Link to={"mailto:loganlutolf@gmail.com"}>
                                <img src={"../../public/gmail-logo.png"} width={43}/>
                            </Link>
                        </div>
                    </div>

                    <Button className={"p-5 text-lg"}>
                        <a href={"/public/LoganLutolfResume.pdf"} download={"Logan Lutolf Resume"}>Download My Resume!</a>
                    </Button>

                </div>
                <div className="flex flex-row items-center gap-2 flex-1">
                    <SkillCard skills={skills} title={"Skills"}/>
                    <SkillCard skills={languages} title={"Programming Languages"}/>
                    <SkillCard skills={software} title={"Software"}/>
                </div>

            </section>
            <section id={"featured-projects-section"}>
                <h1>Featured projects</h1>
            </section>

        </>
    )
}