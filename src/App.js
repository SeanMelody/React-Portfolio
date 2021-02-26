// Import all the goodness
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//App pages styling
import './App.css';
import Nav from "./Components/Nav/Nav"
import Home from "./Pages/Home/Home"
import Portfolio from "./Pages/Portfolio/Portfolio"
import Contact from "./Pages/Contact/Contact"
import Footer from './Components/Footer/Footer';
import About from "./Pages/About/About"

// Whole website displayed her, via React
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
