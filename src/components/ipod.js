import React from 'react';
import styles from '../styles/ipod.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // NOTE this is how you import the icons
import { faPlay, faPause, faForward, faBackward, faBars } from '@fortawesome/free-solid-svg-icons';

import HomeScreen from './HomeScreen';
export default class Ipod extends React.Component {
    constructor(props){
        super(props);
        this.wheelRef = React.createRef();
        this.homeScreenOptions = ['coverflow','music','games','settings','signin'];

        this.wheelCenterX = 0;
        this.wheelCenterY = 0;

        this.angle = 0; // the option is highlighted with respect to this variable
        this.mouseDown = false;
        this.mouseStartX = null;
        this.mouseStartY = null;

        this.state = {
            homeScreenOptionHighlighted : this.homeScreenOptions[0]
        }
    }

    calculateWheelCenter = ()=>{ // this is called after the component mounts and everytime the width of the viewport changes
        let wheel = this.wheelRef.current;
        let wheelBoundingRectangle = wheel.getBoundingClientRect();

        this.wheelCenterX = wheelBoundingRectangle.left + ( wheelBoundingRectangle.width / 2);
        this.wheelCenterY = wheelBoundingRectangle.top + (wheelBoundingRectangle.height / 2);
    }
    handleMouseDown =(e)=>{
        this.mouseDown = true; console.log('Mouse Down');
        this.mouseStartX = e.clientX;
        this.mouseStartY = e.clientY;
    }
    handleScroll = (e)=>{
        if(this.mouseDown){
            let mouseStartX = this.mouseStartX, mouseStartY = this.mouseStartY;
            if(mouseStartX && mouseStartY){
                let currentX = e.clientX, currentY = e.clientY;
                let cX = this.wheelCenterX, cY = this.wheelCenterY;
                let angle1 = Math.atan2(currentY-cY,currentX-cX);
                let angle2 = Math.atan2(mouseStartY-cY,mouseStartX-cX);
                let angleMade = (angle1-angle2)*(360/(2*Math.PI)); // calculte the angle made at the center in degrees

                if (angleMade > 180) { // as the atan2 function return values in the range (-180,180], these calculations make sure the edge case where the pointer is initially in the 3rd quadrant and finally in the second is handled properly
                    angleMade -= 360;
                } else if (angleMade < -180) {
                    angleMade += 360;
                }

                this.angle += angleMade;
                this.mouseStartX = currentX;
                this.mouseStartY = currentY;
                console.log('angle',this.angle);
            } else {
                this.mouseStartX = e.clientX;
                this.mouseStartY = e.clientY;
            }
        }
    }
    handleMouseUp = (e)=>{
        this.mouseDown = false; console.log('Mouse Up');
        this.mouseStartX = null;
        this.mouseStartY = null;
    }
    handleMouseLeave = (e)=>{console.log('Mouse Leave');
    }
    render(){
        return (
            <div className={styles["ipod-body"]}>
                <header>
                    <div className={styles.screen}>
                        <HomeScreen optionHighlighted={this.state.homeScreenOptionHighlighted}/>
                    </div>
                </header>
                <footer>
                    <div ref={this.wheelRef} className={styles["nav-circle"]} onMouseDown={this.handleMouseDown} onMouseMove={this.handleScroll} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseLeave}></div>
                    {/* <div id="menu-button" className={`${styles.button} ${styles['menu-button']}`}>MENU</div>
                    <div id="forward-button" className={`${styles.button} ${styles['forward-button']}`}><FontAwesomeIcon icon={faForward}/></div>
                    <div id="play-pause-button" className={`${styles.button} ${styles['play-pause-button']}`}><FontAwesomeIcon icon={faPlay} style={{marginRight:"5px", transform:"scale(0.9)"}}/><FontAwesomeIcon icon={faPause}/></div>
                    <div id="previous-button" className={`${styles.button} ${styles['previous-button']}`}><FontAwesomeIcon icon={faBackward}/></div> */}
                </footer>
            </div>
        )
    }
    componentDidMount(){
        this.calculateWheelCenter();
        window.addEventListener('resize',this.calculateWheelCenter); // NOTE: This ensures the center is recalculated whenever the viewport dimensions change, which may alter the position of the iPod body.
    }
}