import React from "react"
import {ComponentStory, ComponentMeta} from "@storybook/react"
import {QuestionWrapper} from "./QuestionWrapper"

/**
 * Story for the question wrapper component it houses the question and the options state
 */

export default {
  title: "QuestionWrapper",
  component: QuestionWrapper
} as ComponentMeta<typeof QuestionWrapper>

const Template: ComponentStory<typeof QuestionWrapper> = (args) => (
  <QuestionWrapper {...args} />
)

/**
 * Loading state for the questions component, simulates when the question is being loaded from an api
 */
export const Loading = Template.bind({})
Loading.args = {
  loading: true
}
/**
 * Default state for the questions component, simulates when the question is has been loaded from an api, and is displated to the user
 */
export const Default = Template.bind({})

/**
 * Error state for the questions component, simulates when the question is has been loaded from an api, and is displated to the user
 */
export const Error = Template.bind({})
Error.args = {
  error: "Something went wrong"
}
