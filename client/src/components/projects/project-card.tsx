import {Card, CardContent, CardDescription, CardFooter, CardTitle} from "../ui/card.tsx";
import {Button} from "../ui/button.tsx";


type projectCardProps = {
    header: string;
    description: string;
    imgUrl: string;
    tags: string[];
}

export function ProjectCard (props: projectCardProps) {
    return (
        <>
            <Card className={"w-96 h-full border border-accent justify-between flex flex-col items-start gap-1 pb-3 transition duration-100 shadow-xl hover:-translate-x-2 hover:-translate-y-2 overflow-hidden"}>
                <img
                    src={props.imgUrl}
                    alt={props.header}
                    className="relative w-full object-cover h-56 "
                />

                <CardTitle className={"pt-3 px-3 font-semibold text-lg"}>{props.header}</CardTitle>
                <CardDescription className={"w-full px-3 font-extralight text-sm text-foreground pb-3 line-clamp-5 min-h-30"}>
                    {props.description}
                </CardDescription>
                <CardContent className={" px-3 flex flex-row w-full gap-2 justify-start"}>
                    {props.tags.map((tag) => (
                        <div className={"border border-accent text-accent font-light rounded-2xl py-1 px-3"}>
                            {tag}
                        </div>
                    ))}
                </CardContent>
                <CardFooter className={"px-3 flex flex-row w-full justify-center pt-1"}>
                    <Button className={"w-full cursor-pointer"}>Click Here to Expand...</Button>
                </CardFooter>

            </Card>
        </>
    );
}