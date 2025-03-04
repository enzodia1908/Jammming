import React from 'react';
import Track from './Track'
import styles from '../styles/Tracklist.module.css'

function Tracklist({tracks}) {


    return (
        <div>
            <ul>
                {tracks.map((track) => (
                    <li>
                        <Track track={track}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tracklist;