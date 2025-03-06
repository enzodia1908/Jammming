import React from 'react';
import Track from './Track'
import styles from '../styles/Tracklist.module.css'

function Tracklist({tracks}) {



    const handleClick = (e) => {
        newPlaylist.push(e.target.value);
        console.log(newPlaylist);
    };
    
    return (
        <div>
            <ul>
                {tracks.map((track) => (
                    <li>
                        <Track track={track}/>
                        <button value={{track.artist, track.trackName}} onClick={handleClick}>+</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tracklist;