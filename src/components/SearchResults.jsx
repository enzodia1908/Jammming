import React from 'react';
import Tracklist from './Tracklist';

function SearchResults({results}){

    return (
        <div>
            <Tracklist result={results}/>
        </div>
    );
};

export default SearchResults;