import React from "react";
import SignInCheck from "./signInCheck";
import Header from "../header&footer/header";
import FooterSNS from "../header&footer/footerSNS";
import FooterLinkList from "../header&footer/footerList";

function SignInPage(){
    return(
        <main className="sign">
            <section>
                <form action="#">
                    <h1>Sign In to Dog Owner</h1>
                    <aside>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder="Type Your Email"/>
                    </aside>
                    <aside>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Type Your Password"/>
                    </aside>
                    <aside>
                        <button type="submit"><a id="success">Sign In</a></button>
                    </aside>
                    <p>Don't have an account <a href="/signUp">Create here</a></p>
                </form>
            </section>
        </main>
    );
}

//START: footer part
const proFooter = [
    {name:"Top", link:"#header"},
    {name:"Home", link:"/"},
    {name:"Search Sitter", link:"/list"},
    {name:"Sign Up", link:"/signUp"},
    {name:"Shop", link:"/shop"}
]
function Footer(){
    return(
        <footer>
            <section>
                <FooterSNS/>
                <section className="link">
                    <h4>Quick Links</h4>
                    <ul>
                        {proFooter.map((proFoot)=>(
                            <FooterLinkList
                                key={proFoot.name}
                                name={proFoot.name}
                                link={proFoot.link}
                            />
                        ))}
                    </ul>
                </section>
            </section>
            <p>Copyright &copy; Bawwow sitter service </p>
        </footer>
    );
}
//END: footer part

function SignInApp(){
    SignInCheck();
    return(
        <React.Fragment>
            <Header/>
            <SignInPage/>
            <Footer/>
        </React.Fragment>
    );
}

export default SignInApp;