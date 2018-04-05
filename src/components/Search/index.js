import React from "react";
import style from "./Search.css";
import SearchResults from "../SearchResults";
import PropTypes from "prop-types";

class Search extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    let value = event.target.value;
    this.setState({ value });
    this.props.performSearch(value);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

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
        <SearchResults articles={this.props.articles} />
      </div>
    );
  }
}

Search.propTypes = {
  performSearch: PropTypes.func,
  articles: PropTypes.array
};

export default Search;
