import React from 'react'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Hover(props) {
  const [aProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
      <animated.div
      className="icon-card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: aProps.xys.interpolate(trans) }}
      >
        <a href={props.href} target={props.target}> <img className="pad-out" src={props.src} alt={props.alt} /> </a>
      </animated.div>
  )
}
//        <a href="https://github.com/tof-tof"> <img className="pad-out" src="../github.png" alt="github" /> </a>
