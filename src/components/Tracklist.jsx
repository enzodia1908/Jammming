import React from 'react';
import Track from './Track'

function Tracklist({result}) {


    return (
        <div>
            <ul>
                <Track result={result}/>
            </ul>
        </div>
    );
};

export default Tracklist;