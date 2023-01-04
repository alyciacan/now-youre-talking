import './App.css';
import Searchbar from '../Searchbar/Searchbar';
import Articlelist from '../Articlelist/Articlelist';


function App() {
  return (
  <main className="app">
    <header className="header">
      <h1>Now You're Talking</h1>
      <Searchbar />
    </header>
    <hr />
    <Articlelist />
  </main>
  );
}

export default App;
