interface EventCardProps {
  title: string
  date: string
  description: string
  image: string
}

const EventCard = ({ title, date, description, image }: EventCardProps) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <span className="event-date">{date}</span>
      <p>{description}</p>
    </div>
  )
}

export default EventCard