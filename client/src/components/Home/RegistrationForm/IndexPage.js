import * as React from 'react';
import "./style.css"
import video from "../../../images/LaunchPad.mp4"




export default function IndexPage() {
  return (
    <div className="video-container">
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
    <div className="caption d-flex aligns-items-end justify-content-center">
      <button className="btn-04"> Register a Company</button>
      <button className="btn-05"> Register Later</button>
    </div>
  </div>
  );
}