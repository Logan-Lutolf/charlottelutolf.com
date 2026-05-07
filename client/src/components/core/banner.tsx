import '../../animations/banner-animation.css';

export function Banner () {
    return (
        <>
            <section id={"banner"} className={"relative bg-secondary-foreground h-96"}>
                <ul id={"animation-container h-full"} className={"circles z-0"}>
                    {Array.from({length: 10}).map((_, i) => (
                        <li key={i}></li>
                    ))}
                </ul>
                <div className={"absolute inset-0 text-white flex flex-row justify-center align-middle font-semibold text-6xl items-center gap-5 z-10"}>
                   <div>
                       <h1>Hi, I'm Charlotte :P</h1>
                       <h2 className={"text-lg font-extralight pt-1 italic"}>Computer Science Student <span className={"px-2"}>•</span> Aspiring Software Engineer</h2>
                   </div>
                    <img src={"../../public/charlotte.jpg"} width={200} className={"rounded-full"}/>
                </div>
            </section>
        </>
    );
}