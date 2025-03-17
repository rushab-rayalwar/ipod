import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/page.module.css';


export default class MusicScreen extends React.Component {
    constructor(props){
        super(props);
        this.rightSection = React.createRef();
    }

    // render(){
    //     return(<>
    //     <div className={styles.screen}>
    //         <section className={styles.right} ref={this.rightSection}>  
    //             <div className={styles.header}>
    //                 <span>iPod</span>
    //                 <div className={styles.battery}>
    //                     <div className={styles['battery-main']}></div>
    //                     <div className={styles['battery-cap']}></div>
    //                 </div>
    //             </div>
    //             <div className={styles.body}>
    //                 <div className={this.props.optionHighlighted=='shuffle'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
    //                     <span>Shuffle</span>
    //                     <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
    //                 </div>
    //                 <div className={this.props.optionHighlighted=='allSongs'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
    //                     <span>All Songs</span>
    //                     <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
    //                 </div>
    //                 <div className={this.props.optionHighlighted=='albums'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
    //                     <span>Albums</span>
    //                     <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
    //                 </div>
    //                 <div className={this.props.optionHighlighted=='artists'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
    //                     <span>Artists</span>
    //                     <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
    //                 </div>
    //             </div>
    //         </section>
    //     </div>
    //     </>);
    // }
    render(){
        return(<>
        {/* <div className={styles.screen}>
            <section className={styles.right} ref={this.rightSection}>  
                <div className={styles.header}>
                    <span>iPod</span>
                    <div className={styles.battery}>
                        <div className={styles['battery-main']}></div>
                        <div className={styles['battery-cap']}></div>
                    </div>
                </div> */}
                <div className={styles.body}>
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
                </div>
            {/* </section>
        </div> */}
        </>);
    }
}