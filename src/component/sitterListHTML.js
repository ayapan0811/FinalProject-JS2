import $ from 'jquery';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldDog, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Header from './header';
import FooterLinkList from "./footerList";
import FooterSNS from './footerSNS';
import SitterListForm from './sitterListForm';

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
                        <label htmlFor="select-service">Accepted Service</label>
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
                        <label htmlFor="day">Available Days</label>
                        <select name="day" id="day">
                            <option value="none">Select day</option>
                            <option value="listSun">Sunday</option>
                            <option value="listMon">Monday</option>
                            <option value="listTue">Tuesday</option>
                            <option value="listWed">Wednesday</option>
                            <option value="listThu">Thursday</option>
                            <option value="listFri">Friday</option>
                            <option value="listSat">Saturday</option>
                        </select>
                    </article>
                    <article>
                        <label htmlFor="size">Accepted Size</label>
                        <select name="size" id="selected-size">
                            <option value="none">Select size</option>
                            <option value="1">Under 10kg</option>
                            <option value="2">Under 25kg</option>
                            <option value="3">Under 45kg</option>
                            <option value="4">All sizes</option>
                        </select>
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
            <blockquote>
                <button className='showSize' onClick={function showSize(e){
                    //START: pop up size
                    for(let i=0; i<100; i++){
                        if($(".acceptedSize").eq(i).attr('id') == 1){
                            $(".sizeOne").eq(i).show();
                        }else if($(".acceptedSize").eq(i).attr('id') == 2){
                            $(".sizeTwo").eq(i).show();
                        }else if($(".acceptedSize").eq(i).attr('id') == 3){
                            $(".sizeThree").eq(i).show();
                        }else if($(".acceptedSize").eq(i).attr('id') == 4){
                            $(".sizeFour").eq(i).show();
                        }
                    }
                    //END: pop up size
                }}>
                    See accepted size
                </button>
                <button className='showDay' onClick={(e)=>{
                    //START: pop up days of week
                    for(let i=0; i<100; i++){
                        if($(".listSun").eq(i).attr('id') == "true"){
                            $(".listSun").eq(i).show();
                        }
                        if($(".listMon").eq(i).attr('id') == "true"){
                            $(".listMon").eq(i).show();
                        }
                        if($(".listTue").eq(i).attr('id') == "true"){
                            $(".listTue").eq(i).show();
                        }
                        if($(".listWed").eq(i).attr('id') == "true"){
                            $(".listWed").eq(i).show();
                        }
                        if($(".listThu").eq(i).attr('id') == "true"){
                            $(".listThu").eq(i).show();
                        }
                        if($(".listFri").eq(i).attr('id') == "true"){
                            $(".listFri").eq(i).show();
                        }
                        if($(".listSat").eq(i).attr('id') == "true"){
                            $(".listSat").eq(i).show();
                        }
                    }
                    //END: pop up days of week
                }}>
                    See available days
                </button>
            </blockquote>
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
                    sunday={sitter.sunday}
                    monday={sitter.monday}
                    tuesday={sitter.tuesday}
                    wednesday={sitter.wednesday}
                    thursday={sitter.thursday}
                    friday={sitter.friday}
                    saturday={sitter.saturday}
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
                        //START: pop up modal and get sitter id
                        $("#confirm").show();
                        let selectedId = e.target.parentNode.value;
                        console.log(selectedId);
                        $(".goBtn").attr("href",`/profile?${selectedId}`);
                        //END: pop up modal and get sitter id
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
                <li className='acceptedSize' id={props.size}>
                    <h4><span className='sizeOne'>~10kg</span></h4>
                    <h4><span className='sizeTwo'>~25kg</span></h4>
                    <h4><span className='sizeThree'>~45kg</span></h4>
                    <h4><span className='sizeFour'>All</span></h4>
                </li>
            </aside>
            <aside className='dayWeek'>
                <h5><span className='listSun' id={props.sunday.toString()}>Sunday</span></h5>
                <h5><span className='listMon' id={props.monday.toString()}>Monday</span></h5>
                <h5><span className='listTue' id={props.tuesday.toString()}>Tuesday</span></h5>
                <h5><span className='listWed' id={props.wednesday.toString()}>Wednesday</span></h5>
                <h5><span className='listThu' id={props.thursday.toString()}>Thursday</span></h5>
                <h5><span className='listFri' id={props.friday.toString()}>Friday</span></h5>
                <h5><span className='listSat' id={props.saturday.toString()}>Saturday</span></h5>
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
    SitterListForm();
    return(
        <React.Fragment>
            <Header/>
            <SitterListPage/>
            <Footer/>
        </React.Fragment>
    );
}

export default ListApp;