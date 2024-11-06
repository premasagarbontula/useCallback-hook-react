import React from "react";
import { memo } from "react";

const Search = ({ searchFilter }) => {
  console.log("Search Rendered");
  const onSearch = (e) => {
    searchFilter(e.target.value);
  };
  return (
    <div>
      <input type="search" placeholder="Search User" onChange={onSearch} />
    </div>
  );
};

export default memo(Search);
