import React from "react"
import {ComponentStory, ComponentMeta} from "@storybook/react"
import QuestionText from "./QuestionText"

/**
 * Question component story
 */
export default {
  title: "QuestionText",
  component: QuestionText
} as ComponentMeta<typeof QuestionText>

const Template: ComponentStory<typeof QuestionText> = (args) => (
  <QuestionText {...args} />
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
