import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/screen.module.css';


export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.options=['CoverFlow','Music','Games','Settings','Sign In'];
        this.state = {
            currentFocus : this.options[0]
        };
    }
    render(){
        return(<>
        <div class={styles.screen}>
            <section class={styles.right}>
                <div class={styles.header}>
                    <span>iPod</span>
                    <div class={styles.battery}>
                        <div class={styles['battery-main']}></div>
                        <div class={styles['battery-cap']}></div>
                    </div>
                </div>
                <div class={styles.body}>
                    <div class={`${styles.option} ${styles.selected}`}>
                        <span>Cover flow</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div class={styles.option}>
                        <span>Music</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div class={styles.option}>
                        <span>Games</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div class={styles.option}>
                        <span>Settings</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div class={styles.option}>
                        <span>Sign In</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                </div>
            </section>
        </div>
        </>);
    }
}