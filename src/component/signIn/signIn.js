
function SignInPage(){
    return(
        <main class="singUp">
            <form action="#">
                <h1>Sign In to Dog Sitter </h1>
                <aside>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email"placeholder="Your Email"/>
                </aside>
                <aside>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"placeholder="Password"/>
                </aside>
                <aside>
                    <button>Sign In</button>
                    <p>Don't have an account <a href="/signUp.html">Create here</a></p>
                </aside>
            </form>
    </main>
    );
}

function App(){
    return(
        <React.Fragment>
            <SignInPage/>
        </React.Fragment>
    );
}

const rootSignInHTML = ReactDOM.createRoot(document.getElementById("root"));

rootSignInHTML.render(<App/>);