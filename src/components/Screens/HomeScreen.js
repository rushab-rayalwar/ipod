import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/page.module.css';


export default class HomeScreen extends React.Component {
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
    //                 <div className={this.props.optionHighlighted=='music'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
    //                     <span>Music</span>
    //                     <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
    //                 </div>
    //                 <div className={this.props.optionHighlighted=='photos'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
    //                     <span>Photos</span>
    //                     <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
    //                 </div>
    //                 <div className={this.props.optionHighlighted=='videos'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
    //                     <span>Videos</span>
    //                     <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
    //                 </div>
    //                 <div className={this.props.optionHighlighted=='settings'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
    //                     <span>Settings</span>
    //                     <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
    //                 </div>
    //                 <div className={this.props.optionHighlighted=='about'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
    //                     <span>About</span>
    //                     <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
    //                 </div>
    //             </div>
    //         </section>
    //     </div>
    //     </>);
    // }
    render(){
        return (
                <div className={styles.body}>
                    <div className={this.props.optionHighlighted=='music'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
                        <span>Music</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div className={this.props.optionHighlighted=='photos'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
                        <span>Photos</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div className={this.props.optionHighlighted=='videos'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
                        <span>Videos</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div className={this.props.optionHighlighted=='settings'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
                        <span>Settings</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                    <div className={this.props.optionHighlighted=='about'?`${styles.selected} ${styles.option}`:`${styles.option}`}>
                        <span>About</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles['arrow-right']}/>
                    </div>
                </div>
        );
    }
}