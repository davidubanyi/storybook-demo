import React from 'react'
import {render,screen} from '@testing-library/react'
import QuestionDash from './QuestionDash'

test('should render and update the dash component', () => {
    render(<QuestionDash />)
    expect(screen.getByTestId('dash-component')).toHaveTextContent('')

    render(<QuestionDash option="are"/> )
    expect(screen.getByText(/are/i)).toBeInTheDocument()
})
