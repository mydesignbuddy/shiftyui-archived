import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import { TextInput } from "../lib";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module).add("with text", () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
));

storiesOf("TextInput", module)
  .add("with text", () => (
    <TextInput label="Label1" onChange={action("changed")} />
  ))
  .add("with text & value", () => (
    <TextInput label="Label1" value="value" onChange={action("changed")} />
  ));
