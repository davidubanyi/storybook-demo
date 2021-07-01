import React from 'react'
import './questionDash.modules.css'


type DashProps = {
    option?:string
}

const Dash:React.FC<DashProps> = ({option}) => {
    return <span className="question--dash">{option ? option : ''}</span>
}


export default Dash