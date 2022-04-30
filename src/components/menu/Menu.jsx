import "./menu.scss";

export default function Menu() {
  return (
    <div className="menu" id="menu">
      <ul>
        <li>
          <a href="#intro">Intro</a>
        </li>
        <li>
          <a href="#projects">Project</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
