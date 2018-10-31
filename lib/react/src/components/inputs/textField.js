import React from "react";
import Label from "../typography/label";

type Props = {
  type: "text" | "password" | "number",
  label?: string,
  name: string,
  value?: string,
  placeholder?: string,
  disabled?: boolean,
  labelOrientation?: "default" | "top" | "inline",
  fillWidth?: boolean,
  onChange?: Function
};

const cn = (prepend, value) =>
  value && value !== "default" ? ` ${prepend}-${value}` : "";

const TextField = (props: Props) => {
  return (
    <div
      className={`shft-textfield ${cn("label", props.labelOrientation)} ${props.fillWidth ? 'fill-width' : ''}`}
    >
      {(props.label !== "" || props.children) && (
        <Label for={props.name}>
          {props.label !== "" ? props.label : props.children}
        </Label>
      )}
      <div className="shft-input">
        <input
          name={props.name}
          type={props.type}
          value={props.value}
          disabled={props.disabled}
          placeholder={props.placeholder}
          onChange={e => props.onChange && props.onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
  label: "",
  disabled: false,
  placeholder: "",
  labelOrientation: "default",
  fillWidth: false,
  onChange: () => {}
};

export default TextField;
