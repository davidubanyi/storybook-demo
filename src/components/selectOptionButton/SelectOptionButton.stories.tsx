import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SelectOptionButton } from "./SelectOptionButton";

export default {
  title: "SelectOptionButton",
  component: SelectOptionButton,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: () =>{}
  },
} as ComponentMeta<typeof SelectOptionButton>;

const Template: ComponentStory<typeof SelectOptionButton> = (args) => (
  <SelectOptionButton {...args} />
);

/**
 * Button state when not selected
 */
export const Default = Template.bind({});
Default.args = {
  selected: false,
  label: "A. Yes",
  value: "Yes",
  onButtonClick: () => {},
  id: "0",
};

/**
 * Button state when not selected
 */
export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  selected: true,
};


/**
 * Button state when the selected option was the correct option
 */
 export const Correct = Template.bind({});
 Correct.args = {
   ...Selected.args,
   answered: true,
   correct: true,
 };

 /**
 * Button state when the selected option was the wrong option
 */
  export const Wrong = Template.bind({});
  Wrong.args = {
    ...Correct.args,
    correct: false,
  };