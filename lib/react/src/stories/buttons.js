import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../components";

export default () => {
  storiesOf("Buttons/Button", module).add("Button", () => (
    <Button>Default Button</Button>
  ));
};
