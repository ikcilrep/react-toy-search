import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const SortingButtons = ({ list, setList }) => {
  const sort = (f, reverse) => {
    const listCopy = list.slice(0, list.length);
    if (reverse) {
      listCopy.reverse();
    } else {
      listCopy.sort(f);
    }
    setList(listCopy);
  };

  const [isSortedByName, setSortedByName] = useState(false);
  const [isSortedByCount, setSortedByCount] = useState(false);

  const sortByName = () => {
    sort((a, b) => a.name.localeCompare(b.name), isSortedByName);
    setSortedByName(true);
    setSortedByCount(false);
  };

  const sortByCount = () => {
    sort((a, b) => a.count - b.count, isSortedByCount);
    setSortedByName(false);
    setSortedByCount(true);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => sortByName()}>
        Sort by name
      </Button>
      <br />
      <Button variant="contained" color="primary" onClick={() => sortByCount()}>
        Sort by count
      </Button>
    </div>
  );
};

export default SortingButtons;
