import { Component } from "react";

class Button extends Component {
  render() {
    return <button onClick={this.props.onClick}>Click Me</button>;
  }
}

export default Button;
