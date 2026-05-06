

export function Navbar () {
    return (
        <>
            <section id={"header"}
                     className={"flex flex-row justify-between items-center bg-primary h-16 px-5 text-background font-semibold text-white"}>
                <div>
                    Charlotte Lutolf
                </div>

                <div id={"nav-links"} className={"flex flex-row justify-evenly gap-10"}>
                    <a>Home</a>
                    <a>About</a>
                    <a>Projects</a>
                </div>
            </section>
        </>

    );
}