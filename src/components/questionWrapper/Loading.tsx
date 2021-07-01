import React from "react"

const LoadingRow = (
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
export const Loading = () => {
  return (
    <div className="list-items">
      {QuestionRow}
      {LoadingRow}
      {LoadingRow}
      {LoadingRow}
      {LoadingRow}
    </div>
  )
}
