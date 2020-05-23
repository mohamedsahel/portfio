import React from 'react'
import * as S from './project-card.styles'
import { useSpring } from 'react-spring'
import { useIntersection } from '../../hooks'
import { Button } from '../../components'

const ProjectCard = ({images, title, description, demoLink, sourceCodeLink, ...props}) => {
    const ref = React.useRef()
    const isVisible = useIntersection(ref)
    const style = useSpring({
        to: isVisible ? {opacity: 1, transform: 'scale(1)'} : {opacity: 0, transform: 'scale(0.8)'},
        config: {mass: 1, tension: 180, friction: 13}
    })

    return (
        <S.Container {...props} ref={ref} style={style} >
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