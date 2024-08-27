import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card() {
  return (
    <>
      <div className="card" data-aos="fade-up">
        <h2>Event 1</h2>
        <div className="row">
          <img src="/game-day-card.png" />
          <div className="col">
            <div className="row">
              <FontAwesomeIcon icon={["far", "calendar"]} />
              <p>2024/08/27</p>
              <FontAwesomeIcon icon={["far", "clock"]} className="lpad"/>
              <p>3:00pm-4:00pm</p>
            </div>
            <div className="col desc">
            <div className="row">
              <FontAwesomeIcon icon={["fas", "location-dot"]}/>
              <p>Tokyo</p>
            </div>
            <p>Lorem ipsum dolor sit amet. Ut provident odio et earum dicta id sint ipsa et molestiae iure eos cumque exercitationem est eaque impedit. Ut tempore laborum qui deleniti mollitia non dignissimos fugit qui laborum voluptate ex galisum officia in minima obcaecati. In dolores quis eum delectus voluptatibus a similique esse?</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Card
