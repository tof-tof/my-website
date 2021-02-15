import React from "react";
import Hover from './AnimatedPic';
import Pdf from './assets/Adigun-Hameed_T.pdf';

export default function HoverSocialMedia() {
  return (
    <div>
      <Hover href={"https://github.com/tof-tof"} src={"../github.png"} alt={"github"} />
      <div className="no-line-break pad-out"></div>
      <Hover href={"https://www.linkedin.com/in/tofunmi-adigun-hameed/"} src={"../linkedin.png"} alt={"linkedIn"} />
      <div className="no-line-break pad-out"></div>
      <Hover href={Pdf} target={"_blank"} src={"../profile.png"} alt={"cv"} /> 
    </div>
  )
}