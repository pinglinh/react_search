import React from "react";
import style from "./Search.css";
import Result from "./Result";

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      articles: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    fetch("/public/data.json")
      .then(response => response.json())
      .then(data => this.setState({ articles: data.articles }));
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className={style.searchBox}>
        <h1>The Guardian Search App</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <div>
          {this.state.articles.map((r, index) => {
            return <Result key={index} result={r} />;
          })}
        </div>
      </div>
    );
  }
}
