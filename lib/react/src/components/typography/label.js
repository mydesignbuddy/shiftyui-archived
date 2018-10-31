import React from "react";

type Props = {
  text?: string,
  for?: string
};

const Label = (props: Props) => {
  return (
    <label className="shifty" for={props.for}>
      {props.text !== "" ? props.text : props.children}
    </label>
  );
};

Label.defaultProps = {
  text: "",
  for: ""
};

export default Label;
