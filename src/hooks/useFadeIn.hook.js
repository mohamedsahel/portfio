import { useSpring } from 'react-spring'


export default function useFadeIn() {
    const style = useSpring({
        transform: 'translateY(0)',
        opacity: 1,
        from: {
            transform: 'translateY(4rem)',
            opacity: 0,
        }
    })

    return style
}
