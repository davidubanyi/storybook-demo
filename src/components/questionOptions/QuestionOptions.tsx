import React from 'react'
import {SelectOptionButton} from '../selectOptionButton/SelectOptionButton'

type QuestionOptionsProps = {
    options: QuestionOption[],
    onClick: (id:string) => void,
}

export interface QuestionOption {
    id: string,
    value: string,
    label: string,
    selected: boolean,
    correct?:boolean,
    answered?:boolean
}
/**
 * Display list of questions for the user
 */
export const QuestionOptions:React.FC<QuestionOptionsProps> = ({options, onClick}) => {
    return (
        <div style={{display:'inline-flex', flexDirection:'column'}}>
            {options.map(option => {
                return <SelectOptionButton key={option.id} {...option} onButtonClick={onClick} /> }
            )}
        </div>
    )
}
