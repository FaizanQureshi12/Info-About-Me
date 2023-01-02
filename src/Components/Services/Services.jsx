import React from "react";
import Card from "../Card/Card";
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png' 
import Glasses from '../../img/glasses.png' 
import Humble from '../../img/humble.png' 
import Resume from './resume.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";
// import {motion} from 'framer-motion'

const Services =()=>{
    // const transition = {duration :1,type:'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
<div className="services" id="Services">
    {/* left side */}
    <div className="awesome">
<span style={{color:darkMode? 'white':''}}>My Awesome </span>
<span>Services</span>
<span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium possimus harum velit vitae, 
    <br />
     ratione unde excepturi natus. Neque dolorum beatae et. 
</span>
<a href={Resume} download>
<button className="button s-button">Download CV</button>
</a>
    <div className="blur s-blurl" style={{background: '#ABF1FF94'}}></div>
    
    </div>
    {/* Right side */}
    <div className="cards">
    {/* <motion.div */}
    <div
    // whileInView={{left:'14rem'}}
    // initial={{left:'25rem'}}
    // transition={transition}
    style={{left:'14rem'}}
    >
        <Card 
        emoji ={HeartEmoji}
        heading ={'Design'}
        detail = {'Figma,Sketch, Material Ui, Adobe,BootStrap,Tailwind.CSS'}
        />
    </div>
    {/* </motion.div> */}

    <div 
    //  initial={{ left: "-11rem", top: "12rem" }}
    //  whileInView={{ left: "-4rem" }}
    //  transition={transition}
    style={{left:'-4rem', top:'12rem'}}>
        <Card 
        emoji ={Glasses}
        heading ={'Developer'}
        detail = {'Html,CSS,JavaScript, React.Js, Express.js,MonGoDB,FireBase'}
        />
    </div>

    <div 
    //  initial={{ top: "19rem", left: "25rem" }}
    //  whileInView={{ left: "12rem" }}
    //  transition={transition}
    style={{left:'12rem', top:'19rem'}}>
        <Card 
        emoji ={Humble}
        heading ={'UI/Ux'}
        detail = {"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  voluptate fa iste fugit? Sed."
    }
        />
    </div>
    <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
    </div>
</div>
    )
}
export default Services