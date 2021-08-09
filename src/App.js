import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navi from "./components/Navbar/navbar";
// import Footer from "./components/Footer/footer";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Research from "./pages/Research";
import Jo from "./pages/Jo";
import Wikalang from "./pages/Wikalang";
import Anthro118 from "./pages/A118";
import Purito from "./pages/purito";
import Footer from "./components/Footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navi />
        <Switch>
          {/* <Route exact path="/">
            <Portfolio />
          </Route> */}
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/media">
            <Portfolio />
          </Route>
          <Route exact path="/anthropology">
            <Research />
          </Route>
          <Route exact path="/jothefish">
            <Jo />
          </Route>
          <Route exact path="/wikalang">
            <Wikalang />
          </Route>
          <Route exact path="/a118">
            <Anthro118 />
          </Route>
          <Route>
            <Purito />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
