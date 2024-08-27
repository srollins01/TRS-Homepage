import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  const today = new Date();
  return (
    <div id="footer" className="footer">
      <img src="/trs-icon.png" height="70" width="70" alt="trs home icon"/>
      <h2>Find us on social media</h2>
      <div className="row">
        <a href="https://www.meetup.com/rpgtokyo/" target="_blank">
          <FontAwesomeIcon icon={["fab", "meetup"]} color="#BE8C4C"/>
        </a>
        <a href="https://www.facebook.com/groups/TokyoRPG/" target="_blank">
          <FontAwesomeIcon icon={["fab", "square-facebook"]} color="#BE8C4C"/>
        </a>
        <a href="https://tavern.tokyorpgsociety.com/" target="_blank">
          <img src="/table.svg" className="table"/>
        </a>
        <a href="https://discord.gg/nrqC6rS4xa" target="_blank">
          <FontAwesomeIcon icon={["fab", "discord"]} color="#BE8C4C"/>
        </a>
      </div>
      <p>© {today.getFullYear()} Tokyo RPG Society</p>
    </div>
  )
}

export default Footer
