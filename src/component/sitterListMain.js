import $ from 'jquery';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldDog, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import FooterLinkList from "./footerList";
import FooterSNS from './footerSNS';
import LocationSelect from './sitterListForm';

function ConfirmModal(){
    return(
        <section id="confirm">
            <p>Go to profile?</p>
            <aside>
                <button><a className='goBtn'>Go</a></button>
                <button>Cancel</button>
            </aside>
        </section>
    );
}

function LeftForm(){
    return(
        <section className="left-form">
        <form className='listForm' action="#">
          <h2>Find the Perfect Match</h2>
          <section>
              <article>
                  <label htmlFor="select-service">Service</label>
                  <select name="select-service" id="select-service">
                      <option value="none">Select Service</option>
                      <option value="boarding">Boarding</option>
                      <option value="walking">Dog Walking</option>
                  </select>
              </article>
              <article>
                  <label htmlFor="select-location">Location</label>
                  <select name="location" id="location">
                      <option value="none">Select your location</option>
                      <optgroup label="Vancouver">
                          <option value="Vancouver">Vancouver</option>
                          <option value="Richmond">Richmond</option>
                          <option value="Burnaby">Burnaby</option>
                          <option value="North Vancouver">North Vancouver</option>
                          <option value="West Vancouver">West Vancouver</option>
                      </optgroup>
                      <optgroup label="Montreal">
                          <option value="Downtown">Downtown</option>
                          <option value="South West">South West</option>
                          <option value="Plateau">Plateau</option>
                          <option value="Cote-des-Niege">Cote-des-Niege</option>
                      </optgroup>
                      <optgroup label="Toronto">
                          <option value="City of Toronto">City of Toronto</option>
                          <option value="Halton">Halton</option>
                          <option value="Peel">Peel</option>
                          <option value="York">York</option>
                          <option value="Durham">Durham</option>
                      </optgroup>
                  </select>
              </article>
              <article>
                  <aside>
                      <label htmlFor="day">Day of week</label>
                      <select name="day" id="day">
                          <option value="none">Select day</option>
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
              <input type="submit" value="Search Sitter"/>
          </section>
        </form>
      </section>
    );
}

function RightList(){
    // START: getting JSON file
    const [localSitterList, setSitterList] = useState([]);

    useEffect(function(){
        fetch("http://localhost:3100/sitter-api")
        .then((response) => response.json())
        .then(setSitterList)
    }, []); 
    //END: getting JSON file

    return(
        <section>
            {
                localSitterList.map((sitter)=>(
                    <SitterList
                    key={sitter.id}
                    sitterId={sitter.id}
                    sitterName={sitter.name}
                    city1={sitter.city1}
                    city2={sitter.city2}
                    service={sitter.service}
                    rating={sitter.rating}
                    size={sitter.size}
                    />
                ))
            }
        </section>
    );
}
function SitterList(props){
    return(
        <ol className="list">
            <aside>
                <li className="sitterId">
                    <button value={props.sitterId} onClick={(e)=>{
                        $("#confirm").show(); //modal pop up
                        let selectedId = e.target.parentNode.value;
                        console.log(selectedId);
                        $(".goBtn").attr("href",`/profile?${selectedId}`);
                    }}>
                        <a href='#confirm'>Check</a>
                    </button>
                </li>
                <li className="sitterName">
                    <h3>{props.sitterName}</h3>
                    <FontAwesomeIcon icon={faShieldDog} style={{ color: 'darkgoldenrod'}} size="xl"/>
                </li>
                <li><h3 className='sitterRating'>{props.rating}/5</h3></li>
            </aside>
            <aside>
                <li className="sitterLocation">   
                    <FontAwesomeIcon icon={faLocationArrow}/>
                    <h4 className="sitterPlace">{props.city1}</h4>
                    <h4>,</h4>
                    <h4 className="sitterCity">{props.city2}</h4>
                </li>
                <li className="sitterService">
                    <h4><span className='listService'>{props.service}</span></h4>
                </li>
                <li className='acceptedSize'>
                    <h5><span className='sizeOne'>~10kg</span></h5>
                    <h5><span className='sizeTwo'>~25kg</span></h5>
                    <h5><span className='sizeThree'>~45kg</span></h5>
                    <h5><span className='sizeFour'>All</span></h5>
                </li>
            </aside>
            <aside>
                <h5><span className='Sunday'>Sunday</span></h5>
                <h5><span className='Monday'>Monday</span></h5>
                <h5><span className='Tuesday'>Tuesday</span></h5>
                <h5><span className='Wednesday'>Wednesday</span></h5>
                <h5><span className='Thursday'>Thursday</span></h5>
                <h5><span className='Friday'>Friday</span></h5>
                <h5><span className='Saturday'>Saturday</span></h5>
            </aside>
        </ol>
    );
}

function SitterListPage(){
    return(
        <main className="sitterList-main">
            <ConfirmModal/>
            <LeftForm/>
            <RightList/>
        </main>
    );
}

//START: footer part
const listFooter = [
    {name:"Home", link:"/"},
    {name:"Search Sitter", link:"/list"},
    {name:"Sign In", link:"#"},
    {name:"Sign Up", link:"#"}
]

function Footer(){
    return(
        <footer>
            <section>
                <FooterSNS/>
                <section className="link">
                    <h4>Quick Links</h4>
                    <ul>
                        {listFooter.map((listFoot)=>(
                            <FooterLinkList
                                key={listFoot.name}
                                name={listFoot.name}
                                link={listFoot.link}
                            />
                        ))}
                    </ul>
                </section>
            </section>
            <p>Copyright &copy; Bawwow sitter service </p>
        </footer>
    );
}
//END: footer part

function ListApp(){
    LocationSelect();
    return(
        <React.Fragment>
            <SitterListPage/>
            <Footer/>
        </React.Fragment>
    );
}

export default ListApp;