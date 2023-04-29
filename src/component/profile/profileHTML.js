//START: Profile page top part
function ProfileTop(){
    return(
        <figure className="proTop">
            <img src="img/sitter1.jpg" alt="mainPic"/>
            <figcaption>
                <section>
                    <h2 className="sitterName">UserName</h2>
                    <aside>
                        <span className="rating">5/5</span>
                        <a className="reviewNum" href="#review">(10 reviews)</a>
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
        <li>
            <h4 className={props.dayClass}>{props.dayName}</h4>
        </li>
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
                        <h3 className="sitterPlace">
                            <i className="fa-solid fa-location-arrow"></i> City,
                        </h3>
                        <h3 className="sitterCity">City</h3>
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
                        <li className="size ten">~10kg</li>|
                        <li className="size twenty">10kg~25kg</li>|
                        <li className="size forty">25kg~45kg</li>|
                        <li className="size overforty">45kg~</li>
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
                <img src="img/proCat.jpg" alt="sitterPic1"/>
                <img src="img/proDog.jpg" alt="sitterPic2"/>
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
            <   i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
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
                        <i className="fa-sharp fa-solid fa-chevron-left fa-beat fa-lg"></i>
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
                        <i className="fa-sharp fa-solid fa-chevron-right fa-beat fa-lg"></i>
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

function App(){
    return(
        <React.Fragment>
            <ProfilePage/>
        </React.Fragment>
    );
}

const rootProfileHTML = ReactDOM.createRoot(document.getElementById("root"));

rootProfileHTML.render(<App/>);
//END: Profile page into #root