import React from 'react';
import styles from '../styles/ipod.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // NOTE this is how you import the icons
import { faPlay, faPause, faForward, faBackward, faBars } from '@fortawesome/free-solid-svg-icons';
import Screen from './Screen';
export default class Ipod extends React.Component {
    constructor(props){
        super(props);
        this.wheelRef = React.createRef();

        this.wheelCenterX = 0;
        this.wheelCenterY = 0;

        this.angle = 0; // the option on a screen is highlighted with respect to this variable

        this.homeScreenOptions = ['music','photos','videos','settings','about'];
        this.musicScreenOptions = ['shuffle','allSongs','albums','artists'];
        this.screens = ['home','music','photos','videos','settings','about'];
        this.currentOptions = this.homeScreenOptions;

        this.mouseDown = false;
        this.mouseStartX = null;
        this.mouseStartY = null;

        this.state = {
            optionHighlighted : this.currentOptions[0],
            currentScreen : 'home'
        }
       
        this.lastVisited = ""
    }
    
    handleMiddleButtonClick = (e)=>{
        console.log("Middle Button Clicked");
        switch(this.state.optionHighlighted) {
            case "home":
                this.currentOptions = this.homeScreenOptions;
                break;
            case "music":
                this.currentOptions = this.musicScreenOptions
        }
        this.setState((prevState)=>({
            currentScreen :  prevState.optionHighlighted,
            optionHighlighted : this.currentOptions[0]
        })) ;
    }
    calculateWheelCenter = ()=>{ // this is called after the component mounts and everytime the width of the viewport changes
        let wheel = this.wheelRef.current;
        if(!wheel) return; // this statement prevents unnecesaary crash that could occur if the reference is accessed before it is rendered
        let wheelBoundingRectangle = wheel.getBoundingClientRect();

        this.wheelCenterX = wheelBoundingRectangle.left + ( wheelBoundingRectangle.width / 2);
        this.wheelCenterY = wheelBoundingRectangle.top + (wheelBoundingRectangle.height / 2);
    }
    handleMouseDown =(e)=>{
        this.mouseDown = true; console.log('Mouse Down');
        this.mouseStartX = e.clientX;
        this.mouseStartY = e.clientY;
    }
    handleMouseUp = (e)=>{
        this.mouseDown = false; console.log('Mouse Up');
        this.mouseStartX = null;
        this.mouseStartY = null;
    }
    handleMouseLeave = (e)=>{
        // Check if the new element (relatedTarget) is still inside the wheel
        if (this.wheelRef.current && e.relatedTarget && this.wheelRef.current.contains(e.relatedTarget)) {
            return; // Do nothing because the mouse is still over a child of the wheel
        }
        console.log('Mouse Leave');
        this.mouseDown = false;
        this.mouseStartX = null;
        this.mouseStartY = null;
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

                if (angleMade > 180) { // as the atan2 function return values in the range (-180,180], these calculations make sure that the edge case where the pointer is initially in the 3rd quadrant and finally in the second is handled properly avoiding unexpected jumps by essentially calculating the shortest angle
                    angleMade -= 360;
                } else if (angleMade < -180) {
                    angleMade += 360;
                }

                this.setState((prevState)=>({
                    angle: prevState.angle + angleMade
                }))
                this.angle += angleMade;
    
                let indexToBeHighlighted = (Math.floor(((this.angle % 135) / 135) * (this.currentOptions.length))) ;
                if(indexToBeHighlighted < 0) {
                    indexToBeHighlighted += this.currentOptions.length;
                }
                this.setState(()=>({
                    optionHighlighted: this.currentOptions[indexToBeHighlighted]
                }));

                this.mouseStartX = currentX;
                this.mouseStartY = currentY;
                console.log('angle',this.angle);
            } else {
                this.mouseStartX = e.clientX;
                this.mouseStartY = e.clientY;
            }
        }
    }
    updateLastVisited = (lastvisited)=>{
        this.lastVisited = lastvisited;
        
    }
    handleMenuButtonClick = (e)=>{
        if(this.lastVisited == ""){
            return ;
        } else {
            this.currentOptions = this.homeScreenOptions;
            this.setState((prevState)=>({
                currentScreen: this.lastVisited,
                optionHighlighted : this.currentOptions[0]
            }));
        }
    }
    render(){
        return (
            <div className={styles["ipod-body"]}>
                <header>
                    <div className={styles.screen}>
                        <Screen optionHighlighted = {this.state.optionHighlighted} currentScreen={this.state.currentScreen} updateLastVisited={this.updateLastVisited}/>
                    </div>
                </header>
                <footer>
                    <div ref={this.wheelRef} className={styles["nav-circle"]} onMouseDown={this.handleMouseDown} onMouseMove={this.handleScroll} onMouseUp={this.handleMouseUp} onMouseOut={this.handleMouseLeave}>
                        <div className={styles["middle-button-transparent"]} onClick = {this.handleMiddleButtonClick} ></div>
                        <div id="menu-button" className={`${styles.button} ${styles['menu-button']}`} onClick={this.handleMenuButtonClick}>MENU</div>
                        <div id="forward-button" className={`${styles.button} ${styles['forward-button']}`}><FontAwesomeIcon icon={faForward}/></div>
                        <div id="play-pause-button" className={`${styles.button} ${styles['play-pause-button']}`}><FontAwesomeIcon icon={faPlay} style={{marginRight:"5px", transform:"scale(0.9)"}}/><FontAwesomeIcon icon={faPause}/></div>
                        <div id="previous-button" className={`${styles.button} ${styles['previous-button']}`}><FontAwesomeIcon icon={faBackward}/></div>
                    </div>
                </footer>
            </div>
        )
    }
    componentDidMount(){
        this.calculateWheelCenter();
        window.addEventListener('resize',this.calculateWheelCenter); // NOTE: This ensures the center is recalculated whenever the viewport dimensions change, which may alter the position of the iPod body.
    }
}