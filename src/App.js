import logo from './logo.svg';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Recent from './Components/Recent';
import About from './Components/About';
import Posts from './Components/Posts';
import View from './Components/View';
import Comment from './Components/Comment';
import Products from './Components/Products';
function App() {
  return (
      <Router>
      <Switch>
      <Route exact path="/">
      <Header />
      <Intro />
      <About />
      <Products />
      <Recent />
      <Footer />
      </Route>
      <Route exact path="/View">
      <View/>
      </Route>
      <Route exact path="/Comment">
      <Comment/>
      </Route>
      </Switch>
      </Router>
  )
}

export default App;
