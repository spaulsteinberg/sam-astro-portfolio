import { h } from "preact";
import "./Nav.scss"

const NAV_LINKS = [
    {
        route: "/",
        title: "Work"
    },
    {
        route: "/about",
        title: "About"
    },
    {
        route: "/experience",
        title: "Experience"
    },
    {
        route: "/contact",
        title: "Contact"
    }
]

const NavLinkItem = ({ route, title }) => {
    return (
        <li class="nav-item">
            <a class="nav-link text-white px-4" href={route}>
                {title}
            </a>
        </li>
    )
}

const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navBackground">
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ marginLeft: '1rem' }}
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    {
                        NAV_LINKS.map(link => <NavLinkItem key={link.title} route={link.route} title={link.title} />)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
