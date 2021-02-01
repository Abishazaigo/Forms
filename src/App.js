import logo from './logo.svg';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import View from './Components/View';
import Comment from './Components/Comment';
function App() {
  return (
      <Router>
      <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/View">
      <Header />
      <View />
      <Footer />
      </Route>
      <Route exact path="/Comment">
      <Header />
      <Comment/>
      <Footer />
      </Route>
      </Switch>
      </Router>
  )
}

export default App;
