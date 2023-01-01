import React from "react";
import Card from "../Card/Card";
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png' 
import Glasses from '../../img/glasses.png' 
import Humble from '../../img/humble.png' 
import Resume from './resume.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'

const Services =()=>{
    const transition = {duration :1,type:'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
<div className="services" id="Services">
    {/* left side */}
    <div className="awesome">
<span style={{color:darkMode? 'white':''}}>My Awesome </span>
<span>Services</span>
<spane>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium possimus harum velit vitae, 
    <br />
     ratione unde excepturi natus. Neque dolorum beatae et.
</spane>
<a href={Resume} download>
<button className="button s-button">Download CV</button>
</a>
    <div className="blur s-blurl" style={{background: '#ABF1FF94'}}></div>
    
    </div>
    {/* Right side */}
    <div className="cards">
    <motion.div
    whileInView={{left:'14rem'}}
    initial={{left:'25rem'}}
    transition={transition}
    style={{left:'14rem'}}>
        <Card 
        emoji ={HeartEmoji}
        heading ={'Design'}
        detail = {'Figma,Sketch, Material Ui,Adobe'}
        />
    </motion.div>

    <motion.div 
    // whileInView={{left:''}}
    // initial={{left:''}}
    // transition={transition}
    style={{left:'-4rem', top:'12rem'}}>
        <Card 
        emoji ={Glasses}
        heading ={'Developer'}
        detail = {'Html,CSS,JavaScript, React.Js, Express.js,MonGoDB,FireBase'}
        />
    </motion.div>

    <div style={{left:'12rem', top:'19rem'}}>
        <Card 
        emoji ={Humble}
        heading ={'UI/Ux'}
        detail = {"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro explicabo voluptate fa iste fugit? Sed."
    }
        />
    </div>
    <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
    </div>
</div>
    )
}
export default Services