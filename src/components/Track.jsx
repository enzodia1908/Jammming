import React from 'react';

function Track({result}) {

    return (
        <div>
            <ol>
                {result.map((result) => (
                    <li>{result.trackName} by {result.artist}</li>
                ))}
            </ol>
        </div>
    );
};

export default Track;