import React from "react"
import {ComponentStory, ComponentMeta} from "@storybook/react"

import {QuestionOptions} from "./QuestionOptions"
import {defaultOptions} from "../../utils/options"

/**
 * Question Options component story
 */
export default {
  title: "QuestionOptions",
  component: QuestionOptions
} as ComponentMeta<typeof QuestionOptions>

const Template: ComponentStory<typeof QuestionOptions> = (args) => (
  <QuestionOptions {...args} />
)

/**
 * Options state when no option has been selected
 */
export const Default = Template.bind({})
Default.args = {
  options: defaultOptions
}

/**
 * Options state when an option has been selected by the user
 */
export const Selected = Template.bind({})

Selected.args = {
  options: [
    ...defaultOptions.slice(0, 3),
    {
      id: "3490kf",
      selected: true,
      label: "D. do",
      value: "do"
    }
  ]
}

/**
 * Options state when the selected option is the correct option, simulating the UI in a results display
 */

export const AnsweredCorrectly = Template.bind({})

AnsweredCorrectly.args = {
  options: [
    {
      id: "3490kf",
      selected: true,
      label: "A. are",
      value: "are",
      answered: true,
      correct: true
    },
    ...defaultOptions.slice(1, 4)
  ]
}

/**
 * Options state when the selected option was the wrong option, simulating the UI in a results display
 */

export const AnsweredWrongly = Template.bind({})

AnsweredWrongly.args = {
  options: [
    {
      id: "3490kf",
      selected: false,
      label: "A. are",
      value: "are",
      answered: true,
      correct: true
    },
    ...defaultOptions.slice(1, 3),
    {
      id: "34sdkf",
      selected: true,
      label: "A. do",
      value: "do",
      answered: true,
      correct: false
    }
  ]
}
