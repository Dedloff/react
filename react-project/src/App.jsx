import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    let newItems = [...this.state.list, this.state.text];

    this.setState({ list: newItems, text: "" });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
          <ul>
            {this.state.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
            <div>
              <input
                type="text"
                name="newTask"
                id="newTask"
                value={this.state.text}
                onChange={(event) =>
                  this.setState({ text: event.target.value })
                }
              />
              <button onClick={this.addItem}>Add</button>
            </div>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;

//passing prompts to components
