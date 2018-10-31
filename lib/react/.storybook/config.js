import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

setOptions({
  name: "Shifty UI",
  url: "#",
  addonPanelInRight: true
  // showAddonPanel: false
});

function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
