import '../../animations/banner-animation.css';

export function Banner () {
    return (
        <>
            <section id={"banner"} className={"bg-secondary-foreground h-96"}>
                <ul id={"animation-container"} className={"circles"}>
                    {Array.from({length: 10}).map((_, i) => (
                        <li key={i} className={"shape"}></li>
                    ))}
                </ul>
            </section>
        </>
    );
}