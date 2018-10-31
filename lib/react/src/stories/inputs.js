import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { StateDecorator, Store } from "@sambego/storybook-state";
import { TextField } from "../components";

const store = new Store({
  textValue: "",
  numberValue: null
});

export default () => {
  storiesOf("Inputs", module)
    .addDecorator((story, context) =>
      withInfo({
        header: false,
        inline: true,
        source: true
      })(story)(context)
    )
    .addDecorator(withKnobs)
    .addDecorator(StateDecorator(store))
    .add("TextField", () => (
      <TextField
        name="sampleTextField1"
        type={select("Type", ["text", "password"])}
        label={text("Label", "Field Label 1")}
        labelOrientation={select("Label Orientation", [
          "default",
          "top",
          "inline"
        ])}
        value={text("Value", store.textValue)}
        placeholder={text("placeholder", "")}
        disabled={boolean("Disabled", false)}
        fillWidth={boolean("Fill Width", false)}
        onChange={textValue => store.set({ textValue })}
      >
        {text("Label Child")}
      </TextField>
    ));
};
