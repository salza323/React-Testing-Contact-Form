import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

describe('Tests ContactForm', () => {
    test('user can fill out and submit form', async() => {
        //arrange
        render(<ContactForm/>)

        //act (create selectors)
        const firstNameInput = screen.getByLabelText(/first Name/i)
        const lastNameInput = screen.getByLabelText(/last Name/i)
        const emailInput = screen.getByLabelText(/email*/i)
        const messageInput = screen.getByLabelText(/message/i);

        const submitButton = screen.getByRole('button', {type: /submit/i});

        //change fields and click submit button
        fireEvent.change(firstNameInput,{target:{ value:'Sal'}})
        fireEvent.change(lastNameInput,{target:{ value:'Zamora'}});
        fireEvent.change(emailInput,{target:{ value:'sal.zamora480@gmail.com'}})
        fireEvent.change(messageInput,{target:{ value:'test messsage'}})

        fireEvent.click(submitButton)

        //assert (make sure that "sal" is on the window)
        const newUser = await screen.findByText(/sal/i)
    })

})
