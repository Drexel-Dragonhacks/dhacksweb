import React from "react";
import "./styles.scss";
// import MytypedComponent from "../typing-effect/typing.js"
// import TOGGLE from "../toggle-button/toggle";
import HomePage from "../Main-page/HomePage";
// import logo from "./logoo.png"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Facebook from "../Routes/Facebook";
import Twitter from "../Routes/Twitter";
import Linkedin from "../Routes/LinkedIn";
import Instagram from "../Routes/Instagram";
import Devpost from "../Routes/Devpost";

export default class NAVBAR extends React.Component {
  state = {
    color: "#121930"
  };
  listenScrollEvent = e => {
    if (window.scrollY > 800) {
      this.setState({color: "rgba(49, 195, 232, 1)"});
    } else {
      this.setState({color: "#95C3E8"});
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Router>
        <div>
         {/* <nav className="nav_bar" style={{backgroundColor: this.state.color}}>
            <ul>
              <li>
                <Link to="/" smooth={true} spy={true} duration={1000}>
                  <span className="links">Home </span>{" "}
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="sponsor" smooth={true} spy={true} duration={1000}>
                  <span className="links">Sponsors </span>{" "}
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <span className="links">More info </span>{" "}
                </Link>
              </li>

            </ul>
          </nav>*/}

          <Switch>
            <Route path="/facebook" exact component={Facebook} />
            <Route path="/linkedin" exact component={Linkedin} />
            <Route path="/devpost" exact component={Devpost} />
            <Route path="/twitter" exact component={Twitter} />
            <Route path="/instagram" exact component={Instagram} />
            <Route path="/contact">
              <HomePage />
            </Route>
            <Route path="/links">
              <HomePage />
            </Route>
            <Route path="/projects">
              <HomePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Projects() {
  return <h2>Projects here</h2>;
}

function Contact() {
  return <h2>contact info</h2>;
}

function Links() {
  return <h2>Home</h2>;
}
