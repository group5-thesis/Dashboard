import React, { useState, useEffect } from "react";
import { TextInput, Field } from "components/Form";
import { mdiMagnify } from "@mdi/js";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState({ key: "", field: [] });
  const onInputChange = (value) => {
    setSearch({ key: value.toLocaleLowerCase(), field: search.field });
  };
  useEffect(() => {
    onSearch(search);
  }, [search ,onSearch]);
  return (
    <Field>
      <TextInput
        value={search.key}
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
