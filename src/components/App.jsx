import React, { Component } from "react";
import Header from "./Header";
import HowItWorks from "./HowItWorks/HowItWorks";
import Calendar from "./Calendar/Calendar";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <div className="content">
            <Header />
            <div className="body-wrap">
              <Route exact path="/" component={HowItWorks} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/calendar" component={Calendar} />
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
