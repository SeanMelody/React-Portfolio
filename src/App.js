import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from "./Components/Nav/Nav"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

      </BrowserRouter>
    </div>
  );
}

export default App;
