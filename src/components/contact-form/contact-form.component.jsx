import React from 'react'
import * as S from './contact-form.styles'
import { Field, Button } from '..'

const ContactForm = () => {
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <S.Form onSubmit={handleSubmit} >
            <Field type='text' label='Name' required/>
            <Field type='email' label='Email' required/>
            <Field type='textArea' label='Message' required/>
            <Button type='submit' >Send</Button>
        </S.Form>
    )
}

export default ContactForm