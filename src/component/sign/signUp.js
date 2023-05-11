import React from "react";
import $ from "jquery";
import Header from "../header&footer/header";
import FooterLinkList from "../header&footer/footerList";
import FooterSNS from "../header&footer/footerSNS";


const listFooter = [
    {name:"Top", link:"#header"},
    {name:"Home", link:"/"},
    {name:"Search Sitter", link:"/list"},
    {name:"Sign In", link:"/signIn"}
]

function Footer(){
    return(
        <footer>
            <section>
                <FooterSNS/>
                <section className="link">
                    <h4>Quick Links</h4>
                    <ul>
                        {listFooter.map((listFoot)=>(
                            <FooterLinkList
                                key={listFoot.name}
                                name={listFoot.name}
                                link={listFoot.link}
                            />
                        ))}
                    </ul>
                </section>
            </section>
            <p>Copyright &copy; Bowwow sitter service </p>
        </footer>
    );
}

class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            password:""
        };
        // this.setState = this.setState;
        // this.handleChange = this.handleChange;
        // this.handleSubmit = this.handleSubmit;
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.value);
    }

    confirmation = ()=>{
        if($("#password").val() != $("#cnf-password").val()){
            $("#message").text("Password don't match!");
            $("#message").css("color","red");    
        }else{
            $("#message").text("Password match!");
            $("#message").css("color","green");
        }
    }
 
    bothFunction = (event)=>{
        this.handleChange(event);
        this.confirmation(event);
    }

    handleSubmit = (event) => {
        // console.log("test");
        fetch("http://localhost:3200/form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state)
            },
        ).then(function(response) {
            console.log(response);
            return response.json()  
        })
        event.preventDefault();
    }

    render(){
        return(
            <>
            <Header/>
            <main className="sign">
                <section>
                    <form action="#" onSubmit={this.handleSubmit}>
                        <h1>Sign Up for Dog Owner</h1>
                        <aside>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Name" value={this.state.value} onChange={this.handleChange}/>
                        </aside>
                        <aside>
                            <label htmlFor="email">Email</label>
                            <input type="text"  name="email" id="email"placeholder="Email" value={this.state.value} onChange={this.handleChange}/>
                        </aside>
                        <aside>
                            <label htmlFor="password">Password</label>
                            <input type="password"  name="password" id="password"placeholder="Password" value={this.state.value} onChange={this.bothFunction}/>
                        </aside>
                            <label htmlFor="cnf-password">Confirm Password</label>
                            <input type="password" name="cnf-password" id="cnf-password"
                            placeholder="Confirm Password" onChange={this.confirmation}/>
                            <p id="message"></p>
                        <aside className="sign-up">
                            <button type="submit"><a href="/signIn">Sign Up</a></button>
                        </aside>
                    </form>
                </section>
        </main>
        <Footer/>
        </>
        );
    }
}

export default SignUpForm;