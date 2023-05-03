//START: getting JSON file
const sitterUrl = "http://127.0.0.1:5500/src/data/sitters.json";

jQuery.extend({
    getJsonData: function(url){
        let result = null;
        $.ajax({
            docType: "json",
            async: false,
            type: "GET",
            url: url,
            success: function(data){
                result = data;
            },
            error: function(xhr,status,error){
                console.log(error);
            }
        })
        return result;
    }
})

let sittersData = $.getJsonData(sitterUrl);
//END: getting JSON file
//START: Profile page top part
function ProfileTop(){
    return(
        <figure className="proTop">
            <img alt="mainPic"/>
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
                        <i className="fa-solid fa-location-arrow"></i>
                        <h3 className="sitterPlace">City</h3>
                        <h3>,</h3>
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

    $("#root").ready(function(){

        //START: showing Json file data to profile page
        let selectedSitterId = 43;
        let selectedSitter = sittersData[selectedSitterId];

        $('[alt="mainPic"]').attr("src",selectedSitter.picture);
        $('[class="sitterName"]').text(`${selectedSitter.name}`);
        $('[class="rating"]').text(`${selectedSitter.rating}/5`);
        $('[class="sitterMail"]').text(`${selectedSitter.email}`);
        $('[class="sitterPlace"]').text(`${selectedSitter.city1}`);
        $('[class="sitterCity"]').text(`${selectedSitter.city2}`);
        if(selectedSitter.sunday == false){
            $('[class="sunday"]').css("display","none");
        }
        if(selectedSitter.monday == false){
            $('[class="monday"]').css("display","none");
        }
        if(selectedSitter.tuesday == false){
            $('[class="tuesday"]').css("display","none");
        }
        if(selectedSitter.wednesday == false){
            $('[class="wednesday"]').css("display","none");
        }
        if(selectedSitter.thursday == false){
            $('[class="thursday"]').css("display","none");
        }
        if(selectedSitter.friday == false){
            $('[class="friday"]').css("display","none");
        }
        if(selectedSitter.saturday == false){
            $('[class="saturday"]').css("display","none");
        }
        if(selectedSitter.service == "Walk"){
            $('[class="liBoarding"]').css("display","none");
        }else if(selectedSitter.service == "Board"){
            $('[class="liWalking"]').css("display","none");
        }
        if(selectedSitter.size == "1"){
            $('[class="span1"]').css("display","none");
            $('[class="size2"]').css("display","none");
            $('[class="span2"]').css("display","none");
            $('[class="size3"]').css("display","none");
            $('[class="span3"]').css("display","none");
            $('[class="size4"]').css("display","none");
        }else if(selectedSitter.size == "2"){
            $('[class="span2"]').css("display","none");
            $('[class="size3"]').css("display","none");
            $('[class="span3"]').css("display","none");
            $('[class="size4"]').css("display","none");
        }else if(selectedSitter.size == "3"){
            $('[class="span3"]').css("display","none");
            $('[class="size4"]').css("display","none");
        }
        //END: showing Json file data to profile page
        //START: giving random numbers in profile page
        $('[class="reviewNum"]').text(`(${Math.floor(Math.random()*20)+2} reviews)`);
        $('[class="sitterYear"]').text(`${Math.floor(Math.random()*10)}`);
        $('[class="walkPay"]').text(`${Math.floor(Math.random()*10)+15}`);
        $('[class="boardPay"]').text(`${Math.floor(Math.random()*10)+15}`);
        //END: giving random numbers in profile page

        //START: slideshow part
        let firstRev = $(".review1");
        let secondRev = $(".review2");
        let lastRev = $(".review4");
        firstRev.addClass("shownSlide"); //giving class for default
        firstRev.addClass("shown2Slides"); //giving classes for default (desktop)
        secondRev.addClass("shown2Slides"); //giving classes for default (desktop)

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
    });

    return(
        <React.Fragment>
            <ProfilePage/>
        </React.Fragment>
    );

}

const rootSitterListHTML = ReactDOM.createRoot(document.getElementById("root"));

rootSitterListHTML.render(<App/>);