import React from "react";

import { storiesOf, addDecorator } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import inputs from "./inputs";
import buttons from "./buttons";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

buttons();
inputs();
