import React, { useState, useEffect } from "react";
import $ from 'jquery';

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
function Shop() {

  const [localProductList, setProductList] = useState([]);

  useEffect(function(){
    fetch("http://localhost:5500/product-api")
    .then((response) => response.json())
    .then(setProductList)
  }, []);

  return (
    <>
        <header>
        <section className="header-container">
            <section>
                <a href="#">
                    <i className="fa-solid fa-dog"></i>
                </a>
                <h1>Bawwau Sitter</h1>
            </section>
            <aside className="hg-menu">
                <i className="fa-solid fa-bars" id="open"></i>
            </aside>
            <article className="overlay">
                <i className="fa-solid fa-xmark" id="close"></i>
                <nav>
                    <ul>
                        <li><a href="#">Our Service</a></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Sign In</a></li>
                    </ul>
                </nav>
            </article>
        </section>
        {/* header-container */}
    </header>
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
    <footer>
        <section>
            <section className="footer-aboutus">
                <h4>Bawwow sitter</h4>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores nam ipsa placeat aut? Accusamus doloribus laudantium quo saepe magnam. Repellat animi deserunt inventore eum officia itaque corporis velit aspernatur ipsam?
                </p>
                <ul>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </section>
            <section className="link">
                <h3>Quick Links</h3>
                <ul>
                    <li>
                        <i className="fa-solid fa-angle-right"></i>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <i className="fa-solid fa-angle-right"></i>
                        <a href="">About us</a>
                    </li>
                    <li>
                        <i className="fa-solid fa-angle-right"></i>
                        <a href="">Our Services</a>
                    </li>
                    <li>
                        <i className="fa-solid fa-angle-right"></i>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <i className="fa-solid fa-angle-right"></i>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </section>
        </section>

        <p>Copyright &copy; Bawwow sitter service </p>
    </footer>
    </>
  );
  }
  
  export default Shop;
