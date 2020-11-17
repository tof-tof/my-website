import { useSpring, animated } from 'react-spring';
import Hover from './AnimatedPic';
//import Goo from './Blob';
import Pdf from './assets/Adigun-Hameed_T.pdf';
import Particles from 'react-particles-js';



function App() {
  const headerProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {duration: 2000}
  })

  
  return (
    <div>
      <Particles
        style={{
          position: "fixed",
          top: 0,
          left: 0}}
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
      <Particles
        style={{
          position: "fixed",
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
    <div>
    <img className="round-img" src="../tof.jpg" alt=" Tofunmi Adigun-Hameed" />
    </div>
    <animated.h1 style={headerProps}>Hello!</animated.h1>
    <h3>I'm Tofunmi Adigun-Hameed (aka Tof), an I'm an aspiring <i>Software Engineer</i> &#128522;</h3>
    <p className="space-after">
      I'm currently studying Mathematics and Computer Science at the University of Oxford and I love learning about and working with new technologies.
      My other passions include outreach and Zumba.
    </p>
    <Hover href={"https://github.com/tof-tof"} src={"../github.png"} alt={"github"} />
    <div className="no-line-break pad-out"></div>
    <Hover href={"https://www.linkedin.com/in/tofunmi-adigun-hameed/"} src={"../linkedin.png"} alt={"linkedIn"} />
    <div className="no-line-break pad-out"></div>
    <Hover href={Pdf} target={"_blank"} src={"../profile.png"} alt={"cv"} /> 
  </div>
  );
}

export default App;
