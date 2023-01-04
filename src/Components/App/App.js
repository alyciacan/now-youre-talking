import './App.css';
import Searchbar from '../Searchbar/Searchbar';
import Articlelist from '../Articlelist/Articlelist';
import { getTopStories } from '../utils/apicalls';
import { useState, useEffect } from 'react';


function App() {
  const [stories, setStories] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    getTopStories()
      .then(stories => setStories(stories.results))
  }, [])

  // console.log(stories)
  return (
  <main className="app">
    <header className="header">
      <h1>Now You're Talking</h1>
      <Searchbar />
    </header>
    <hr />
    <Articlelist stories={ stories } />
  </main>
  );
}

export default App;
