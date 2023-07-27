import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "o8145f06881d09401ad03t8b0f09e589";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form id="word-seach-form" onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word..."
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
