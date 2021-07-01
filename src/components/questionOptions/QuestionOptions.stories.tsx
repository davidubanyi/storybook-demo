import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { QuestionOptions } from "./QuestionOptions";
import { defaultOptions } from "../questionWrapper/QuestionWrapper";

export default {
  title: "QuestionOptions",
  component: QuestionOptions,
} as ComponentMeta<typeof QuestionOptions>;

const Template: ComponentStory<typeof QuestionOptions> = (args) => (
  <QuestionOptions {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: defaultOptions
};

export const Selected = Template.bind({})

Selected.args = {
    options: [...defaultOptions.slice(0,3), {
        id:"3490kf",
        selected: true,
        label: 'D. do',
        value: 'do'
    }]
}


export const AnsweredCorrectly = Template.bind({})

AnsweredCorrectly.args = {
    options: [{
        id:"3490kf",
        selected: true,
        label: 'A. are',
        value: 'are',
        answered: true,
        correct: true
    }, ...defaultOptions.slice(1,4)]
}

export const AnsweredWrongly = Template.bind({})

AnsweredWrongly.args = {
    options: [{
        id:"3490kf",
        selected: false,
        label: 'A. are',
        value: 'are',
        answered: true,
        correct: true
    }, ...defaultOptions.slice(1,3), {
        id:"34sdkf",
        selected: true,
        label: 'A. do',
        value: 'do',
        answered: true,
        correct: false
    }]
}