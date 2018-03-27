import React from "react";
import Search from "../../components/Search";

export class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: "",
      articles: []
    };

    // this.handleChange = this.handleChange.bind(this);
    this.performSearch = this.performSearch.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  performSearch(query) {
    fetch(`http://localhost:3456/?searchTerm=${query}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ articles: data.response.results });
      });
  }

  // handleChange(event) {
  //   console.log(event);
  //   this.setState({ value: event.target.value });
  //   fetch(`http://localhost:3456/?searchTerm=${event.target.value}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ articles: data.response.results });
  //     });
  // }

  // handleChange(event) {
  //   console.log(event);
  //   this.setState({ value: event.target.value });
  //   fetch(
  //     `http://content.guardianapis.com/search?q=${
  //       event.target.value
  //     }&api-key=3e6177a5-bcb1-493d-ad07-20c4fab62575`
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.response.results);
  //       return data;
  //     })
  //     .then(data => this.setState({ articles: data.response.results }));
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  // }

  render() {
    return (
      <Search
        // handleSubmit={this.handleSubmit}
        // value={this.state.value}
        performSearch={this.performSearch}
        articles={this.state.articles}
      />
    );
  }
}

// responsible for fetching the data and passing the data to the child which is the search component
