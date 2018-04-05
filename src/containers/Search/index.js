import React from "react";
import Search from "../../components/Search";

class SearchContainer extends React.Component {
  state = {
    articles: []
  };

  performSearch = query => {
    fetch(`http://localhost:3456/?searchTerm=${query}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ articles: data.response.results });
      });
  };

  render() {
    return (
      <Search
        performSearch={this.performSearch}
        articles={this.state.articles}
      />
    );
  }
}

export default SearchContainer;
