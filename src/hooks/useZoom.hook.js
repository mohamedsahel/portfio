import { useSpring } from 'react-spring'

export default function() {
    const style = useSpring({
        transform: 'scale(1)',
        opacity: '1',
        from: {
            transform: 'scale(0.5)',
            opacity: '0',
        }
    })

    return style
}