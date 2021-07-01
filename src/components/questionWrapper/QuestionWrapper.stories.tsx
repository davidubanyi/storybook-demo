import React from "react"
import {ComponentStory, ComponentMeta} from "@storybook/react"
import {QuestionWrapper} from "./QuestionWrapper"

export default {
  title: "QuestionWrapper",
  component: QuestionWrapper
} as ComponentMeta<typeof QuestionWrapper>

const Template: ComponentStory<typeof QuestionWrapper> = (args) => (
  <QuestionWrapper {...args} />
)

export const Loading = Template.bind({})
Loading.args = {
  loading: true
}

export const Default = Template.bind({})

export const Error = Template.bind({})
Error.args = {
  error: "Something went wrong"
}
