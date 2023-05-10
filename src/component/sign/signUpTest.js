import React from "react";
// import $ from "jquery";
// import Header from "../header&footer/header";
// import FooterLinkList from "../header&footer/footerList";
// import FooterSNS from "../header&footer/footerSNS";


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

    handleSubmit = (event) => {
        // console.log("test");
        fetch("http://localhost:5000/form", {
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
                            <input type="password"  name="password" id="password"placeholder="Password" value={this.state.value} onChange={this.handleChange}/>
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
}

export default SignUpForm;