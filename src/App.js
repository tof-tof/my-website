import './App.css';
import { useSpring, animated } from 'react-spring';
import Hover from './Hover';
import AnimatedPic from './AnimatedPic';


function App() {
  const headerProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {duration: 3000}
  })
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  
  return (
    <div>
      <div>
        <img className="round-img" src="../tof.jpg" alt=" Tofunmi Adigun-Hameed" />
        
      </div>
      <animated.h1 style={headerProps}>hello!</animated.h1>
      <h3>I'm Tofunmi Adigun-Hameed (aka Tof), an I'm an aspiring <i>Software Engineer</i> &#128522;</h3>
      <p>
        I'm currently studying Mathematics and Computer Science at the University of Oxford and I love learning about and working with new technologies.
        My other passions include outreach and Zumba.
    </p>
      <animated.div className="space-out no-space-sideways space-out"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <a href="https://github.com/tof-tof"> <img className="pad-out" src="../github.png" alt="github" /> </a>
        <a href= "https://www.linkedin.com/in/tofunmi-adigun-hameed/"><img className="pad-out" src="../linkedin.png" alt="linkedIn" /></a>
        <a href="" ><img className="pad-out" src="../profile.png" alt="cv" /></a>
      </animated.div>
      <Hover />
    </div>
  );
}

export default App;
