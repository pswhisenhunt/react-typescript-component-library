import React from "react";
import "./Button.scss";

// interface ButtonProps {
//   label: string;
// }

const Button = (props: any) => {
  return <button>{props.label}</button>;
};

export default Button;