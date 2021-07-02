import React from "react"
import "./questionDash.modules.css"

type DashProps = {
  option?: string
}
/**
 * Component to display dash in the question and the selected option after the user has chosen one
 * @param option
 * @returns JSX
 */
const Dash: React.FC<DashProps> = ({option}) => {
  return <span data-testid="dash-component" className="question--dash">{option ? option : ""}</span>
}

export default Dash
