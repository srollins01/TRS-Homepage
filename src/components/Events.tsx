import Card from "./Card"
import { useState, useEffect } from "react"

function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('https://data.accentapi.com/feed/25455612.json?no_cache=20240829120543')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEvents(data.events);
      });
  }, []);

  if (!events) {
    return (
      <section id="events">
        <h1><strong><em>Upcoming Events</em></strong></h1>
        <div className="col cardspacing">
          <div className="card">
            <h2>No events to display</h2>
          </div>
        </div>
      </section>
    )
  }

  const eventList = events.map((event, index) =>
    <Card key={index} event={event} />
  );

  return (
  <section id="events">
    <h1><strong><em>Upcoming Events</em></strong></h1>
    <div className="col cardspacing">
      <div>{eventList}</div>
    </div>
  </section>
  )
}

export default Events
