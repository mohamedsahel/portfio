import React from 'react'
import * as S from './aboutpage.styles'
import { useSpring } from 'react-spring'
import { PortfolioContext } from '../../providers'
import { Avatar, Page } from '../../components'


const AboutContent = ({children, image}) => {
    const style = useSpring({
        transform: 'translateY(0)',
        opacity: 1,
        from: {
            transform: 'translateY(4rem)',
            opacity: 0,
        }
    })

    return (
        <S.Content style={style}>
            <header>
                <span>Const</span>
                 <Avatar width='11rem' height='11rem' /> 
                <span>=</span>
                <span>{'{'}</span>
            </header>
            <S.Properties>
                {children}
            </S.Properties>
            <footer>
                <span>{'}'}</span>
            </footer>
        </S.Content>
    )
}

const Variable = ({ name, value }) => {
    const quote = Number(value) || value === '[' ? '' : '"'
    return (
        <S.Variable  >
            <div> {name} 
                <span> : {value === '[' && '['} </span>
            </div>
            {
                value !== '[' && <div>{quote} {value} {quote},</div>
            }
            
        </S.Variable>
    )
}

const AboutPage = ({...props }) => {
    const portfolio = React.useContext(PortfolioContext)
    return (
        <Page {...props} >
            <AboutContent image={portfolio.image} >
                <Variable 
                    name='Name'
                    value={portfolio.name}
                />
                <Variable 
                    name='Age'
                    value={portfolio.age}
                />
                <Variable 
                    name='Job'
                    value={portfolio.job}
                />
                <Variable 
                    name='Hobbit'
                    value={portfolio.hobbit}
                />
                <Variable 
                    name='Big Interest'
                    value={portfolio.bigInterest}
                />
                <Variable 
                    name='Thoughts'
                    value='['
                />
                {portfolio.thoughts.map((thought, index) => <S.ArrayItem key={index} >
                    " {thought} " ,
                </S.ArrayItem>)}
                <span> {']'} </span>
            </AboutContent>
        </Page>
    )
}

export default AboutPage