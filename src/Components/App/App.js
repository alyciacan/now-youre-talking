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
    console.log('useeffect triggered', filter.current)
    getTopStories()
      .then(stories => setStories(stories.results))
  }, [])

  const selectCategory = (e) => {
   filter.current = e.target.value;
   getFilteredStories(filter.current)
    .then(stories => setFilteredStories(stories.results))
  }

  const checkForFilteredStories = () => {
    console.log('checking for filtered stories')
    if(filteredStories.length) {
      return filteredStories;
    } else {
      return stories;
    }
  }
  console.log(filteredStories.length)
  return (
  <main className="app">
    <header className="header">
      <h1>Now You're Talking</h1>
      <Searchbar 
        stories={ stories }
        selectCategory={ selectCategory }/>
    </header>
    <hr />
    <Articlelist stories={ checkForFilteredStories() } />
  </main>
  );
}

export default App;
