import '../../animations/banner-animation.css';

export function Banner () {
    return (
        <>
            <section id={"banner"} className={"relative bg-secondary-foreground h-96 z-0"}>
                <ul id={"animation-container h-full"} className={"circles"}>
                    {Array.from({length: 10}).map((_, i) => (
                        <li key={i}></li>
                    ))}
                </ul>
            </section>
        </>
    );
}