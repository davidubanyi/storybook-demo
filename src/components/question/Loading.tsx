import React from "react"

const OptionsRow = (
  <div className="loading-item">
    <span className="glow-checkbox" />
    <span className="glow-text">
      <span>Loading</span>
    </span>
  </div>
)

const QuestionRow = (
  <div className="loading-item">
    <span className="glow-text">
      <span>The question is being loaded therefore this has to be long</span>
    </span>
  </div>
)
/**
 * Simple loading component designed with the structure of the question and options
 * @returns JSX
 */
export function Loading (){
  return (
    <div className="list-items">
      {QuestionRow}
      {OptionsRow}
      {OptionsRow}
      {OptionsRow}
      {OptionsRow}
    </div>
  )
}
