import React from 'react';
import { QuestionOption } from '../questionOptions/QuestionOptions';
import './button.modules.css'

interface ButtonProps extends QuestionOption {

  backgroundColor?: string;

  /**
   * Click handler when the button is selected
   */
  onButtonClick: (id:string) => void;


}

/**
 * Option Button UI component for user interaction
 */
export const SelectOptionButton:React.FC<ButtonProps> = ({
  id,  
  selected = false,
  backgroundColor,
  label,
  correct,
  answered =false,
  onButtonClick,
  ...props
}) => {
  const isSelected = selected ? 'btn--selected' : ''
  const isCorrect = (answered && correct) ? 'btn--selected-correct' : answered ? 'btn--selected-wrong' : ''


  return (
    <button
      type="button"
      className={[`btn`, `${isSelected}`, `${isCorrect}`].join(' ')}
      onClick={() => onButtonClick(id)}
      {...props}
      style={{backgroundColor}}
    >
      {label}
    </button>
  );
};


