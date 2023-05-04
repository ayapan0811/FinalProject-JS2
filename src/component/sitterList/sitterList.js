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

function LeftForm(){
    return(
        <section className="left-form">
            <form action="#">
            <h2>Find the Perfect Match</h2>
            <section>
                <article className="dogorcat">
                    <label htmlFor="dogcat">I'm looking for service for my</label>
                    <section>
                        <aside>
                            <input type="checkbox" name="dog" id="dog"/>
                            <small>Dog</small>
                        </aside>
                        <aside>
                            <input type="checkbox" name="cat" id="cat"/>
                            <small>Cat</small>
                        </aside>
                    </section>
                </article>
                <article>
                    <label htmlFor="select-service">Service</label>
                    <select name="select-service" id="select-service">
                        <option value="none" disabled>Select Service</option>
                        <option value="boarding">Boarding</option>
                        <option value="dogwalking">Dog Walking</option>
                    </select>
                </article>
                <article>
                    <label htmlFor="select-location">Location</label>
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
                        <label htmlFor="day">For these days</label>
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
                        <option value="10-25">10~25kg</option>
                        <option value="25-45">25~45kg</option>
                        <option value="45-">45kg~</option>
                    </select>
                </article>
                <input type="submit" value="Search Sitter"/>
            </section>
            </form>
        </section>
    );
}

function SitterList(props){
    return(
        <ol>
            <li>{props.id}</li>
            <li>{props.name}</li>
            <li>{props.email}</li>

        </ol>
    );
}

function RightList(){
    return(
        <section>
            {
                sittersData.map((sitter)=>( //jsondataのシッター情報を一人一人見てマップ（配列みたいなもの）にしている
                    <SitterList
                        key={sitter.id} //keyは設定しないといけないから書いてるだけ、この場面で意味はない
                        id={sitter.id} //左のidは上にあるprops.idのid、右のidはjsonファイルのプロパティ
                        name={sitter.name}
                        email={sitter.email}
                    />
                ))
            }
        </section>
    )
}

function SitterListPage(){
    return(
        <main className="sitterList-main">
            <LeftForm/>
            <RightList/>
        </main>
    );
}

function App(){
    return(
        <React.Fragment>
            <SitterListPage/>
        </React.Fragment>
    );
}
const rootSitterListHTML = ReactDOM.createRoot(document.getElementById("root"));

rootSitterListHTML.render(<App/>);