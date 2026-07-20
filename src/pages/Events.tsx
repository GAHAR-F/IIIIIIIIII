import EventCard from '../components/EventCard'
import { events } from '../data/events'

const Events = () => {
  return (
    <div className="events-page">
      <h1>School Events</h1>
      <div className="events-grid">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            image={event.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Events