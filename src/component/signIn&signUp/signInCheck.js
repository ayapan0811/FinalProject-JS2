import $ from "jquery";
import { useState, useEffect, forwardRef } from "react";

function SignInCheck(){

    // START: getting JSON file
    const [localUserList, setUserList] = useState([]);

    useEffect(function(){
        fetch("http://localhost:3200/user-api")
        .then((response) => response.json())
        .then(setUserList)
    }, []); 
    //END: getting JSON file

    let formCheck = null;
    $("main").ready(function(){
        $("form").submit((e)=>{
            e.preventDefault();
            localUserList.some((localUser)=>{
                formCheck = "fail";
                if($("#email").val() == localUser.email && $("#password").val() == localUser.password){
                    alert("Success to sign in!");
                    formCheck = null;
                    return true;
                }else if($("#email").val() == "" || $("#password").val() == ""){
                    formCheck = null;
                    alert("Fill both email and password");
                    return true;
                }
            })
            if(formCheck == "fail"){
                alert("Wrong email or password");
            }
        })
    });
}

export default SignInCheck;