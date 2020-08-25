import React from "react";
import Icon from "@mdi/react";
import Field from "./Field";

const TextInput = ({
  isIcon = { show: false, float: "left", name: "" },
  type = "text",
  label,
  placeholder,
  value,
  ...functions
}) => {
  return (
    <>
      <Field>
        <label className="label has-text-weight-semibold">{label}:</label>
        <div
          className={`control ${
            isIcon.show ? "has-icons-" + isIcon.float : ""
          }`}
        >
          <input
            className="input"
            value={value}
            type={type}
            placeholder={placeholder}
            {...functions}
            name={label}
          />
          <span
            className="icon is-small is-left"
            style={{ display: isIcon.show ? "" : "none" }}
          >
            <Icon path={isIcon.name} size={1} />
          </span>
        </div>
      </Field>
    </>
  );
};

export default TextInput;
