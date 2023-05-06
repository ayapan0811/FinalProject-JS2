import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header(){
    return(
        <header>
            <section className="header-container">
                <section>
                    <a>
                        <FontAwesomeIcon icon={faDog}/>
                    </a>
                    <h1>Bawwau Sitter</h1>
                </section>
                <aside className="hg-menu">
                    <FontAwesomeIcon icon={faBars} id="open"/>
                </aside>
                <article className="overlay">
                    <FontAwesomeIcon icon={faXmark} id="close"/>
                    <nav>
                        <ul>
                            <li><a href="#services">Our Service</a></li>
                            <li><a href="sitterlist.html">Sitter List</a></li>
                            <li><a href="signUp.html">Sign Up</a></li>
                            <li><a href="signIn.html">Sign In</a></li>
                        </ul>
                    </nav>
                </article>
            </section>
        </header>
    );
}

export default Header;