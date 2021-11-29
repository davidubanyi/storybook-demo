import React from "react"
import Dash from "../questionDash/QuestionDash"
import "./questionText.modules.css"

type QuestionProps = {
  selectedOption?: string
}

/**
 * Displays the question to the user
 * @param selectedOption value property that the user selects
 * @returns JSX
 */
const QuestionText: React.FC<QuestionProps> = ({selectedOption}) => {
  return (
    <div className="question--container">
      What {selectedOption ? <Dash option={selectedOption} /> : <Dash />} you
      doing?
    </div>
  )
}

export default QuestionText
