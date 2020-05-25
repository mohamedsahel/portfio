import React from 'react'

export default function useWindowSize() {
    const [size, setSize] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        })

        return () => {
            window.removeEventListener()
        }
    }, [])
    
    return size
}