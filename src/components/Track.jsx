import React from 'react';
import styles from '../styles/Track.module.css'

function Track({track}) {

    const onAdd = () => {

    };

    return (
        <div>
            <span>
                <button onClick={onAdd}>+</button>
                {track.trackName} by {track.artist} 
                
            </span>
        </div>
    );
};

export default Track;