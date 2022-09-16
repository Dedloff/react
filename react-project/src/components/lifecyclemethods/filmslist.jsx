import { Component } from "react";
import { getData } from "../../helpers/data";

class FilmsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isLoading: true,
    };
  }

  async getFilms() {
    let list = await getData("films");
    this.setState({ list, isLoading: false });
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <ul>
          {this.state.list.map((film) => (
            <li key={film.id}>{film.title}</li>
          ))}
        </ul>
      );
    }
  }
}

export default FilmsList;
