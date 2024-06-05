import { h } from "preact";
import "./Nav.scss"

const NAV_LINKS = [
    {
        route: "/experience",
        title: "Experience"
    },
    {
        route: "/contact",
        title: "Contact"
    }
]

const DROPDOWN_NAV_LINKS = [
    {
        route: "/project/a2z",
        title: "a2z"
    },
    {
        route: "/project/table-management",
        title: "RTMS"
    },
    {
        route: "/project/rAdmin",
        title: "rAdmin"
    },
    {
        route: "/project/stocktrace",
        title: "StockTrace"
    },
    {
        route: "/project/github-personal",
        title: "Github Stats"
    },
    {
        route: "/project/animations",
        title: "SVG Animations"
    },
    {
        route: "/project/portfolio",
        title: "Portfolio"
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
                    <NavLinkItem route="/" title="Home" />
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle nav-link text-white px-4" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Projects
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            {
                                DROPDOWN_NAV_LINKS.map(link => <a class="dropdown-item" href={link.route}>{link.title}</a>)
                            }
                        </div>
                    </li>
                    {
                        NAV_LINKS.map(link => <NavLinkItem key={link.title} route={link.route} title={link.title} />)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
