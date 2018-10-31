import React from "react";

type Props = {
  variant?: "" | "primary" | "secondary" | "tertiary",
  onChange?: Function
};

const Button = (props: Props) => {
  return (
    <button
      className={`shifty ${props.variant}`}
      onChange={e => props.onChange && props.onChange(e.target.value)}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  variant: "",
  onChange: () => {}
};

export default Button;
