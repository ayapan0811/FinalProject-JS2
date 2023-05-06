
function SignUpPage(){
    return(
        <main className="singUp">
            <form action="#">
                <h1>Sing Up for Dog Sitter </h1>
                <aside>
                    <label htmlFor="fName">First Name</label>
                    <input type="text" name="fName" id="fName"placeholder="Name"/>
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
                    <input type="text" name="email" id="email"placeholder="Email"/>
                </aside>
                <aside>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"placeholder="Password"/>
                </aside>
                    <label htmlFor="cnf-password">Confirm Password</label>
                    <input type="password" name="cnf-password" id="cnf-password"
                    placeholder="Confirm Password"/>
                <aside className="sign-up">
                    <button>Sing Up</button>
                </aside>
            </form>
    </main>
    );
}
function App(){
    $("#root").ready(function(){
        //signUp
        $("form").submit(function(event){
            event.preventDefault();
            let name = $("#fName");
            let location = $("#location");
            let email = $("#email").val();
            let password = $("#password");
            let confirmPassword = $("#cnf-password");

            // Check that all required fields are filled out
            if(name == "" || location == "" || email == "" || password == "" || confirmPassword == ""){
                alert("All fields are required. Please complete the form");
                return false;
            }
            // Check that the password and confirm password fields match
            if(password != confirmPassword){
                alert("The password and confirm password fields do not match");
                return false;
            }
        });
        return true;


    });

    return(
        <React.Fragment>
            <SignUpPage/>
        </React.Fragment>
    );
}
const rootSignUpHTML = ReactDOM.createRoot(document.getElementById("root"));

rootSignUpHTML.render(<App/>);