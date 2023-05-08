import React from "react";
import $ from "jquery";
import Header from "./header";
import FooterLinkList from "./footerList";
import FooterSNS from "./footerSNS";

function SignUpPage(){
    return(
        <main className="sign">
            <section>
                <form action="#">
                    <h1>Sign Up for Dog Owner</h1>
                    <aside>
                        <label htmlFor="name">Name</label>
                        <input type="text" required name="name" id="name" placeholder="Name"/>
                    </aside>
                    <aside>
                        <label htmlFor="location">Location</label>
                        <select name="location" id="location">
                            <option value="null"></option>
                            <option value="Vancouver">Vancouver</option>
                            <option value="Montreal">Montreal</option>
                            <option value="Toronto">Toronto</option>
                        </select>
                    </aside>
                    <aside>
                        <label htmlFor="email">Email</label>
                        <input type="text" required name="email" id="email"placeholder="Email"/>
                    </aside>
                    <aside>
                        <label htmlFor="password">Password</label>
                        <input type="password" required name="password" id="password"placeholder="Password"/>
                    </aside>
                        <label htmlFor="cnf-password">Confirm Password</label>
                        <input type="password" name="cnf-password" id="cnf-password"
                        placeholder="Confirm Password"/>
                        <p id="message"></p>
                    <aside className="sign-up">
                        <button><a>Sign Up</a></button>
                    </aside>
                </form>
            </section>
    </main>
    );
}

//START: footer part
const proFooter = [
    {name:"Home", link:"/"},
    {name:"Search Sitter", link:"/list"},
    {name:"Sign In", link:"#"}
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

function SignUpApp(){
    $("#root").ready(function(){
        //signUp
        $("form").submit(function(event){
            event.preventDefault();
            let name = $("#name");
            let location = $("#location");
            let email = $("#email").val();
            let password = $("#password");
            let confirmPassword = $("#cnf-password");
            let message = $("#message");

            // Check that the password and confirm password fields match
            // if(password != confirmPassword){
            //     alert("The password and confirm password fields do not match");
            //     return false;
            // }

            // Check that the password and confirm password
            if($("#password") == $("#cnf-password")){
                $("#message").text("Password match!");
                $("#message").css("color","green");
            }else{
                $("#message").text("Password don't match!");
                $("#message").css("color","red");
            }
        });
        return true;
    });

    return(
        <React.Fragment>
            <Header/>
            <SignUpPage/>
            <Footer/>
        </React.Fragment>
    );
}

export default SignUpApp;
