import {Banner} from "../components/core/banner.tsx";
import {SkillCard} from "../components/skill-card.tsx";
import {Link} from "react-router-dom";
import {Button} from "../components/ui/button.tsx";
import {ProjectCard} from "../components/projects/project-card.tsx";


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

    const projects = [
        {
            header: "Hospital Database",
            description: "Designed and implemented a mock hospital database complete with 13 relations, 20+ SQL queries, views, and triggers. Also utilized JDBC to construct a program to retrieve patient, doctor, and admission data.",
            imgUrl: "/projects/erd.png",
            tags: ["SQL", "Java", "JDBC"]
        },
        {
            header: "Fruit Picking Robot",
            description: "Collaborated with a team of four to design and build a robot capable of semi-autonomously picking artificial fruits from PVC pipe “trees” using a proportional control algorithm.",
            imgUrl: "/projects/fruit-picking-robot.png",
            tags: ["Python"]
        },
    ];

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

            <section id={"featured-projects-section"} className={"flex flex-row px-5 justify-between my-24"}>
                <div className="flex flex-row items-center gap-5 w-fit">
                    {projects.map((proj) => (
                        <ProjectCard
                            header={proj.header}
                            description={proj.description}
                            imgUrl={proj.imgUrl}
                            tags={proj.tags}/>
                    ))}
                </div>

                <div className="flex flex-col justify-center items-center gap-10">

                    <div className="flex flex-col items-center text-wrap max-w-lg ml-5">
                        <h1 className={"text-2xl underline underline-offset-5 mb-3"}>Featured Projects</h1>
                        <p>Here are some of my recent projects. Click the button below for more!</p>
                    </div>

                    <Button className={"p-5 text-lg"}>
                        <Link to={"/projects"}>Click to see more...</Link>
                    </Button>

                </div>
            </section>















            {/*<section id={"featured-projects-section"} className={""}>*/}

            {/*    <div className={"flex flex-row items-center gap-5 w-fit"}>*/}
            {/*        <ProjectCard*/}
            {/*            header={projects[0].header}*/}
            {/*            description={projects[0].description}*/}
            {/*            imgUrl={projects[0].imgUrl}*/}
            {/*            tags={projects[0].tags}*/}
            {/*        />*/}
            {/*        <ProjectCard*/}
            {/*            header={projects[1].header}*/}
            {/*            description={projects[1].description}*/}
            {/*            imgUrl={projects[1].imgUrl}*/}
            {/*            tags={projects[1].tags}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</section>*/}

        </>
    )
}