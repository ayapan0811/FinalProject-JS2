import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header(){
    return(
        <header id="header">
            <section className="header-container">
                <section>
                    <a>
                        <FontAwesomeIcon icon={faDog}/>
                    </a>
                    <h1>Bawwau Sitter</h1>
                </section>
                <div className="pc-menu">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/list">Sitter List</a></li>
                            <li><a href="/signUp">Sign Up</a></li>
                            <li><a href="/signIn">Sign In</a></li>
                            <li><a href="/shop">Shop</a></li>
                        </ul>
                    </nav>
                </div>
                <aside className="hg-menu">
                    <FontAwesomeIcon icon={faBars} id="open" onClick={()=>{
                        $(".overlay").addClass("show");
                        $("#open").removeClass("show");
                    }}/>
                </aside>
                <article className="overlay">
                    <FontAwesomeIcon icon={faXmark} id="close" onClick={()=>{
                        $(".overlay").removeClass("show");
                        $("#open").addClass("show");
                    }}/>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/list">Sitter List</a></li>
                            <li><a href="/signUp">Sign Up</a></li>
                            <li><a href="/signIn">Sign In</a></li>
                            <li><a href="/shop">Shop</a></li>
                        </ul>
                    </nav>
                </article>
            </section>
        </header>
    );
}

export default Header;