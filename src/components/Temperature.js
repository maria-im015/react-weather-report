import React from 'react';
import { useState } from 'react';
import './Temperature.css';

const Temperature = (props) => {
    const [temp, updateTemp] = useState(props.currentTemp);

    const increaseTemp = () => {
        ;updateTemp(temp + 1);
    }

    const decreaseTemp = () => {
        updateTemp(temp - 1);
    };

    const tempColor = () => {
        if (temp >= 80) {
            return 'red';
        }
        else if (temp <= 79 && temp >= 70){
            return 'orange';
        }
        else if (temp <= 69 && temp >= 60){
            return 'yellow';
        }
        else if (temp <= 59 && temp >= 50){
            return 'green';
        }
        else if (temp <= 49){
            return 'teal';
        }
    };

    return (
        <section>
            <p className={tempColor()}>Current Temperature: {temp} °F</p>
            <button className='button' onClick={increaseTemp}>Increase Temp</button>
            <button className='button' onClick={decreaseTemp}>Decrease Temp</button>
        </section>
    );
};

export default Temperature;