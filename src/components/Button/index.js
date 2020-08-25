import React from "react";

const Button = ({
  label,
  variant = { type: null, color: "primary", textColor: "white" },
  ...functions
}) => {
  return (
    <button
      style={{ color: variant.textColor }}
      className={`button is-${
        variant.color + (variant.type ? " is-" + variant.type : " ")
      } `}
      {...functions}
    >
      {label}
    </button>
  );
};
export default Button;
