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
                    <div className={styles["nav-circle"]}></div>
                    <div id="menu-button" className={`${styles.button} ${styles['menu-button']}`}>MENU</div>
                    <div id="forward-button" className={`${styles.button} ${styles['forward-button']}`}><FontAwesomeIcon icon={faForward}/></div>
                    <div id="play-pause-button" className={`${styles.button} ${styles['play-pause-button']}`}><FontAwesomeIcon icon={faPlay} style={{marginRight:"5px", transform:"scale(0.9)"}}/><FontAwesomeIcon icon={faPause}/></div>
                    <div id="previous-button" className={`${styles.button} ${styles['previous-button']}`}><FontAwesomeIcon icon={faBackward}/></div>
                </footer>
            </div>
        )
    }
}