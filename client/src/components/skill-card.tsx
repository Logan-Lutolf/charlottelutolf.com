import {Card, CardContent, CardHeader} from "./ui/card.tsx";


type skillCardProps = {
    skills: string[];
    title: string;
}

export function SkillCard ({ skills, title } : skillCardProps) {
    return (
        <>
            <div className={"w-1/5 flex flex-col pl-2 bg-"}>

                <Card className={"bg-secondary-foreground flex flex-col gap-3 border border-accent max-h-96"}>
                    <CardHeader className={"text-background text-lg"}>{title}</CardHeader>
                    <CardContent className={"flex flex-col gap-2 text-background overflow-y-scroll"}>
                        {skills.map((skill) => (
                            <div className={"bg-secondary border-accent flex flex-row justify-start p-3 rounded-2xl"}>
                                {skill}
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

        </>
    );
}