import React from 'react'
import PortfolioContext from './portfolio.context'
import portfolioData from '../../data/portfolio.data'

const PortfolioProvider = ({children}) => {
    return (
        <PortfolioContext.Provider value={portfolioData} >
            {children}
        </PortfolioContext.Provider>
    )
}

export default PortfolioProvider