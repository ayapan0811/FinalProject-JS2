import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function FooterLinkList(props){
    return(
        <li>
            <FontAwesomeIcon icon={faAngleRight}/>
            <a href={props.link}>{props.name}</a>
        </li>
    );
}

export default FooterLinkList;