import React from "react"
import {ComponentStory, ComponentMeta} from "@storybook/react"

import Dash from "./QuestionDash"

export default {
  title: "QuestionDash",
  component: Dash
} as ComponentMeta<typeof Dash>

const Template: ComponentStory<typeof Dash> = (args) => <Dash {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Answered = Template.bind({})
Answered.args = {
  option: "are"
}
