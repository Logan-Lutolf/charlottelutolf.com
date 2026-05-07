import {Link} from "react-router-dom";


export function Navbar () {
    return (
        <>
            <section id={"header"}
                     className={"flex flex-row justify-between items-center bg-primary " +
                         "h-16 px-5 text-background font-semibold text-white text-xl"}>
                <div>
                    Charlotte Lutolf
                </div>

                <div id={"nav-links"} className={"flex flex-row justify-evenly gap-10"}>
                    <Link to={"/"}> Home </Link>
                    <a>About</a>
                    <Link to={"/projects"}>Projects</Link>
                    <Link to={"/testing"}>Testing</Link>
                </div>
            </section>
        </>

    );
}