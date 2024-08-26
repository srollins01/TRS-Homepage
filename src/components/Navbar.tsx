function Navbar() {
  return (
    <div className="topnav">
      <a href="#">
        <img src="/trs-icon.png" height="70" width="70" alt="trs home icon"/>
      </a>
      <div className="nav-text">
        <a target="_blank" href="https://github.com/srollins01">
          <p>About Us</p>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/sarah-rollins-sr/">
          <p>Events</p>
        </a>
        <a target="_blank" href="mailto:s.rollins751@gmail.com">
          <p>Contact</p>
        </a>
      </div>
    </div>
  )
}

export default Navbar
