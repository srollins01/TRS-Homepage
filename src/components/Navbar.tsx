import trsicon  from "/trs-icon.png"

function Navbar() {
  return (
    <div className="topnav">
      <a href="#">
        <img src={trsicon} height="70" width="70" alt="trs home icon"/>
      </a>
      <div className="nav-text">
        <a href="#about-us">About Us</a>
        <a href="#events">Events</a>
        <a href="#footer">Contact</a>
      </div>
    </div>
  )
}

export default Navbar
