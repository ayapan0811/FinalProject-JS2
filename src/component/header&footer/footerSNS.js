import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

function FooterSNS(){
    return(
        <section className="footer-aboutus">
            <h4>Bowwow sitter</h4>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores nam ipsa placeat aut? Accusamus doloribus laudantium quo saepe magnam. Repellat animi deserunt inventore eum officia itaque corporis velit aspernatur ipsam?
            </p>
            <ul>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default FooterSNS;