import React, { useState } from "react";
import SortingButtons from "./SortingButtons";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const SearchedList = ({ data }) => {
  const search = (list, query) =>
    list.filter(
      (e) =>
        e.name.toLowerCase().includes(query.toLowerCase()) ||
        e.count.toString().includes(query.toLowerCase())
    );

  const [query, setQuery] = useState("");
  const [list, setList] = useState(data);
  return (
    <div>
      <TextField
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      ></TextField>
      <SortingButtons list={list} setList={setList} />
      <List>
        {search(list, query).map((e, index) => (
          <ListItem key={index}>
            <ListItemText>
              {index+1}. {e.name}: {e.count}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SearchedList;
