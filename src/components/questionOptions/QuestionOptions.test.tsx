import React from "react";
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { QuestionOptions } from "./QuestionOptions";
import {defaultOptions as options} from '../../utils/options'

test('should render the question options and register user click input', () => {
    const onClick = jest.fn()
    render(<QuestionOptions options={options} onClick={onClick} />)
    expect(screen.getAllByRole('button')).toHaveLength(4)
    userEvent.click(screen.getByText(/are/i))
    expect(onClick).toHaveBeenCalled()
})

