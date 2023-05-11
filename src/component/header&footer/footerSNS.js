import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

function FooterSNS(){
    return(
        <section className="footer-aboutus">
            <h4>Bowwow sitter</h4>
            <p>
                Dogs and cats are like family members.
                If you have to be away from home for a long period of time for work, or for travel, or if your are unable to walk the dog because of illness or injury. You can connect with a sitter near you and leave your precious pet with them.
                We have an online shop selling dog and cat food too!
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