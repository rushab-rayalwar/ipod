import React from 'react';
import styles from '../styles/screen.module.css';

import HomeScreen from './Screens/HomeScreen'; // importing screens
import MusicScreen from './Screens/MusicScreen';

export default class Screen extends React.Component {
    constructor(props){
        super(props);
        this.rightSection = React.createRef();
    }
    // render(){
    //     let screen;
    //     switch(this.props.currentScreen){
    //         case 'home':
    //             screen = <HomeScreen optionHighlighted = {this.props.optionHighlighted}/>;
    //             this.props.updateLastVisited("home");
    //             break;
    //         case 'music':
    //             screen = <MusicScreen optionHighlighted = { this.props.optionHighlighted } />
    //     }
    //     return(<>
    //     <div className={styles.screen}>
    //         {screen}
    //     </div>
    //     </>);
    // }
    render(){
        let screen;
        switch(this.props.currentScreen){
            case 'home':
                screen = <HomeScreen optionHighlighted = {this.props.optionHighlighted}/>;
                this.props.updateLastVisited("home");
                break;
            case 'music':
                screen = <MusicScreen optionHighlighted = { this.props.optionHighlighted } />
        }
        return(<>
        <div className={styles.screen}>
            <section className={styles.right} ref={this.rightSection}>  
                <div className={styles.header}>
                    <span>iPod</span>
                    <div className={styles.battery}>
                        <div className={styles['battery-main']}></div>
                        <div className={styles['battery-cap']}></div>
                    </div>
                </div>
                {/* <div className={styles.body}>
                    <div className={this.props.optionHighlighted=='shuffle'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
                        <span>Shuffle</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div className={this.props.optionHighlighted=='allSongs'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
                        <span>All Songs</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div className={this.props.optionHighlighted=='albums'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
                        <span>Albums</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div className={this.props.optionHighlighted=='artists'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
                        <span>Artists</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                </div> */}
                {screen}
            </section>
        </div>
        </>);
    }
}