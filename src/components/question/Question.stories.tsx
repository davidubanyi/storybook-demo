import React from "react"
import {ComponentStory, ComponentMeta} from "@storybook/react"

import Question from "./Question"

export default {
  title: "Question",
  component: Question
} as ComponentMeta<typeof Question>

const Template: ComponentStory<typeof Question> = (args) => (
  <Question {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const Answered = Template.bind({})
Answered.args = {
  selectedOption: "are"
}
