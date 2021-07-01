import React from "react"
import {ComponentStory, ComponentMeta} from "@storybook/react"
import Question from "./Question"

/**
 * Question component story
 */
export default {
  title: "Question",
  component: Question
} as ComponentMeta<typeof Question>

const Template: ComponentStory<typeof Question> = (args) => (
  <Question {...args} />
)

/**
 * Question state when the user hasn't selected an option
 */
export const Default = Template.bind({})
Default.args = {}

/**
 * Question state when the user has selected an option
 */
export const Selected = Template.bind({})
Selected.args = {
  selectedOption: "are"
}
