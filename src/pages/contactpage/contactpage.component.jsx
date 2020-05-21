import React from 'react'
import * as S from './contactpage.styles'
import { ContactForm, Page } from '../../components'

const ContactPage = () => {
    return (
        <Page>
            <S.Content>
            <ContactForm />
            </S.Content>
        </Page>
    )
}

export default ContactPage