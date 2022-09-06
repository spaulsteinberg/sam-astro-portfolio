import { h } from "preact";
import "./Nav.scss"

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
                style={{marginLeft: '1rem'}}
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link text-white px-4" href="/">
                            Work
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white px-4" href="/about">
                            About
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white px-4" href="/experience">
                            Experience
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
