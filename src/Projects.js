import cal from "./images/cal.png";
import sap from "./images/sap.png";
import hotel from "./images/hotels.jpg";
import ecom from "./images/ecom.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft, faArrowCircleUp, faArchway, faArrowTrendUp} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    return (
        <div className="all-projects">
            <div className="projects">
            <h2>My Projects</h2>
        </div>
        <div className="apps">
            <div className="project1">
                <h1>CALCULATOR APP</h1><br />
                <img src={cal} height={200} width={200} alt="cal"/>
                <p>This is a simple working Calculator that has the ability to perform simple arithmetics.</p><br /><br />
                <br />
                Skills Used: <section>HTML, CSS, JavaScrit, React</section><br />
                <button className="cal-button"><a href="https://kingdee211.github.io/CalProject/" target="_blank">See it Live <FontAwesomeIcon icon={faArrowTrendUp}/></a></button>
            </div>

            <div className="project1">
                <h1>SINGLE WEBPAGE</h1><br />
                <img src={sap} height={200} width={200}/><br/>
                <p>This page was built simply for learning and practice purpose. It was the first ever to built by me.</p><br/><br/><br/>
                Skills Used: <section>HTML, CSS</section><br />
                <button className="cal-button"><a href="https://kingdee211.github.io/My-Portfolio-Website/" target="_blank">See it Live <FontAwesomeIcon icon={faArrowTrendUp}/></a></button>
            </div>

            <div className="project1">
                <h1>E-COMMERCE WEBSITE</h1><br />
                <img src={ecom} height={200} width={200}/><br/>
                <p>This project will employ all the frontend features of an E-commerce site, such as shopping cart, product listing with prices, checkout buttons, and search functionality.</p><br/><br/><br/>
                Skills Used: <section>HTML, CSS, JavaScrit, React, Figma</section><br />
                <button className="cal-button"><a target="_blank">COMING SOON</a></button>
            </div>

            <div className="project1">
                <h1>LITTLE LEMON HOTEL</h1><br />
                <img src={hotel} height={200} width={200}/><br/>
                <p>This is a restaurant website with an online ordering system, and a table reservation feature.</p><br/><br/><br/>
                Skills Used: <section>HTML, CSS, JavaScrit, React, Figma</section><br />
                <button className="cal-button"><a target="_blank">COMING SOON</a></button>
            </div>
        </div>
        
        </div>
    )
};

export default Projects;