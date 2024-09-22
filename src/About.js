import profile from "./images/profile.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import wave from "./images/wave.png"

const About = () => {
    return (
        <div className="div" id="div">
             <h2>About Me</h2>
            <div className="about">
            <div className="about1">
                <h3>Hey there <img src={wave} height={20} className="wave"/>, </h3>
                <h4>My name is Gai Deng, a <span>React Developer</span> based in Toronto, ON, Canada. </h4>
                <h4>I excel in frontend development, particularly in UX/UI design.</h4>
                <h4>Additionally, I am pursuing a double major in Computer Science and Economics at the University of Toronto.</h4>
            </div>

            <div className="about2">
                <img src={profile} alt="profile picture" height={100} className="profile"/>
            <div className="resume">
                <button className="resume-button"><a href={`${process.env.PUBLIC_URL}/gai.pdf`} target="_blank">View My Resume</a></button>
                <button className="resume-button"><a href={`${process.env.PUBLIC_URL}/gai.pdf`} target="_blank" download="gai.pdf">Download My Resume <FontAwesomeIcon icon={faDownload}/></a></button>
            </div>
            </div>
        </div>
        </div>
    )
};

export default About;