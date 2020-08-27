import React, { useState } from "react";
import { TextInput, Field } from "components/Form";
import { mdiMagnify } from "@mdi/js";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  };
  return (
    <Field>
      <TextInput
        value={search}
        placeholder="Search"
        isIcon={{ show: true, name: mdiMagnify, float: "left" }}
        {...{
          onChange: (e) => {
            onInputChange(e.target.value);
          },
        }}
      ></TextInput>
    </Field>
  );
};

export default Search;
