import $ from 'jquery';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldDog, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { click } from '@testing-library/user-event/dist/click';

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
                      <option value="none">Select Service</option>
                      <option value="boarding">Boarding</option>
                      <option value="dogwalking">Dog Walking</option>
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
        <li>
            {
                localSitterList.map((sitter)=>(
                    <SitterList
                    key={sitter.id}
                    sitterId={sitter.id}
                    sitterName={sitter.name}
                    city1={sitter.city1}
                    city2={sitter.city2}
                    service={sitter.service}
                    />
                ))
            }
        </li>
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
            </aside>
            <li className="sitterLocation">   
                <FontAwesomeIcon icon={faLocationArrow}/>
                <h5 className="sitterPlace">{props.city1}</h5>
                <h5>,</h5>
                <h5 className="sitterCity">{props.city2}</h5>
            </li>
            <li className="sitterService">
                <h4>Available Service:<span>{props.service}</span></h4>
            </li>
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

function ListApp(){
    return(
        <React.Fragment>
            <SitterListPage/>
        </React.Fragment>
    );
}

export default ListApp;