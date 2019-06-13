import React, { Component } from "react";
import getData from "./requestAPI";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    getData()
        .then(data => this.setState(({
          data: data.results
      })))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        {this.state.data.map(item => console.log(item.name))}
      </div>
    );
  }
}

export default App;
