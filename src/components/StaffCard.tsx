interface StaffCardProps {
  name: string
  position: string
  photo: string
}

const StaffCard = ({ name, position, photo }: StaffCardProps) => {
  return (
    <div className="staff-card">
      <img src={photo} alt={name} />
      <h4>{name}</h4>
      <p>{position}</p>
    </div>
  )
}

export default StaffCard