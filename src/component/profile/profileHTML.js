import $ from 'jquery';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow,faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import proCat from "../../img/proCat.jpg";
import proDog from "../../img/proDog.jpg";
import Header from '../header&footer/header';
import FooterLinkList from "../header&footer/footerList";
import FooterSNS from "../header&footer/footerSNS";
import SlideShow from './profileSlideShow';
import ProfilePoper from './profileInfoPoper';

//START: Profile page top part
function ProfileTop(){
    return(
        <figure className="proTop" id='proTop'>
            <img alt="mainPic" src="./img/sitter-1.jpg"/>
            <figcaption>
                <section>
                    <h2 className="sitterName">UserName</h2>
                    <aside>
                        <span className="rating">num/5</span>
                        <a className="reviewNum" href="#review">(num reviews)</a>
                    </aside>
                </section>
                <section>
                    <h3>Take a contact</h3>
                    <a href="#" className="sitterMail">Email@mail.com</a>
                </section>
            </figcaption>
        </figure>
    );

}
//END: Profile page top part
//START: Sitter Availability part
function DaysList(props){
    return(
        <li className={props.dayClass}>{props.dayName}</li>
    );
}

const daysList = [
    {name: "Sunday", dayClass: "sunday"},
    {name: "Monday", dayClass: "monday"},
    {name: "Tuesday", dayClass: "tuesday"},
    {name: "Wednesday", dayClass: "wednesday"},
    {name: "Thursday", dayClass: "thursday"},
    {name: "Friday", dayClass: "friday"},
    {name: "Saturday", dayClass: "saturday"}
]

function SitterAvailability(){

    return(
        <section className="sitterAvb">
            <h3>Available Time</h3>
            <ul>
                {
                    daysList.map((day)=>(
                        <DaysList
                            key={day.name}
                            dayName={day.name}
                            dayClass={day.dayClass}
                        />
                    ))
                }
            </ul>
        </section>
    );
}
//END: Sitter Availability part
//START: Profile page right part
function ProfileRight(){
    return(
        <section className="proRight">
            <SitterAvailability/>
            <section>
                <article>
                    <aside>
                        <FontAwesomeIcon icon={faLocationArrow} size='xl'/>
                        <h3 className="bigCity">City</h3>
                        <h3>,</h3>
                        <h3 className="smallCity">City</h3>
                    </aside>
                    <aside>
                        <h2 className="sitterYear">3</h2>
                        <p>years of sitting</p>
                    </aside>
                </article>
                <aside>
                    <h3>Accepted services</h3>
                    <ul>
                        <li className="liWalking">Dog Walking: CAD <span className="walkPay">10</span> / Walk</li>
                        <li className="liBoarding">Boarding: CAD <span className="boardPay">10</span> / Night</li>
                    </ul>
                </aside>
                <aside>
                    <h3>Accepted Size</h3>
                    <ol>
                        <li className="size1">~10kg</li>
                        <span className="span1">|</span>
                        <li className="size2">10kg~25kg</li>
                        <span className="span2">|</span>
                        <li className="size3">25kg~45kg</li>
                        <span className="span3">|</span>
                        <li className="size4">45kg~</li>
                    </ol>
                </aside>
            </section>
        </section>
    );
}
//END: Profile page right part
//START: Profile page left part
function ProfileLeft(){
    return(
        <section className="proLeft">
            <SitterAvailability/>
            <figure>
                <img src={proCat} alt="sitterPic1"/>
                <img src={proDog} alt="sitterPic2"/>
            </figure>
            <article>
                <p>
                    Hello. I live with my mother, husband, three siblings, a dog and two cats in a detached house. The dog is mixed, medium size. Our cats are both Munchikin. All of them are male. I used to work at a web designer for 10 years and after retirement, I started to work as a pet sitter. Me or my daughter can take care of your dog. If boarding all of us will take care of your pets responsibily. Please feel free to contact me. It is okay to ask me any questions by email before booking and also it is totally okay to visit our house to check the environment before boarding. It is nice to meet you!
                </p>
                <p>Skill: dog training</p>
                <p>Method of payment: cash only</p>
                <p>Walking distance: 5km (1hour)</p>
            </article>
        </section>
    );
}
//END: Profile page left part
//START: Profile page bottom part
function Review(props){
    return(
        <blockquote className={props.name}>
            <span className={props.star}>
                <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }}/>
                <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }}/>
                <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }}/>
                <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }}/>
                <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }}/>
            </span>
            <aside>{props.feedback}</aside>
        </blockquote>
    );//後でasideをpに変える
}

const reviewList = [
    {name:"review1",star:"star5",
    feedback:"I asked him a walk for my dog. He sent me my dog's picture frequently so I could see how good he took care of my dog. I would defintely repeat next time!"},
    {name:"review2",star:"star4",
    feedback:"Thank you!"},
    {name:"review3",star:"star5",
    feedback:"I left my cat at her house for 2 days cause I had to go abroad for job. I used to use the pet hotel, but this system is way better than the hotel! My cat seem to be comfortable at their house, I am really thankful to their kindness."},
    {name:"review4",star:"star3",
    feedback:"I used this service because I got sick. I don't know how my dog spent time with him, but I think this is a good service."}
]

function ProfileBottom(){
    return(
        <section className="proBottom">
            <h2 id="review">User Review</h2>
            <section>
                <article>
                    <button className="prevBtn">
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </button>
                    <section className="slideShow">
                        {
                            reviewList.map((review)=>(
                                <Review
                                key={review.name}
                                    name={review.name}
                                    star={review.star}
                                    feedback={review.feedback}
                                />
                            ))
                        }
                    </section>
                    <button className="nextBtn">
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>
                </article>
                <section>
                    <h3>Take a contact</h3>
                    <a href="#" className="sitterMail">Email@mail.com</a>
                </section>
            </section>
        </section>
    );
}
//END: Profile page bottom part
//START: Profile page into #root
function ProfilePage(){
    return(
        <main className="profile">
            <ProfileTop/>
            <ProfileRight/>
            <ProfileLeft/>
            <ProfileBottom/>
        </main>
    );
}

//START: footer part
const proFooter = [
    {name:"Top", link:"#header"},
    {name:"Home", link:"/"},
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
            <p>Copyright &copy; Bowwow sitter service </p>
        </footer>
    );
}
//END: footer part

function ProApp(){

    
    ProfilePoper();
    SlideShow();

    return(
        <React.Fragment>
            <Header/>
            <ProfilePage/>
            <Footer/>
        </React.Fragment>
    );

}

export default ProApp;

// const rootProfileHTML = ReactDOM.createRoot(document.getElementById("root"));

// rootProfileHTML.render(<App/>);