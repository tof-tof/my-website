import { useSpring, animated } from 'react-spring';
// eslint-disable-next-line
import Goo from './Blob'; 
// eslint-disable-next-line
import HoverSocialMedia from './HoverSocialMedia';
import ExplodingLayers from './ExplodingLayers';
import ParticleComponent from './ParticleComponent';



function App() {
  const headerProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {duration: 2000}
  })

  
  return (
  <div>
    <ParticleComponent />
    <img className="round-img" src="../tof.jpg" alt=" Tofunmi Adigun-Hameed" />
    <animated.h1 style={headerProps}>Hello!</animated.h1>
    <h3>I'm Tofunmi Adigun-Hameed (aka Tof), and I'm an aspiring <i style={{color: 'blue'}}>Software Engineer</i> &#128522;</h3>
    <p className="space-after">
      I'm currently studying Mathematics and Computer Science at the University of Oxford and I love learning about and working with new technologies.
      My other passions include outreach and Zumba.
    </p>
    <ExplodingLayers />
    
  </div>
  );
}

export default App;
