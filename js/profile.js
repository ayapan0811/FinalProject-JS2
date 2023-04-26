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
    feedback:"I used this service because I got sick. I don't know how my dog spent time with him, but I think this is a good service."},
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

function ProfilePage(){
    return(
        <main className="profile">
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


// START: slideshow part
$(".review1").addClass("shownSlide"); //giving class for default
$(".review1").addClass("shown2Slides");
$(".review2").addClass("shown2Slides");

let firstRev = $(".review1");
let lastRev = $(".review4");

// START: slideshow for mobile & tablet version
$(".prevBtn").click(()=>{
    let shownRev = $(".shownSlide");
    if(firstRev.hasClass("shownSlide")){
        lastRev.addClass("shownSlide");
        firstRev.removeClass("shownSlide");
    }else{
        shownRev.prev().addClass("shownSlide");
        shownRev.removeClass("shownSlide");
    }
})

$(".nextBtn").click(()=>{
    let shownRev = $(".shownSlide");
    if(lastRev.hasClass("shownSlide")){
        firstRev.addClass("shownSlide");
        lastRev.removeClass("shownSlide");
    }else{
        shownRev.next().addClass("shownSlide");
        shownRev.eq(0).removeClass("shownSlide");
    }
})
// END: slideshow for mobile & tablet version
// START: slideshow for desktop version
$(".prevBtn").click(()=>{
    let shownRevs = $(".shown2Slides");
    $(".proBottom .slideShow").css("flex-direction","row");
    if(firstRev.hasClass("shown2Slides") && firstRev.next().hasClass("shown2Slides")){
        lastRev.addClass("shown2Slides");
        shownRevs.eq(1).removeClass("shown2Slides");
        $(".proBottom .slideShow").css("flex-direction","row-reverse")
    }else if(firstRev.hasClass("shown2Slides") && lastRev.hasClass("shown2Slides")){
        lastRev.prev().addClass("shown2Slides");
        shownRevs.eq(0).removeClass("shown2Slides");
    }else{
        shownRevs.eq(0).prev().addClass("shown2Slides");
        shownRevs.eq(1).removeClass("shown2Slides");
    }
})

$(".nextBtn").click(()=>{
    let shownRevs = $(".shown2Slides");
    $(".proBottom .slideShow").css("flex-direction","row");
    if(lastRev.prev().hasClass("shown2Slides") && lastRev.hasClass("shown2Slides")){
        firstRev.addClass("shown2Slides");
        shownRevs.eq(0).removeClass("shown2Slides");
        $(".proBottom .slideShow").css("flex-direction","row-reverse")
    }else if(firstRev.hasClass("shown2Slides") && lastRev.hasClass("shown2Slides")){
        firstRev.next().addClass("shown2Slides");
        shownRevs.eq(1).removeClass("shown2Slides");
    }else{
        shownRevs.eq(1).next().addClass("shown2Slides");
        shownRevs.eq(0).removeClass("shown2Slides");
    }
})
// END: slideshow for desktop version
// END: slideshow part

