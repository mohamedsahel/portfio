import React from 'react'
import * as S from './contactpage.styles'
import { useFadeIn } from '../../hooks'
import { PortfolioContext } from '../../providers'
import { ContactForm, Page } from '../../components'

const ContactPage = () => {
    const { socialLinks } = React.useContext(PortfolioContext)
    const style = useFadeIn()
    return (
        <Page>
            <S.Content style={style} >
                <S.ContactHeader>
                    <p>Contact me on <a href={socialLinks.twitter} target='_blank' rel='noopener noreferrer'>Twitter</a></p>
                    <span>or</span>
                    <h3>Send Message</h3>
                </S.ContactHeader>
                
                <ContactForm />
            </S.Content>
        </Page>
    )
}

export default ContactPage