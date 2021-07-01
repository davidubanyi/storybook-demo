/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Loading } from "../Loading";
import Question from "../question/Question";
import { QuestionOption, QuestionOptions } from "../questionOptions/QuestionOptions";
import './questionwrapper.modules.css'

export const defaultOptions = [
  {
    id: "3904nfo",
    selected: false,
    label: "A. are",
    value: "are"
  },
  {
    id: "2345ffo",
    selected: false,
    label: "B. is",
    value: "is"
  },
  {
    id: "2983fhh",
    selected: false,
    label: "C. did",
    value: "did"
  },
  {
    id: "7388hff",
    selected: false,
    label: "D. do",
    value: "do"
  },
];

type QuestionWrapperProps = {
  error?: string,
  loading?: boolean
}

export const QuestionWrapper: React.FC<QuestionWrapperProps> = ({error, loading}) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [options, setOptions] = useState<QuestionOption[]>(defaultOptions);

  const handleSelect = (id: string) => {
    options.map((option) => {
      if (id === option.id) {
        setSelected(option.value);
       return option.selected = true;
      } else {
       return option.selected = false;
      }
    });
  };
  if(loading){
    return <div className="question-wrapper"><Loading /></div>
  }

  if(error){
    return <div className="question-wrapper">{error}</div>
  }

  return (
    <div className="question-wrapper">
      <div className="question-wrapper--label">Question 1</div>  
      <Question selectedOption={selected} />
      <div className="question-wrapper--instruction">Select the appropriate option to fill the gap</div>
      <QuestionOptions options={options} onClick={handleSelect} />
    </div>
  );
};
