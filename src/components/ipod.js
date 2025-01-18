import React from 'react';
import styles from '../styles/ipod.module.css';
import iPodImage from '../images/iPod.png';

export default class Ipod extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className={styles.ipod}>
                <img src={iPodImage}></img>
            </div>
        )
    }
}