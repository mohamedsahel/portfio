import { useSpring } from 'react-spring'


export default function useFadeIn(from='bottom', value='4rem',params) {
    const transform = value => ({
        bottom: `translateY(${value})`,
        top: `translateY(-${value})`,
        right: `translateX(${value})`,
        left: `translateX(-${value})`
    })

    const style = useSpring({
        transform: transform('0rem')[from],
        opacity: 1,
        from: {
            transform: transform(value)[from],
            opacity: 0,
        },
        ...params
    })

    return style
}
