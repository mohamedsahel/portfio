import React from 'react'
import * as S from './contact-form.styles'
import { Field, Button, DotsLoader } from '..'

const ContactForm = () => {
    const [sending, setSending] = React.useState(false)
    const formRef = React.useRef()

    const handleSubmit = e => {
        e.preventDefault()
        const data = new FormData(e.target)

        setSending(true)
        fetch('https://formcarry.com/s/gV-D2AYuERDI', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(() => {
            setSending(false)
            formRef.current.querySelectorAll('input, textarea').forEach(field => field.value = '')
        })
        .catch(error => console.log('error', error.message))

    }

    return (
        <S.Form onSubmit={handleSubmit} ref={formRef} >
            <Field type='text' name='name' label='Name' required/>
            <Field type='email' name='email' label='Email' required/>
            <Field type='textArea' name='message' label='Message' required/>
            <Button type='submit' disabeled={sending} > 
            {
                sending ? <DotsLoader /> : 'Send'
            }
             </Button>
        </S.Form>
    )
}

export default ContactForm