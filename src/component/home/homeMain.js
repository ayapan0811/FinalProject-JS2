function SearchSitter(){
    return(
        <section className="search-sitter">
            <section className="ss-container">
                <article>
                    <h2>Loving pet care in your neighborhood</h2>
                    <p> Book trusted sitters and dog walkers</p>
                    <a href="sitterlist.html">Search Sitter</a>
                </article>
                <form action="#">
                    <section>
                        <article className="dogorcat">
                            <label htmlFor="dogcat">I'm looking for service for my:</label>
                            <aside>
                                <input type="checkbox" name="dog" id="dog"/>
                                <small>Dog</small>
                            </aside>
                            <aside>
                                <input type="checkbox" name="cat" id="cat"/>
                                <small>Cat</small>
                            </aside>
                        </article>
                        <article>
                            <label htmlFor="select-service">Service:</label>
                            <select name="select-service" id="select-service">
                                <option value="none" >Select Service</option>
                                <option value="boarding">Boarding</option>
                                <option value="dogwalking">Dog Walking</option>
                            </select>
                        </article>
                        <article>
                            <label htmlFor="select-location">Location:</label>
                            <select name="location" id="location">
                                <option value="none" disabled>Select your location</option>
                                <optgroup label="Vancouver">
                                    <option value="Vancouver">Vancouver</option>
                                    <option value="Richmond">Richmond</option>
                                    <option value="Burnaby">Burnaby</option>
                                    <option value="NorthVancouver">North Vancouver</option>
                                    <option value="WestVancouver">West Vancouver</option>
                                </optgroup>
                                <optgroup label="Montreal">
                                    <option value="Downtown">Downtown</option>
                                    <option value="SouthWest">South West</option>
                                    <option value="Plateau">Plateau</option>
                                    <option value="Cote-des-Niege">Cote-des-Niege</option>
                                </optgroup>
                                <optgroup label="Toronto">
                                    <option value="CityOfToronto">City of Toronto</option>
                                    <option value="Halton">Halton</option>
                                    <option value="Peel">Peel</option>
                                    <option value="York">York</option>
                                    <option value="Durham">Durham</option>
                                </optgroup>
                            </select>
                        </article>
                        <article>
                            <aside>
                                <label htmlFor="day">For which days?</label>
                            <select name="day" id="day">
                                <option value="none" disabled>Select day</option>
                                <option value="Sunday">Sunday</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                            </select>
                            </aside>
                        </article>
                        <article>
                            <label htmlFor="select-size">My Dog Size</label>
                            <select name="select-size" id="select-size">
                                <option value="none" disabled>Select your dog size</option>
                                <option value="-10">~10kg</option>
                                <option value="11-25">10~25kg</option>
                                <option value="25-45">25~45kg</option>
                                <option value="46-">45kg~</option>
                            </select>
                        </article>
                    </section>
                </form>
            </section>
        </section>  
    );
}

function About(){
    return(
        <section className="about">
            <section>
                <h3>About us</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum amet quisquam dolorum inventore facilis officiis odio aliquam voluptatem. Velit reprehenderit deleniti temporibus, similique tenetur laborum facere nobis rem obcaecati error necessitatibus unde quis quod ullam est ex nam optio atque, ipsa praesentium, ducimus nulla!
                </p>
            </section>
        </section>
    );
}

function Services(){
    return(
        <section className="services" id="services">
        <h3>Services for every dog and cat</h3>
        <section>
            <article className="service">
                <aside>
                    <i className="fa-solid fa-house-chimney-window"></i>
                    <section>
                        <h4>Boarding</h4>
                        <p>
                            Your pets stay overnight in your sitter's home. They'll be treated like part of the family in a comfortable environment.
                        </p>
                    </section>
                </aside>
                <aside>
                    <i className="fa-solid fa-dog"></i>
                    <section>
                        <h4>Dog Walking</h4>
                        <p>
                            Your dog gets a walk around your neighborhood. Perfect for busy days and dogs with extra energy to burn.
                        </p>
                    </section>
                </aside>
            </article>
            <article className="trust-sitter">
                <section>
                    <aside>
                        <i className="fa-solid fa-shield-dog"></i>
                        <h4>Pet sitters you can trust</h4>
                    </aside>
                    <ul>
                        <li>
                            <i className="fa-regular fa-square-check"></i>
                            <p>All sitters pass a background check</p>
                        </li>
                        <li>
                            <i className="fa-regular fa-square-check"></i>
                            <p>All sitters provide a detailed profile and personal information</p>
                        </li>
                        <li>
                            <i className="fa-regular fa-square-check"></i>
                            <p>All sitters are approved by our team of sitter specialists</p>
                        </li>
                    </ul>
                </section>
            </article>
        </section>
    </section>
    );
}

function BookingFlow(){
    return(
        <section className="booking-flow">
            <section>
                <h3>Here's how works</h3>
                <p>
                    Search and connect with trusted pet sitters. It's easy as 1, 2, 3.
                </p>
            </section>
            <article>
                <aside>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <h4>1. Search</h4>
                    <p>
                        Read verified reviews by pet parents like you and choose a sitter who’s a great match for you and your pets.
                    </p>
                </aside>
                <aside>
                    <i className="fa-solid fa-calendar-days"></i>
                    <h4>2. Arrange a meet & greet</h4>
                    <p>
                        Get to know your sitter in person, obligation-free.
                    </p>
                </aside>
                <aside>
                    <i className="fa-regular fa-credit-card"></i>
                    <h4>3.Pay</h4>
                    <p>
                        Book your sitter through our safe online system, with flexible cancellations in case your plans change.
                    </p>
                </aside>
            </article>
        </section>
    );
}

function Blog(){
    return(
        <section className="blog">
        <h3>Blog</h3>
        <section>
            <figure>
                <img src="http://127.0.0.1:5500/src/img/home-img/home-dog1.jpg" alt="dog1"/>
                <aside>
                    <i className="fa-regular fa-clock"></i>
                    <p>23/04/2023</p>
                </aside>
                <figcaption>
                    <h4>Communication skills for pet sitters</h4>
                    <p>
                        Communicating skills are essential for pet sitters to have when building trust with clients and ensuring the safety and well-being of their furry companions.
                    </p>
                </figcaption>
                <a href="#">Read More</a>
            </figure>
            <figure>
                <img src="http://127.0.0.1:5500/src/img/home-img/home-dog2.jpg" alt="dog2"/>
                <aside>
                    <i className="fa-regular fa-clock"></i>
                    <p>12/04/2023</p>
                </aside>
                <figcaption>
                    <h4>Reasons to become a pet sitter</h4>
                    <p>
                        There are many reasons why pet sitting is a fulfilling and fun activity to get into.
                        Here are just some of the reasons why you might consider jumping on board the Bawwow pet-sitting community:
                    </p>
                </figcaption>
                <a href="#">Read More</a>
            </figure>
            <figure>
                <img src="http://127.0.0.1:5500/src/img/home-img/home-dog3jpg.jpg" alt="dog3"/>
                <aside>
                    <i className="fa-regular fa-clock"></i>
                    <p>05/04/2023</p>
                </aside>
                <figcaption>
                    <h4>Dog sitters | how to greet a new dog</h4>
                    <p>
                        As a dog sitter, one of the most important things you will need to do is introduce yourself to the new dogs that come into your care. This process is crucial because it sets the tone for the rest of your time together and helps ensure that the dog is comfortable with you.
                    </p>
                </figcaption>
                <a href="#">Read More</a>
            </figure>
        </section>
    </section>
    );
}

function QuestionAndAnswer(){
    return(
        <section className="QandA" id="QandA">
            <h3>Q & A</h3>
            <section>
                <article>
                    <h4><span>Q: </span> Who is gonna provide pet food?</h4>
                    <p>
                        Basically, owners have to bring the food. If it does not seem to be possible, please ask the sitter for the preparation of the food before the confirmation of the contract.
                    </p>
                </article>
                <article>
                    <h4><span>Q: </span> Do you accept animals other than dogs and cats?</h4>
                    <p>
                        No. If you want to leave an animal except dogs and cats, please find a pet hotel. We are not responsible for any issues other than dogs and cats.
                    </p>
                </article>
                <article>
                    <h4><span>Q: </span>Allergy, diseases?</h4>
                    <p>
                        If your pets have allergies or diseases, please tell the sitters before giving the confirmation. If the sitter find the disease heavy, they can cancel the confirmation beforehands.
                    </p>
                </article>
                <article>
                    <h4><span>Q: </span>Method of payment?</h4>
                    <p>
                        This is up to the users. We are not responsible for the method of pay. If you have any problems, please contact us.
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
                <textarea name="message" id="message" placeholder="Type your message"></textarea>
                <input type="submit" value="Send Message"/>
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
            <SearchSitter/>
            <About/>
            <Services/>
            <BookingFlow/>
            <Blog/>
            <QuestionAndAnswer/>
            <Contact/>
            <Location/>
        </main>
    );
}

function App(){

    $("#root").ready(function(){

        //START:Q&A accordion part
        const h4s = document.querySelectorAll("h4");
        h4s.forEach((h4)=>{
            h4.addEventListener("click",()=>{
                h4.parentNode.classList.toggle("appear");
                h4s.forEach((el)=>{
                    if(h4 !== el){
                        el.parentNode.classList.remove("appear");
                    }
                });
            });
        });
        //END:Q&A accordion part
    });

    return(
        <React.Fragment>
            <HomePage/>
        </React.Fragment>
    );
}


const rootHomePageHTML = ReactDOM.createRoot(document.getElementById("root"));

rootHomePageHTML.render(<App/>);