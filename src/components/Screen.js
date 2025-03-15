import React from 'react';
import styles from '../styles/screen.module.css';

import HomeScreen from './HomeScreen'; // importing screens
import MusicScreen from './MusicScreen';

export default class Screen extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let screen;
        switch(this.props.currentScreen){
            case 'home':
                screen = <HomeScreen optionHighlighted = {this.props.optionHighlighted}/>;
                break;
            case 'music':
                screen = <MusicScreen optionHighlighted = { this.props.optionHighlighted } />
        }
        return(<>
        <div className={styles.screen}>
            {screen}
        </div>
        </>);
    }
}