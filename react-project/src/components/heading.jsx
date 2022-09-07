import { Component } from "react";

class Heading extends Component {
  /*
    props: {
      title: "Hello World"
    }
    */
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

export default Heading;
