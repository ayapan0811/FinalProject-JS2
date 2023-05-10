import React, { useState, useEffect } from "react";
import $ from 'jquery';
import Header from '../header&footer/header';
import FooterLinkList from "../header&footer/footerList";
import FooterSNS from '../header&footer/footerSNS';

function Item(props) {

  return (
    <div className="box" id={props.typeId}>
        <figure>
            <img src={props.img} alt={props.name}/>
            <figcaption>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h3>{props.price}</h3>
            </figcaption>
        </figure>
    </div>
  );
}

const listFooter = [
    {name:"Top", link:"#header"},
    {name:"Home", link:"/"},
    {name:"Search Sitter", link:"/list"},
    {name:"Sign In", link:"/signIn"},
    {name:"Sign Up", link:"signUp"}
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
            <p>Copyright &copy; Bowwow sitter service </p>
        </footer>
    );
}

function Shop() {

  const [localProductList, setProductList] = useState([]);

  useEffect(function(){
    fetch("http://localhost:3300/product-api")
    .then((response) => response.json())
    .then(setProductList)
  }, []);

  return (
    <>
    <Header/>
    <main className="shop">
        <section id="menu">
            <form onSubmit={function selectType(e){
                e.preventDefault();
                $('.box').show();
                const types = [1,2];
                for(let type of types){
                    if($("#animal").val()== type){
                        for(let i=0;i<30;i++){
                            if($(`.box`).eq(i).attr('id') != type){
                                $(".box").eq(i).hide();
                            }
                        }
                    }
                }
            }}>
                <label htmlFor="">Animal Type 
                        <select name="animal" id="animal">
                        <option value="null"></option>
                            <option value="1">Dog</option>
                            <option value="2">Cat</option>
                        </select>
                </label>
                <button type="submit">Change</button>
            </form>
            <h2>
                Cart
            </h2>
        </section>
        <section id="box">
                {localProductList.map((item) => (
                  <Item 
                    typeId={item.typeId}
                    name={item.name}
                    img={item.img}
                    description={item.description}
                    price={item.price}
                    key={item.id}
                  />
                ))}
        </section>
    </main>
    <Footer/>
    </>
  );
  }
  
  export default Shop;