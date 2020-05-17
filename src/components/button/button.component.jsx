import React from 'react'
import * as S from './button.styles'
import {useSpring} from 'react-spring'

const Ripple = ({left, top}) => {
    const from = {
        width: '0px',
        height: '0px',
        opacity: 0.2
    }

    const to = {
        width: '500px',
        height: '500px',
        opacity: 0
    }

    const time = 1000
    const [unmounted, setUnmounted] = React.useState(false)

    const styles = useSpring({
        ...to, 
        from:from,
        config: {duration: time}
    })

    React.useEffect(() => {
        setTimeout(() => setUnmounted(true), time + 500)
    }, [])

    return !unmounted && <S.Ripple 
        style={{
        ...styles,
        left,
        top,
    }} />
}




const Button = ({children, onClick, ...props}) => {
    const [ripples, setRipples] = React.useState([])

    const handleClick = e => {
        e.persist()
        const x = e.clientX - e.target.offsetLeft
        const y = e.clientY - e.target.offsetTop

        setRipples([
            ...ripples,
            {
                id: ripples.length,
                left: x + 'px',
                top: y + 'px',
            }
        ])

        if(onClick) onClick()
        
    }
    
    return (
        <S.Button
            {...props}
            onClick={handleClick}
        > 
        {children}
        {
            ripples.map((ripple) => <Ripple 
                key={ripple.id}
                {...ripple}
            />)
        }
        </S.Button>
    )
}

export default Button