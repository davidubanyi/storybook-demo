/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from "react"
import {Loading} from "./Loading"
import Question from "../question/Question"
import {QuestionOptions} from "../questionOptions/QuestionOptions"
import {QuestionOption} from "../../utils/interfaces"
import {defaultOptions} from "../../utils/options"
import "./questionwrapper.modules.css"

type QuestionWrapperProps = {
  error?: string
  loading?: boolean
}

/**
 * The question wrapper component: handles the logic for the answering of the question and for updating the state of the children when the answer is selected by the user
 * @param error
 * @param loading
 * @returns JSX
 */
export const QuestionWrapper: React.FC<QuestionWrapperProps> = ({
  error,
  loading
}) => {
  const [selected, setSelected] = useState<string | undefined>(undefined)
  const [options, setOptions] = useState<QuestionOption[]>(defaultOptions)

  /**
   * Handle the user selecting an option for the question
   * @param id
   */
  const handleSelect = (id: string) => {
    options.map((option) => {
      if (id === option.id) {
        setSelected(option.value)
        return (option.selected = true)
      } else {
        return (option.selected = false)
      }
    })
  }
  if (loading) {
    return (
      <div className="question-wrapper">
        <Loading />
      </div>
    )
  }

  if (error) {
    return (
      <div className="question-wrapper error">
        <div className="error-icon">❌</div>
        <div className="error-message">{error}</div>
      </div>
    )
  }

  return (
    <div className="question-wrapper">
      <div className="question-wrapper--label">Question 1</div>
      <Question selectedOption={selected} />
      <div className="question-wrapper--instruction">
        Select the appropriate option to fill the gap
      </div>
      <QuestionOptions options={options} onClick={handleSelect} />
    </div>
  )
}
