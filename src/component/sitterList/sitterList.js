//START: getting JSON file
const sitterUrl = "http://127.0.0.1:5501/src/data/sitters.json";

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
                  <label for="dogcat">I'm looking for service for my</label>
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
                  <label for="select-service">Service</label>
                  <select name="select-service" id="select-service">
                      <option value="none" disabled selected>Select Service</option>
                      <option value="boarding">Boarding</option>
                      <option value="dogwalking">Dog Walking</option>
                  </select>
              </article>
              <article>
                  <label for="select-location">Location</label>
                  <select name="location" id="location">
                      <option value="none" disabled selected>Select your location</option>
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
                      <label for="day">For these days</label>
                      <select name="day" id="day">
                          <option value="none" disabled selected>Select day</option>
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
                  <label for="select-size">My Dog Size</label>
                  <select name="select-size" id="select-size">
                      <option value="none" disabled selected>Select your dog size</option>
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


function RightList(props){
    return(
        // <section className="right-list">
            <ol className="list">
            <li>
                <aside>
                    <h3><span>1</span>{props.name}</h3>
                    <i className="fa-solid fa-shield-dog"></i>
                </aside>
                <aside>
                    <i className="fa-solid fa-location-arrow"></i>
                    <h4 className="sitterPlace">City1</h4>
                    <h4>,</h4>
                    <h4 className="sitterCity">City2</h4>
                </aside>
                <ul className="sitter-available">
                    <li>Dog Walking</li>
                    <li>Boarding</li>
                </ul>
                <article>
                    <h4>Available Day</h4>
                    <ul className="sitter-available">
                        <li>Monday</li>
                        <li>Tuesday</li>
                        <li>Wednesday</li>
                        <li>Thursday</li>
                    </ul>
                </article>
                <article>
                    <h4>Accepted Size</h4>
                    <ul className="sitter-available">
                        <li>~10kg</li>
                        <li>10kg~25kg</li>
                        <li>25kg~45kg</li>
                        <li>45kg~</li>
                    </ul>
                </article>
            </li>
        </ol>
        // </section>
    );
}
function SitterName(){
    return(
        <section>
            {
                sittersData.map(
                    (sitter)=>(
                        <RightList
                        // key={sitter.name}
                        name={sitter.name}
                        />
                    )
                )
            }
        </section>
    );
}

function SitterListPage(){
    return(
        <main className="sitterList-main">
            <section>
                <LeftForm/>
                <section className="right-list">
                    <RightList/>
                    <RightList/>
                    <RightList/>
                    <RightList/>
                    <RightList/>
                    <RightList/>
                    <RightList/>
                    <RightList/>
                    <RightList/>
                    <RightList/>
                </section>
            </section>
        </main>
    );
}

function App(){

    $("#root").ready(function(){
        
    })


    return(
        <React.Fragment>
            <SitterListPage/>
        </React.Fragment>
    );
}
const rootSitterListHTML = ReactDOM.createRoot(document.getElementById("root"));

rootSitterListHTML.render(<App/>);