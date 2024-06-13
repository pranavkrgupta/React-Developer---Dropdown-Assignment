import Dropdown from "./Dropdown";

const meta = {
  component: Dropdown,
  argTypes: {
    label: { control: "text" },
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
    text: { control: "text" },
    required: { control: "boolean" },
    onSelect: { action: "selected" },
    helperText: { control: "text" },
    items: { control: "array" },
    activeItemIndex: { control: "number" },
    type: {
      control: "select",
      options: ["SingleNoIcon", "SingleRadio", "Multi"],
    },

    status: {
      control: "select",
      options: ["Unfilled", "Filled", "Disabled", "Error"],
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
    helperText: "Helper text",
    text: "Select an option",
    activeItemIndex: -1,
    onSelect: () => {},
    items: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4",
      "Option 5",
      "Option 6",
    ],
    type: "SingleNoIcon",
  },
};
