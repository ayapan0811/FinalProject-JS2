import $ from 'jquery';
import React, { useState, useEffect } from "react";

function ConfirmModal(){
    return(
        <section id="confirm">
            <p>Go to profile?</p>
            <button>
                <a>Yes</a>
            </button>
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
    // START: getting JSON file
    const [localSitterList, setSitterList] = useState([]);

    useEffect(function(){
        fetch("http://localhost:3100/sitter-api")
        .then((response) => response.json())
        .then(setSitterList)
    }, []); 
    // console.log(localSitterList);
    //END: getting JSON file

    return(
        <ul>
            {
                localSitterList.map((sitter)=>(
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
function SitterListTestApp(){

    return(
        <React.Fragment>
            <ConfirmModal/>
            <SitterTestPage/>
        </React.Fragment>
    );
}

export default SitterListTestApp;

// const rootSitterTestHTML = ReactDOM.createRoot(document.getElementById("root"));

// rootsitterTestHTML.render(<App/>);
//END: Profile page into #root