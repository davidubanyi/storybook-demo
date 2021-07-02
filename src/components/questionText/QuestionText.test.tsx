import React from 'react'
import {  render, screen } from '@testing-library/react'
import QuestionText from './QuestionText'


test('should render and update the question component', () => {
    render(<QuestionText />)
    expect(screen.getByText(/you doing/i)).toBeInTheDocument()

    render(<QuestionText selectedOption='are' />)
    expect(screen.getByText(/are/i)).toBeInTheDocument()
})
