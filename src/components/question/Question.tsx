import React from "react"
import Dash from "../questionDash/QuestionDash"
import "./question.modules.css"

type QuestionProps = {
  selectedOption?: string
}

const Question: React.FC<QuestionProps> = ({selectedOption}) => {
  return (
    <div className="question--container">
      What {selectedOption ? <Dash option={selectedOption} /> : <Dash />} you
      doing?
    </div>
  )
}

export default Question
