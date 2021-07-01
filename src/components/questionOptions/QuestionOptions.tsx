import React from "react"
import {QuestionOption} from "../../utils/interfaces"
import {SelectOptionButton} from "../selectOptionButton/SelectOptionButton"
import "./questionOptions.modules.css"

type QuestionOptionsProps = {
  options: QuestionOption[]
  onClick: (id: string) => void
}
/**
 * Displays the list of options for the user to choose from
 * @param options an array of options to the question
 * @param onClick a function to handle the selection of an option
 * @returns
 */
export const QuestionOptions: React.FC<QuestionOptionsProps> = ({
  options,
  onClick
}) => {
  return (
    <div className="question-options--container">
      {options.map((option) => {
        return (
          <SelectOptionButton
            key={option.id}
            {...option}
            onButtonClick={onClick}
          />
        )
      })}
    </div>
  )
}
