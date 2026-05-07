import {Card, CardContent, CardHeader} from "./ui/card.tsx";


export function SkillCard (){
    const skills = [
        'Object-Oriented Programming',
        'Systems Programming',
        'Algorithm Development',
        'Database Management',
        'Agile & Scrum Methodologies'];

    return (
        <>
            <Card className={"bg-primary"}>
                <CardHeader>Skills</CardHeader>
                <CardContent>

                </CardContent>
            </Card>
        </>
    );
}