function QuestionAndAnswer(){
    return(
        <section className="QandA" id="QandA">
            <h3>Q & A</h3>
            <section>
                <article>
                    <h4><span>Q: </span> Who is gonna provide pet food?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus itaque ipsum enim quam debitis voluptas, error velit sunt vitae nostrum nihil omnis voluptatem! Nesciunt, sint.
                    </p>
                </article>
                <article>
                    <h4><span>Q: </span> Do you accept animals other than dogs and cats?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus itaque ipsum enim quam debitis voluptas, error velit sunt vitae nostrum nihil omnis voluptatem! Nesciunt, sint.
                    </p>
                </article>
                <article>
                    <h4><span>Q: </span>Allergy, diseases?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus itaque ipsum enim quam debitis voluptas, error velit sunt vitae nostrum nihil omnis voluptatem! Nesciunt, sint.
                    </p>
                </article>
                <article>
                    <h4><span>Q: </span>Method of payment?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus itaque ipsum enim quam debitis voluptas, error velit sunt vitae nostrum nihil omnis voluptatem! Nesciunt, sint.
                    </p>
                </article>
            </section>
        </section>
    );
}
function Contact(){
    return(
        <section className="contact" id="contact">
            <h3>Contact</h3>
            <form action="#">
                <input type="text" name="name" id="name" placeholder="Your Name"/>
                <input type="mail" name="mail" id="mail" placeholder="Your Email"/>
                <textarea name="message" id="message" placeholder=""></textarea>
                <input type="submit" value="send message"/>
            </form>
        </section>
    );
}
function Location(){
    return(
        <section className="location">
            <h2>Thousands of pet sitters across Canada</h2>
            <article>
                <aside>
                    <h3>Vancouver</h3>
                    <ul>
                        <li>Vancouver</li>
                        <li>Richmond</li>
                        <li>Burnaby</li>
                        <li>North Vancouver</li>
                        <li>West Vancouver</li>
                    </ul>
                </aside>
                <aside>
                    <h3>Montreal</h3>
                    <ul>
                        <li>Downtown</li>
                        <li>South West</li>
                        <li>Plateau</li>
                        <li>Cote-des-Niege</li>
                    </ul>
                </aside>
                <aside>
                    <h3>Toronto</h3>
                    <ul>
                        <li>City of Toronto</li>
                        <li>Halton</li>
                        <li>Peel</li>
                        <li>York</li>
                        <li>Durham</li>
                    </ul>
                </aside>
                <i className="fa-solid fa-earth-americas"></i>
            </article>
        </section>
    );
}

function HomePage(){
    return(
        <main className="home-main">
            //serach-sitter
            //about
            //services
            //booking-flow
            //blog
            <QuestionAndAnswer/>
            <Contact/>
            <Location/>
        </main>
    );
}

function App(){

    //START:Q&A accordion part
    const h4s = document.querySelectorAll("h4");
    h4s.forEach(h4=>{
        h4.addEventListener("click",()=>{
            h4.parentNode.classList.toggle("appear");
            h4s.forEach(el=>{
                if(h4 !== el){
                    el.parentNode.classList.remove("appear");
                }
            });
        });
    });
    //END:Q&A accordion part

    return(
        <React.Fragment>
            <HomePage/>
        </React.Fragment>
    );
}


const rootProfileHTML = ReactDOM.createRoot(document.getElementById("root"));

rootProfileHTML.render(<App/>);