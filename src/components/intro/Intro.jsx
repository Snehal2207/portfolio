// import { init } from "ityped";
// import { useEffect ,useRef } from "react";
import "./intro.scss";

export default function Intro() {
  // const textRef=useRef();
  // // const textRef = useRef<HTMLSpanElement>(null);
  // useEffect(()=>{
  //   if (!textRef.current) {
  //     return;
  //   }
  //   init(textRef.current,{
  //     // showCursor:false,
  //     // backDelay:1500,
  //     // backSpeed:60,
  //     // showCursor:true,
  //     strings:["Web Developer","web designer","Software Developer"]
  //   })
  // },[]);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="Personal" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there! I'm</h2>
          <h1>Snehal Motisariya</h1>
          <h3><span>Web Developer</span></h3>
        </div>
      </div>
    </div>
  );
}
