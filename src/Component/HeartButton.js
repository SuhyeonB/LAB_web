import React, {useState, useEffect} from 'react';
import HeartImg from '../images/heart/filled_heart.png';
import EmptyHeartImg from '../images/heart/empty_heart.png';

function HeartButton() {
    return (
        <div>
            <img src={HeartImg}/>
        </div>
    );
}

export default HeartButton;