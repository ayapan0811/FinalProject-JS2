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

function ConfirmModal(){
    return(
        <section id="confirm">
            <p>Go to profile?</p>
            <a>Yes</a>
            <button>No</button>
        </section>
    );
}

function SitterList(props){
    return(
        <li>
            {/* <a className="sitterId" href="#confirm">{props.id}</a> */}
            <button className="sitterId">{props.id}</button>
            <span>{props.name}</span>
        </li>
    );
}

function SitterTestPage(){
    return(
        <ul>
            {
                sittersData.map((sitter)=>(
                    <SitterList
                        key={sitter.id}
                        id={sitter.id}
                        name={sitter.name}
                    />
                ))
            }
        </ul>
    );
}
function App(){
    $("#root").ready(function(){
        $("section").hide();
        
        // let selectedId = 0;
        for(let i=0; i<100; i++){
            $('[class="sitterId"]').eq(i).click(()=>{
                    $("section").slideDown();
                    let selectedId = $('[class="sitterId"]').eq(i).text();
                    $("a").attr("href",`profile.html?${selectedId}`)
                })
            }
            
        // console.log(gettingId());

           
        // function selectId(){
        //     for(let i=0; i<100; i++){
        //         $('[class="sitterId"]').eq(i).click(()=>{
        //             $("section").slideDown();
        //             let selectedId = $('[class="sitterId"]').eq(i).text();
        //             return selectedId;
        //         })
        //     }
        // }
        // console.log(selectId());
    });

    return(
        <React.Fragment>
            <ConfirmModal/>
            <SitterTestPage/>
        </React.Fragment>
    );
}


const rootProfileHTML = ReactDOM.createRoot(document.getElementById("root"));

rootProfileHTML.render(<App/>);
//END: Profile page into #root