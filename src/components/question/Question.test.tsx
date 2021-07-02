import React from "react";
import { getAllByRole, render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Question from './Question'

test('should render the question component', () => {
    render(<Question />)
    expect(screen.getByText(/question 1/i)).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(4)
    userEvent.click(screen.getAllByRole('button')[0])
    const questionText = screen.getByText(/what/i).firstElementChild?.innerHTML
    expect(questionText).toContain('are')
})
