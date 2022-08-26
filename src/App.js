import logo from "./logo.svg";
import "./App.css";
import Search from './Search'
import Notes from './Notes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React-Redux Blocknote App</h1>
        <Search />
        <Notes/>
      </header>
    </div>
  );
}

export default App;
