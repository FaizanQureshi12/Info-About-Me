import React from "react";
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png' 
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from "../../Context";
import { useContext } from "react";
// import {motion} from 'framer-motion'


const Works = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="works">
            {/* left side */}
            <div className="awesome">
                <span style={{color:darkMode? 'white':''}}>Works for All these </span>
                <span>Brands & Clients</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium possimus harum velit vitae,
                    <br />
                    ratione unde excepturi natus. Neque dolorum beatae et.
                    <br />
                    ratione unde excepturi natus. Neque dolorum beatae et. Working with Passion
                    <br />
                    ratione unde excepturi natus.
                </span>
                    <button className="button s-button">Hire me</button>
                <div className="blur s-blurl" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right side */}
            <div className="w-right">
                {/* <motion.div */}
                <div
                // initial={{rotate:45}}
                // whileInView={{rotate:0}}
                // viewport={{margin:'-40px'}}
                // transition={{duration:3.5,type:"spring"}}
                className="w-mainCircle">
                    <div className="w-secCircle">
                        <a href="https://www.upwork.com/freelancers/~01546dfc05e27f7975" target='blank'>
                        <img src={Upwork} alt="" />
                        </a>
                    </div>
                    <div className="w-secCircle">
                        <a href="https://www.fiverr.com/faizanquresh246" target='blank'>
                        <img src={Fiverr} alt="" />
                        </a>
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <a href="https://web.facebook.com/FaizanDynamicEarth123" target='blank'>
                        <img src={Facebook} alt="" />
                        </a>
                    </div>
                </div>
                {/* </motion.div> */}
                {/* background circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}
export default Works