import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div id="footer" className="footer">
      <img src="/trs-icon.png" height="70" width="70" alt="trs home icon"/>
      <h2>Find us on social media</h2>
      <div className="row">
        <a href="#about-us">
          <FontAwesomeIcon icon={["far", "calendar"]} color="#BE8C4C"/>
        </a>
        <a href="#about-us">
          <FontAwesomeIcon icon={["far", "calendar"]} color="#BE8C4C"/>
        </a>
        <a href="#about-us">
          <FontAwesomeIcon icon={["far", "calendar"]} color="#BE8C4C"/>
        </a>
        <a href="#about-us">
          <FontAwesomeIcon icon={["far", "calendar"]} color="#BE8C4C"/>
        </a>
      </div>
      <p>© 2024 Tokyo RPG Society</p>
    </div>
  )
}

export default Footer
