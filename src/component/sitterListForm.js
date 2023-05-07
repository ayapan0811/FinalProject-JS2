import React from "react";
import $ from 'jquery';

function LocationSelect() {
    
    // test=()=>{
        // let location = document.getElementById("location");
        // console.log(document.getElementById("location"));

        const smallCities = ["Vancouver","Richmond","Burnaby","North Vancouver","West Vancouver","Downtown","South West","Plateau","Cote-des-Niege","City of Toronto","Halton","Peel","York","Durham"];

        $("#location").ready(function(){
            $(".listForm").submit((e)=>{
                e.preventDefault();
                $(".list").show();
                //START: service select
                if($("#select-service").val() == "boarding"){
                    for(let i=0;i<100;i++){
                        if($(".listService").eq(i).text() == "Walk"){
                            $(".list").eq(i).hide();
                        }
                    }  
                }else if($("#select-service").val() == "walking"){
                    for(let i=0;i<100;i++){
                        if($(".listService").eq(i).text() == "Board"){
                            $(".list").eq(i).hide();
                        }
                    }  
                }
                //END: service select
                //START: location select
                for(let smallCity of smallCities){
                    if($("#location").val() == smallCity){
                        for(let j=0;j<100;j++){
                            if($(".sitterCity").eq(j).text() != smallCity){
                                $(".list").eq(j).hide();
                            }
                        }
                    }
                }
                //END: location select
            })
        })
    // }
}

export default LocationSelect;