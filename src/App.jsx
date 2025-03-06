import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'


//ClientID: 1d11739c7f2a47d9b84780ec64e06aee
//ClientSecret: 6090551b1ec9432cabe3f5804c28f9d4

function App() {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);



  const handleSearch = (query) => {

    console.log(`query ${query}`);

    const dummyTracks = [
      {artist: 'D-Sturb', trackName: 'Anxious'},
      {artist: 'Myst', trackName: 'Relentless'}, 
      {artist: 'D-Sturb', trackName: 'The Edge (of the End)'},
      {artist: 'D-Sturb', trackName: 'The Edge (of the End)'}
    ];

    console.log(`Dummy tracks ${dummyTracks}`);

    const filteredTracks = dummyTracks.filter(track =>
      track.artist.toLowerCase().includes(query.toLowerCase()) ||
      track.trackName.toLowerCase().includes(query.toLowerCase())
    )

    setResults(filteredTracks);
        console.log(filteredTracks);

  }



  return (
    <div>
      <h1 className='header'>Jammming</h1>
      <SearchBar onSearch={handleSearch}/>
      {results.length > 0 && <SearchResults results={results}/>}
    </div>
  )
}

export default App;
