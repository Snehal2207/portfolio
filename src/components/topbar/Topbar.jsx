import "./topbar.scss";
import Menu from "../menu/Menu";

export default function topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Snehal Motisariya
          </a>
          <Menu />
        </div>
      </div>
    </div>
  );
}
