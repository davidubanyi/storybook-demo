import React from "react"
import {ComponentStory, ComponentMeta} from "@storybook/react"
import Dash from "./QuestionDash"

/**
 * Dash component story
 */
export default {
  title: "QuestionDash",
  component: Dash
} as ComponentMeta<typeof Dash>

const Template: ComponentStory<typeof Dash> = (args) => <Dash {...args} />

/**
 * Dash state when the user has not selected an option
 */
export const Default = Template.bind({})
Default.args = {}

/**
 * Dash state when the user has selected an option
 */
export const Selected = Template.bind({})
Selected.args = {
  option: "are"
}
