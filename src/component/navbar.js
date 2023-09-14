import logo from "../logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="meme" />
        <span>Meme Generator</span>
      </div>
      <div className="prj">
        <span>React - Project</span>
      </div>
    </nav>
  );
};

export default NavBar;
