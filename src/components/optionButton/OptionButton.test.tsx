import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SelectOptionButton } from "./OptionButton";
import {defaultOptions as options} from '../../utils/options'

test('should render and update the button when clicked', () => {
    const optionDetails = options[0]
    const onClick = jest.fn()
    render(<SelectOptionButton {...optionDetails} onButtonClick={onClick} />)
    expect(screen.getByText(/are/i)).toBeInTheDocument()
    userEvent.click(screen.getByText(/are/i))
    expect(onClick).toHaveBeenCalled()
})
