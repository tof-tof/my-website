import { useSpring, animated } from 'react-spring';
// eslint-disable-next-line
import Goo from './Blob'; 
import Particles from 'react-particles-js';
import HoverSocialMedia from './HoverSocialMedia';
import ExplodingLayers from './ExplodingLayers';



function App() {
  const headerProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {duration: 2000}
  })

  
  return (
    <div>
      <div className="no-line-break">
        <Particles style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        height="70%"
        width="37%"
        params={{
          particles: {
            color: {
              value: "#000000"
            },
            line_linked: {
              color: {
                value: "#000000"
              }
            },
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          }
        }}
      />
      </div>
      <div className="no-line-break">
        <Particles 
          style={{
            position: "absolute",
            top: 0,
            right: 0}}
          height="70%"
          width="37%"
          params={{
            particles: {
              color: {
                value: "#000000"
              },
              line_linked: {
                color: {
                  value: "#000000"
                }
              },
              number: {
                value: 50
              },
              size: {
                value: 3
              }
            }
          }}
        />
      </div>
    <div>
    <img className="round-img" src="../tof.jpg" alt=" Tofunmi Adigun-Hameed" />
    </div>
    <animated.h1 style={headerProps}>Hello!</animated.h1>
    <h3>I'm Tofunmi Adigun-Hameed (aka Tof), an I'm an aspiring <i>Software Engineer</i> &#128522;</h3>
    <p className="space-after">
      I'm currently studying Mathematics and Computer Science at the University of Oxford and I love learning about and working with new technologies.
      My other passions include outreach and Zumba.
    </p>
    <ExplodingLayers />
    
  </div>
  );
}

export default App;
