import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  key: number,
  event: never
}

function Card({event}:Props) {
  const [desc, setDesc] = useState(JSON.stringify(event["description"]));
  useEffect(() => {
    const newDesc = desc.replace(/(<([^>]+)>)/gi, "").replace(/\\n/g," ").replace(/Details/, "")
    if (newDesc.length > 300) {
      setDesc(newDesc.substring(1, 300).trimEnd() + '...');
    } else {
      setDesc(newDesc.substring(1, newDesc.length - 2));
    }
  }, []);

  return (
    <>
      <div className="card">
      <div className='sk-meetup-event' data-embed-id='25455614'></div><script src='https://widgets.sociablekit.com/meetup-group-events/widget.js' async defer></script>
        <h2>{event["name"]}</h2>
        <div className="row">
          <img src={event["image"]} />
          <div className="col">
            <div className="row">
              <FontAwesomeIcon icon={["far", "calendar"]} />
              <p><strong>{event["start_day"]} {event["start_date"]}</strong></p>
              <FontAwesomeIcon icon={["far", "clock"]} className="lpad"/>
              <p><strong>{event["start_time"]} to {event["end_time"]}</strong></p>
            </div>
            <div className="col desc">
            <div className="row">
              <FontAwesomeIcon icon={["fas", "location-dot"]}/>
              <p>{event["location"]}</p>
            </div>
              <p></p>
              <p>{desc}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Card
