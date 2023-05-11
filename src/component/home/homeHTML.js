import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyWindow, faDog, faShieldDog, faMagnifyingGlass, faCalendarDays, faEarthAmericas, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck, faCreditCard, faClock } from "@fortawesome/free-regular-svg-icons";
import dogImg1 from "../../img/home-img/home-dog1.jpg";
import dogImg2 from "../../img/home-img/home-dog2.jpg";
import dogImg3 from "../../img/home-img/home-dog3.jpg";
import Header from "../header&footer/header";
import FooterLinkList from "../header&footer/footerList";
import FooterSNS from "../header&footer/footerSNS";

function SearchSitter(){
    return(
        <section className="search-sitter">
            <section className="ss-container">
                <article>
                    <h2>Hello pet parents! Welcome to our website!</h2>
                    <p>Find the best sitter in your neighborhood</p>
                    <a href="/list">Search Sitter</a>
                </article>
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
                    Dogs and cats are like family members.
                    If you have to be away from home for a long period of time for work, or for travel, or if your are unable to walk the dog because of illness or injury. You can connect with a sitter near you and leave your precious pet with them.
                    We have an online shop selling dog and cat food too!
                </p>
            </section>
        </section>
    );
}

function Services(){
    return(
        <section className="services" id="services">
        <h3>Services</h3>
        <section>
            <article className="service">
                <aside>
                    <FontAwesomeIcon icon={faHouseChimneyWindow} size="2xl"/>
                    <section>
                        <h4>Boarding</h4>
                        <p>
                            Your pets stay overnight in your sitter's home. You can find a comfortable place for your pets!
                        </p>
                    </section>
                </aside>
                <aside>
                    <FontAwesomeIcon icon={faDog} size="2xl"/>
                    <section>
                        <h4>Dog Walking</h4>
                        <p>
                            On days when you are busy, the sitter will walk your dogs for you!
                        </p>
                    </section>
                </aside>
            </article>
            <article className="trust-sitter">
                <section>
                    <aside>
                        <FontAwesomeIcon icon={faShieldDog} size="xl"/>
                        <h4>Reasons you can trust sitters</h4>
                    </aside>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faSquareCheck} size="xl"/>
                            <p>All sitters have special animal care certification</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSquareCheck} size="xl"/>
                            <p>All sitters are sweet and love animals!</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSquareCheck} size="xl"/>
                            <p>All sitters have experience having a pet</p>
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
                    Search and connect with sitters.
                </p>
            </section>
            <article>
                <aside>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl"/>
                    <h4>1. Search</h4>
                    <p>
                        First, enter the service, day of the week, and location,then choose from the list of matched sitters.
                    </p>
                </aside>
                <aside>
                    <FontAwesomeIcon icon={faCalendarDays} size="2xl"/>
                    <h4>2. Arrange a meet & greet</h4>
                    <p>
                        Go to the sitter's profile, contact them, and set up a meeting!
                    </p>
                </aside>
                <aside>
                    <FontAwesomeIcon icon={faCreditCard} size="2xl"/>
                    <h4>3.Pay</h4>
                    <p>
                        Have a connection with a sitter and discuss with your lovely pets.
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
                <img src={dogImg1} alt="dog1"/>
                <aside>
                    <FontAwesomeIcon icon={faClock} size="xl"/>
                    <p>23/04/2023</p>
                </aside>
                <figcaption>
                    <h4>Do Dogs Have Feelings?</h4>
                    <p>
                        Any dog parent knows that their pup has feelings — after all, dogs are pretty expressive, whether they’re wagging their tails and licking you or barking at something scary. But you may be wondering if they have the same emotions as people.
                    </p>
                </figcaption>
                <a href="#">Read More</a>
            </figure>
            <figure>
                <img src={dogImg2} alt="dog2"/>
                <aside>
                    <FontAwesomeIcon icon={faClock} size="xl"/>
                    <p>23/04/2023</p>
                </aside>
                <figcaption>
                    <h4>Do Cats Have Feelings?</h4>
                    <p>
                        We're told that only humans have deep emotions like love. Animals have only their natural instincts. A cat shows affection to you because he needs you for food and shelter. You give your cat what he needs, and his instinct tells him to buddy up to you.
                    </p>
                </figcaption>
                <a href="#">Read More</a>
            </figure>
            <figure>
                <img src={dogImg3} alt="dog3"/>
                <aside>
                    <FontAwesomeIcon icon={faClock} size="xl"/>
                    <p>05/04/2023</p>
                </aside>
                <figcaption>
                    <h4>Common Dog Behavior Issues</h4>
                    <p>
                        If you're looking for help treating your dog’s behavior issue, or just curious about why your dog does what he does, you've come to the right place. Find out more here about common dog behavior issues to help you and your pup address some of our canine friends' behaviors and habits.
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
                    <h4 onClick={(e)=>{
                        e.target.parentNode.classList.toggle("appear");
                    }}>
                        <span>Q: </span> Who is gonna provide pet food?
                    </h4>
                    <p>
                        Basically, owners have to bring the food. If it does not seem to be possible, please ask the sitter for the preparation of the food before the confirmation of the contract.
                    </p>
                </article>
                <article>
                    <h4 onClick={(e)=>{
                        e.target.parentNode.classList.toggle("appear");
                    }}>
                        <span>Q: </span> Do you accept animals other than dogs and cats?
                    </h4>
                    <p>
                        No. If you want to leave an animal except dogs and cats, please find a pet hotel. We are not responsible for any issues other than dogs and cats.
                    </p>
                </article>
                <article>
                    <h4 onClick={(e)=>{
                        e.target.parentNode.classList.toggle("appear");
                    }}>
                        <span>Q: </span>What about allergies and diseases?
                    </h4>
                    <p>
                        If your pets have allergies or diseases, please tell the sitters before giving the confirmation. If the sitter find the disease heavy, they can cancel the confirmation beforehands.
                    </p>
                </article>
                <article>
                    <h4 onClick={(e)=>{
                        e.target.parentNode.classList.toggle("appear");
                    }}>
                        <span>Q: </span>What is the method of payment?
                    </h4>
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
            <h2>Places you can find the sitters</h2>
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
                <FontAwesomeIcon icon={faEarthAmericas} size="2xl"/>
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

//START: footer part
const homeFooter = [
    {name:"Top", link:"#header"},
    {name:"Our Services", link:"#services"},
    {name:"Q&A", link:"/#QandA"},
    {name:"Search Sitter", link:"/list"},
    {name:"Sign In", link:"/signIn"},
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
                        {homeFooter.map((homeFoot)=>(
                            <FooterLinkList
                                key={homeFoot.name}
                                name={homeFoot.name}
                                link={homeFoot.link}
                            />
                        ))}
                    </ul>
                </section>
            </section>
            <p>Copyright &copy; Bowwow sitter service </p>
        </footer>
    );
}
//END: footer part

function HomeApp(){

 

    return(
        <React.Fragment>
            <Header/>
            <HomePage/>
            <Footer/>
        </React.Fragment>
    );
}

export default HomeApp;
