import React from "react";
import $ from "jquery";
import Header from "../header&footer/header";
import FooterLinkList from "../header&footer/footerList";
import FooterSNS from "../header&footer/footerSNS";

function SignUpPage(){
    function formChange(){
        console.log("test");
        //setstate                    
        let name = $("#name").val();
        let email = $("#email").val();
        let password = $("#password").val();
        console.log(name,email,password);
    }
    
    return(
        <main className="sign">
            <section>
                <form action="#" onSubmit={(e)=>{
                    e.preventDefault();
                    
                }}>
                    <h1>Sign Up for Dog Owner</h1>
                    <aside>
                        <label htmlFor="name">Name</label>
                        <input type="text" required name="name" id="name" placeholder="Name" onChange={()=>{formChange()}}/>
                    </aside>
                    <aside>
                        <label htmlFor="email">Email</label>
                        <input type="text" required name="email" id="email"placeholder="Email" onChange={()=>{formChange()}}/>
                    </aside>
                    <aside>
                        <label htmlFor="password">Password</label>
                        <input type="password" required name="password" id="password"placeholder="Password" onChange={()=>{
                            if($("#password").val() != $("#cnf-password").val()){
                                $("#message").text("Password don't match!");
                                $("#message").css("color","red");    
                            }else{
                                $("#message").text("Password match!");
                                $("#message").css("color","green");
                            } 
                            formChange(); 
                        }}/>
                    </aside>
                        <label htmlFor="cnf-password">Confirm Password</label>
                        <input type="password" name="cnf-password" id="cnf-password"
                        placeholder="Confirm Password" onChange={()=>{
                            if($("#password").val() != $("#cnf-password").val()){
                                $("#message").text("Password don't match!");
                                $("#message").css("color","red");    
                            }else{
                                $("#message").text("Password match!");
                                $("#message").css("color","green");
                            }
                        }}/>
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

    return(
        <React.Fragment>
            <Header/>
            <SignUpPage/>
            <Footer/>
        </React.Fragment>
    );
}

export default SignUpApp;
