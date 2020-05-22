import { useState, useEffect } from 'react'

const DEFAULT_OPTIONS = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
}

export default function useInersection(ref, options=DEFAULT_OPTIONS) {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        if(ref === null) return
        const target = ref.current
        const func = enteries => {
            enteries.forEach(entery => {
                if(entery.isIntersecting) {
                    setIntersecting(true)
                }
            })
                
        }

        let observer = new IntersectionObserver(func, {...options})
        if(target) observer.observe(target)

        return () => observer.unobserve(target)
    }, [ref, options])

    return isIntersecting
}