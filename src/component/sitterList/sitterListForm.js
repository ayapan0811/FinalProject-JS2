import $ from 'jquery';

function SitterListForm() {

        const smallCities = ["Vancouver","Richmond","Burnaby","North Vancouver","West Vancouver","Downtown","South West","Plateau","Cote-des-Niege","City of Toronto","Halton","Peel","York","Durham"];
        const daysOfWeek = ["listSun","listMon","listTue","listWed","listThu","listFri","listSat"];

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
                        for(let i=0;i<100;i++){
                            if($(".sitterCity").eq(i).text() != smallCity){
                                $(".list").eq(i).hide();
                            }
                        }
                    }
                }
                //END: location select
                //START: day select
                for(let dayOfWeek of daysOfWeek){
                    if($("#day").val() == dayOfWeek){
                        for(let i=0;i<100;i++){
                            if($(`.${dayOfWeek}`).eq(i).attr('id') == "false"){
                                $(".list").eq(i).hide();
                            }
                        }  
                    }
                }
                //END: day select
                //START: size select
                for(let j=1; j<5; j++){
                    if($("#selected-size").val() == j){
                        for(let i=0;i<100;i++){
                            if($(".acceptedSize").eq(i).attr('id') != j){
                                $(".list").eq(i).hide();
                            }
                        }  
                    }
                }
                //END: size select
            })
        })
}

export default SitterListForm;