import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PlanAll from "./PlanAll.jsx";
import UserAll from "./UserAll.jsx";
import PlanDetail from "./PlanDetail.jsx";
import UserDetail from "./UserDetail.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [],
      user: []
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route to="/" exact component={PlanAll} />
            <Route to="/plans/:id" component={PlanDetail} />
            <Route to="/users" exact component={UserAll} />
            <Route to="/users/:id" component={UserDetail} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

const renderPlanBox = () => {};

export default App;
