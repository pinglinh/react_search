import React from "react";
import style from "./Search.css";
import SearchResult from "../SearchResult";

// export class Search extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.stringQuery = this.stringQuery.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   stringQuery(event) {
//     return event.target.value.toString();
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <div className={style.searchBox}>
//         <h1>The Guardian Search App</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.props.stringQuery}
//             onChange={props.performSearch}
//           />
//         </form>
//         <div>
//           {props.articles.map((r, index) => {
//             return <SearchResult key={index} result={r} />;
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export class Search extends React.Component {
//   render() {
//     return (
//       <div className={style.searchBox}>
//         <h1>The Guardian Search App</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </form>
//         <div>
//           {this.state.articles.map((r, index) => {
//             return <SearchResult key={index} result={r} />;
//           })}
//         </div>
//       </div>
//     );
//   }
// }

const Search = props => {
  return (
    <div className={style.searchBox}>
      <h1>The Guardian Search App</h1>
      <form onSubmit={props.handleSubmit}>
        <input type="text" value={props.value} onChange={props.performSearch} />
      </form>
      <div>
        {props.articles.map((r, index) => {
          return <SearchResult key={index} result={r} />;
        })}
      </div>
    </div>
  );
};

export default Search;

// reposnible for getting the input in from the user and submitting it to the search container (parent)
