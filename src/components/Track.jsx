import React from 'react';
import styles from '../styles/Track.module.css'

function Track({track}) {

    return (
        <div>
            <span>{track.trackName} by {track.artist}</span>
        </div>
    );
};

export default Track;