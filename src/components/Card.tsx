function Card() {
  return (
    <div className="card" data-aos="fade-up">
      <h2>Event 1</h2>
      <div className="vert-row">
        <img src="/game-day-card.png" />
        <div className="hor-col">
          <div className="vert-row">
            <p><strong>Date:</strong> 2024/08/27</p>
            <p><strong>Time:</strong> 3:00pm-4:00pm</p>
          </div>
          <div className="hor-col lpad">
            <p><strong>Location:</strong> Tokyo</p>
            <p><strong>Summary:</strong> Desc.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card
