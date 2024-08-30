import gameday from "/game-day-card.png"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
  key: number,
  event: Record<string, string>
}

function Card({event}:Props) {
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const initialDesc = JSON.stringify(event["description"]);
    const newDesc = initialDesc.replace(/(<([^>]+)>)/gi, "").replace(/\\n/g," ").replace(/Details/, "");
    if (newDesc.length > 300) {
      setDesc(newDesc.substring(1, 300).trimEnd() + '...');
    } else {
      setDesc(newDesc.substring(1, newDesc.length - 2));
    }
  }, [event]);

  return (
    <a href="https://www.meetup.com/rpgtokyo/" target="_blank">
      <div className="card">
        <div className='sk-meetup-event' data-embed-id='25455614'></div><script src='https://widgets.sociablekit.com/meetup-group-events/widget.js' async defer></script>
          <h2>{event["name"]}</h2>
          <div className="cd-row">
            <img src={event["image"] || gameday} alt="event image"/>
            <div className="cd-col">
              <div className="cd-row">
                <div className="txt-row">
                  <FontAwesomeIcon icon={["far", "calendar"]} />
                  <p><strong>{event["start_day"]} {event["start_date"]}</strong></p>
                </div>
                <div className="txt-row">
                  <FontAwesomeIcon icon={["far", "clock"]} className="lpad"/>
                  <p><strong>{event["start_time"]} to {event["end_time"]}</strong></p>
                </div>
              </div>
              <div className="cd-col desc">
              <div className="txt-row">
                <FontAwesomeIcon icon={["fas", "location-dot"]}/>
                <p>{event["location"]}</p>
              </div>
              <p></p>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card
