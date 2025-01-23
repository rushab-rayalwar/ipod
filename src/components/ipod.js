import React from 'react';
import styles from '../styles/ipod.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // NOTE this is how you import the icons
import { faPlay, faPause, faForward, faBackward, faBars } from '@fortawesome/free-solid-svg-icons';

import HomeScreen from './HomeScreen';
export default class Ipod extends React.Component {
    constructor(props){
        super(props);
        this.screens = ['HomeScreen'];
        this.state = {
            currentScreen: this.screens[0]
        };

        this.wheelRef = React.createRef(); // NOTE : this is how you access elements from DOM
        this.wheelCenterX = null;
        this.wheelCenterY = null;

        this.mouseX = null; // Position of the mouse when hovering on the wheel
        this.mouseY = null;

        this.mouseDown = false;
    }

    calculateWheelCenter = ()=>{
        let wheel = this.wheelRef.current;
        let wheelBoundingRectangle = wheel.getBoundingClientRect();

        this.wheelCenterX = wheelBoundingRectangle.left + ( wheelBoundingRectangle.width / 2);
        this.wheelCenterY = wheelBoundingRectangle.top + (wheelBoundingRectangle.height / 2);
    }
    handleMouseDown =(e)=>{
        this.mouseDown = true; console.log('mouse down');
    }
    handleScroll = (e)=>{
        if(this.mouseDown){
            let currentX = e.clientX;
            let currentY = e.clientY;

            if(this.mouseX&&this.mouseY){
                let dy = currentY - this.mouseY;
                let dx = currentX - this.mouseX; console.log('change in mouse',dx,dy);
                let angleInRadians = Math.atan2(dy,dx);
                let angleInDegrees = (angleInRadians * 360) / (2 * Math.PI);
                this.mouseX = currentX;
                this.mouseY = currentY;
            } else {
                this.mouseX = currentX;
                this.mouseY = currentY;
            }
        }
    }
    handleMouseUp = (e)=>{
        this.mouseDown = false; console.log('Mouse Up');
    }
    handleMouseLeave = (e)=>{
        this.mouseDown = false; console.log('Mouse Leave');
    }
    render(){
        return (
            <div className={styles["ipod-body"]}>
                <header>
                    <div className={styles.screen}>
                        <HomeScreen/>
                    </div>
                </header>
                <footer>
                    <div ref={this.wheelRef} className={styles["nav-circle"]} onMouseDown={this.handleMouseDown} onMouseMove={this.handleScroll} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseLeave}></div>
                    <div id="menu-button" className={`${styles.button} ${styles['menu-button']}`}>MENU</div>
                    <div id="forward-button" className={`${styles.button} ${styles['forward-button']}`}><FontAwesomeIcon icon={faForward}/></div>
                    <div id="play-pause-button" className={`${styles.button} ${styles['play-pause-button']}`}><FontAwesomeIcon icon={faPlay} style={{marginRight:"5px", transform:"scale(0.9)"}}/><FontAwesomeIcon icon={faPause}/></div>
                    <div id="previous-button" className={`${styles.button} ${styles['previous-button']}`}><FontAwesomeIcon icon={faBackward}/></div>
                </footer>
            </div>
        )
    }
    componentDidMount(){
        this.calculateWheelCenter();
        window.addEventListener('resize',this.calculateWheelCenter); // NOTE: This ensures the center is recalculated whenever the viewport dimensions change, which may alter the position of the iPod body.
    }
}