import React from 'react'
import * as S from './project-card.styles'
import { Button } from '../../components'

const ProjectCard = ({images, title, description, demoLink, sourceCodeLink, ...props}) => {
    return (
        <S.Container {...props} >
            <S.Images>
                <S.Image src={images[0]} alt={title} />
                <S.Image src={images[1]} alt={title} />
            </S.Images>
            <S.Details>
                <S.Title> {title} </S.Title>
                <S.Description> {description} </S.Description>
                <S.Links>
                    <a href={demoLink}  
                    target='_blank' 
                    rel="noopener noreferrer"
                    >
                        <Button>Visit Site</Button>
                    </a>
                    <a href={sourceCodeLink} target='_blank' 
                    rel="noopener noreferrer"
                    >
                        View Source &#10139;
                    </a>
                </S.Links>
            </S.Details>
        </S.Container>
    )
}


export default ProjectCard