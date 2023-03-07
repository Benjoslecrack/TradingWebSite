import React, { useState, useEffect } from "react";

// Style
import './searchbar.css';

export default function SearchBar({
  list,
  setList,
  filterField = (item) => item,
  ...props
}) {
  const [value, setValue] = useState("");

  const filterList = () => {
    return list.filter((item) =>
      filterField(item).toLowerCase().includes(value.toLocaleLowerCase())
    );
  };

  useEffect(() => {
    if (value) {
      setList(filterList());
    } else {
      setList(list);
    }
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
    setList(filterList());
  };

  return (
    <input
      type="text"
      placeholder="Rechercher un mot"
      name="search"
      id="search-bar"
      onChange={handleChange}
      value={value}
      {...props}
    ></input>
  );
}
