import { ArgTypes } from "@storybook/blocks";
import Dropdown from "./Dropdown";

const meta = {
  component: Dropdown,
  argTypes: {
    labelVisibility: {
      options: ["Visible", "Hidden"],
      control: { type: "select" },
    },
    labelIconVisibility: {
      options: ["Visible", "Hidden"],
      control: { type: "select" },
    },
    leftIconVisiblity: {
      options: ["Visible", "Hidden"],
      control: { type: "select" },
    },
  },
};

export default meta;

export const Default = {
  args: {
    label: "Label",
    labelVisibility: "Visible",
    labelIconVisibility: "Hidden",
    required: true,
    leftIconVisiblity: "Visible",
  },
};
