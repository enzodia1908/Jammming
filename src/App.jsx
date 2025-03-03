import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'


//ClientID: 1d11739c7f2a47d9b84780ec64e06aee
//ClientSecret: 6090551b1ec9432cabe3f5804c28f9d4

function App() {

  const [results, setResults] = useState([]);



  const handleSearch = (query) => {

    const dummyTracks = [
      {artist: 'D-Sturb', trackName: 'Anxious'},
      {artist: 'Myst', trackName: 'Relentless'}, 
      {artist: 'D-Sturb', trackName: 'The Edge (of the End)'}
    ];

    setResults(dummyTracks);
  }



  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar value={searchQuery} onSearch={handleSearch}/>
      {results.length > 0 && <SearchResults results={results}/>}
    </div>
  )
}

export default App;
