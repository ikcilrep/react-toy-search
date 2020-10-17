import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchedList from "./Components/SearchedList";

const data = require("../data.json");
const parsedData = data.data.map((e) => {
  return {
    name: e.attributes.col1,
    count: e.attributes.col2,
  };
});

const App = () => {
  return (
    <div>
      <SearchedList data={parsedData} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
