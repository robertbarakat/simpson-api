import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";
import ChangeQuote from "./ChangeQuote";

const sampleSimpson = {
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection: "Left"
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      simpson: sampleSimpson
    }
  }

  toggle() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.json())
      .then(data => {
        this.setState(
          { simpson: data[0] }
        )
      }
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <ChangeQuote click = {() => this.toggle()} />
        <Quote mySimpson = {this.state.simpson}
        />

      </div>
    );
  }
}

export default App;