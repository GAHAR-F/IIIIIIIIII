import StaffCard from '../components/StaffCard'
import { staff } from '../data/staff'

const Staff = () => {
  return (
    <div className="staff-page">
      <h1>Our Staff</h1>
      <div className="staff-grid">
        {staff.map((member) => (
          <StaffCard
            key={member.id}
            name={member.name}
            position={member.position}
            photo={member.photo}
          />
        ))}
      </div>
    </div>
  )
}

export default Staff