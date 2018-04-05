import React from "react";
import style from "./SearchResult.css";
import PropTypes from "prop-types";

const SearchResult = ({ articles = [] }) => {
  return (
    <ul>
      {articles.map(({ id, webUrl, webTitle }) => (
        <li key={id}>
          <a className={style.eachResult} href={webUrl} target="_blank">
            {webTitle}
          </a>
        </li>
      ))}
    </ul>
  );
};

SearchResult.propTypes = {
  articles: PropTypes.array
};

export default SearchResult;
