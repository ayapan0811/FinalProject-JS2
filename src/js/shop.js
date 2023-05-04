import React, { useState, useEffect } from "react";
function Item(props) {

  return (
    <>
      <img src={props.img} alt={props.name}/>
      <figcaption>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <h3>{props.price}</h3>
      </figcaption>
    </>
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
        <section class="header-container">
            <section>
                <a href="#">
                    <i class="fa-solid fa-dog"></i>
                </a>
                <h1>Bawwau Sitter</h1>
            </section>
            <aside class="hg-menu">
                <i class="fa-solid fa-bars" id="open"></i>
            </aside>
            <article class="overlay">
                <i class="fa-solid fa-xmark" id="close"></i>
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
    <main class="shop">
        <section id="menu">
            <h2>
                Animal
            </h2>
            <h2>
                Product Type
            </h2>
            <h2>
                Cart
            </h2>
        </section>
        <section id="box">
            <div class="box">
              <figure>
                {localProductList.map((item) => (
                  <Item 
                    name={item.name}
                    img={item.img}
                    description={item.description}
                    price={item.price}
                    key={item.id}
                  />
                ))}
              </figure>
            </div>
        </section>
    </main>
    <footer>
        <section>
            <section class="footer-aboutus">
                <h4>Bawwow sitter</h4>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores nam ipsa placeat aut? Accusamus doloribus laudantium quo saepe magnam. Repellat animi deserunt inventore eum officia itaque corporis velit aspernatur ipsam?
                </p>
                <ul>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </section>
            <section class="link">
                <h3>Quick Links</h3>
                <ul>
                    <li>
                        <i class="fa-solid fa-angle-right"></i>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <i class="fa-solid fa-angle-right"></i>
                        <a href="">About us</a>
                    </li>
                    <li>
                        <i class="fa-solid fa-angle-right"></i>
                        <a href="">Our Services</a>
                    </li>
                    <li>
                        <i class="fa-solid fa-angle-right"></i>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <i class="fa-solid fa-angle-right"></i>
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
