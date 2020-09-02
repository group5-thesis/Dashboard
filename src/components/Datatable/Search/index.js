import React, { useState, useEffect } from "react";
import { TextInput, Field } from "components/Form";
import { mdiMagnify } from "@mdi/js";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState({ key: "", field: [] });

  const onInputChange = (value) => {
    setSearch({ key: value.toLocaleLowerCase(), field: search.field });

  };
  const onCheckboxChange = (e) => {
    let _temp = search.field;
    if (e.target.checked == true) {
      _temp.push(e.target.name.toLocaleLowerCase())
    }
    else {
      _temp = _temp.filter(element => {
        if (element.toLocaleLowerCase() !== e.target.name.toLocaleLowerCase()) {
          return element
        }
      })
    }
    setSearch({ key: search.key.toLocaleLowerCase(), field: _temp });
  };

  useEffect(() => {
    onSearch(search);
  }, [search]);
  return (
    <>
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
      <label className="checkbox" htmlFor="Name">
        <input type="checkbox" name="Name" onChange={(event) => {
          onCheckboxChange(event)
        }} />
        Name
</label>
      <br></br>
      <label className="checkbox" htmlFor="email">
        <input type="checkbox" name="email" onChange={(event) => {
          onCheckboxChange(event)
        }} />
        Email
</label>
      <br></br>
      <label className="checkbox">
        <input type="checkbox" name="body" onChange={(event) => {
          onCheckboxChange(event)
        }} />
        Comment
</label>
    </>

  );

};


export default Search;