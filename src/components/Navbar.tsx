function Navbar() {
  return (
    <div className="topnav">
      <a href="#">
        <img src="/trs-icon.png" height="70" width="70" alt="trs home icon"/>
      </a>
      <div className="nav-text">
        <a href="#about-us">
          <p>About Us</p>
        </a>
        <a href="#events">
          <p>Events</p>
        </a>
        <a href="#footer">
          <p>Contact</p>
        </a>
      </div>
    </div>
  )
}

export default Navbar
