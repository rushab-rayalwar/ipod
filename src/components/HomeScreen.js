import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/screen.module.css';


export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentFocus : props.optionHighlighted
        };
    }
    render(){
        return(<>
        <div className={styles.screen}>
            <section className={styles.right}>
                <div className={styles.header}>
                    <span>iPod</span>
                    <div className={styles.battery}>
                        <div className={styles['battery-main']}></div>
                        <div className={styles['battery-cap']}></div>
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={this.state.currentFocus=='coverflow'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
                        <span>Cover flow</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div className={this.state.currentFocus=='music'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
                        <span>Music</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div className={this.state.currentFocus=='games'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
                        <span>Games</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div className={this.state.currentFocus=='settings'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
                        <span>Settings</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div className={this.state.currentFocus=='signin'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
                        <span>Sign In</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                </div>
            </section>
        </div>
        </>);
    }
}