import $ from "jquery";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import sitterImg1 from "../img/sitter-1.jpg";
import sitterImg2 from "../img/sitter-2.jpg";
// import sitterImg3 from "../img/sitter-3.jpg";
// import sitterImg4 from "../img/sitter-4.jpg";
// import sitterImg5 from "../img/sitter-5.jpg";
// import sitterImg6 from "../img/sitter-6.jpg";
// import sitterImg7 from "../img/sitter-7.jpg";

function ProfilePoper(){
    // START: getting JSON file
    const [localSitterList, setSitterList] = useState([]);

    useEffect(function(){
        fetch("http://localhost:3100/sitter-api")
        .then((response) => response.json())
        .then(setSitterList)
    }, []); 
    //END: getting JSON file

    //START: getting sitterid from url parameter 
    const location = useLocation(); 
    let selectedSitterId = Number(location.search.slice(1,4))-1;
    //END: getting sitterid from url parameter
    $("main").ready(function(){
        
        //START: showing Json file data to profile page
        let selectedSitter = localSitterList[selectedSitterId];

            //START: picture
            // let picNumber = (Math.floor(Math.random()*7)+1);
            // $('[alt="mainPic"]').attr("src",JSON.parse(`sitterImg${picNumber}`));
            //could not get pictures from the json file, and it was not able to do it randomly, so putting one picture for now 
            $('[alt="mainPic"]').attr("src",sitterImg2);
            //END: picture

        $('[class="sitterName"]').text(`${selectedSitter?.name}`);
        $('[class="rating"]').text(`${selectedSitter?.rating}/5`);
        $('[class="rating"]').css("color","orange");
        $('[class="sitterMail"]').text(`${selectedSitter?.email}`);
        $('[class="bigCity"]').text(`${selectedSitter?.city1}`);
        $('[class="smallCity"]').text(`${selectedSitter?.city2}`);
        if(selectedSitter?.sunday == false){
            $('[class="sunday"]').css("display","none");
        }
        if(selectedSitter?.monday == false){
            $('[class="monday"]').css("display","none");
        }
        if(selectedSitter?.tuesday == false){
            $('[class="tuesday"]').css("display","none");
        }
        if(selectedSitter?.wednesday == false){
            $('[class="wednesday"]').css("display","none");
        }
        if(selectedSitter?.thursday == false){
            $('[class="thursday"]').css("display","none");
        }
        if(selectedSitter?.friday == false){
            $('[class="friday"]').css("display","none");
        }
        if(selectedSitter?.saturday == false){
            $('[class="saturday"]').css("display","none");
        }
        if(selectedSitter?.service == "Walk"){
            $('[class="liBoarding"]').css("display","none");
        }else if(selectedSitter?.service == "Board"){
            $('[class="liWalking"]').css("display","none");
        }
        if(selectedSitter?.size == "1"){
            $('[class="span1"]').css("display","none");
            $('[class="size2"]').css("display","none");
            $('[class="span2"]').css("display","none");
            $('[class="size3"]').css("display","none");
            $('[class="span3"]').css("display","none");
            $('[class="size4"]').css("display","none");
        }else if(selectedSitter?.size == "2"){
            $('[class="span2"]').css("display","none");
            $('[class="size3"]').css("display","none");
            $('[class="span3"]').css("display","none");
            $('[class="size4"]').css("display","none");
        }else if(selectedSitter?.size == "3"){
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
    });
}

export default ProfilePoper;