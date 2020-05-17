import React from 'react'
import * as S from './projectspage.styles'
import { ProjectCard } from '../../components'
import { PortfolioContext } from '../../providers'

const ProjectsPage = ({...props}) => {
    const { projects } = React.useContext(PortfolioContext)
    return (
        <S.Container {...props} >
            <S.Content>
                {
                    projects.map(project => (
                        <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        images={project.images}
                        demoLink={project.demoLink}
                        sourceCodeLink={project.sourceCodeLink}
                        />
                    ))
                }
            </S.Content>
        </S.Container>
    )
}

export default ProjectsPage