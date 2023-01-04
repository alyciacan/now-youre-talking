import './App.css';
import Searchbar from '../Searchbar/Searchbar';
import Articlelist from '../Articlelist/Articlelist';
import { getTopStories, getFilteredStories } from '../utils/apicalls';
import { useState, useEffect, useRef } from 'react';


function App() {
  const [stories, setStories] = useState([]);
  const filter = useRef('Home');
  const [filteredStories, setFilteredStories] = useState([]);

  useEffect(() => {
    getTopStories()
      .then(stories => setStories(stories.results))
  }, [])

  const selectCategory = (e) => {
   filter.current = e.target.value;
   getFilteredStories(filter.current)
    .then(stories => setFilteredStories(stories.results))
  }

  const checkForFilteredStories = () => {
    if(filteredStories.length) {
      return filteredStories;
    } else {
      return stories;
    }
  }

  return (
  <main className="app">
    <header className="header">
      <h1>Now You're Talking</h1>
      <Searchbar 
        stories={ stories }
        selectCategory={ selectCategory }/>
    </header>
    <hr />
    <Articlelist stories={ checkForFilteredStories() } header={ filter.current } />
  </main>
  );
}

export default App;
