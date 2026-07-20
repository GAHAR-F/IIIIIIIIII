import { FaPhone, FaEnvelope, FaTelegram } from 'react-icons/fa'

const TopInfoBar = () => {
  return (
    <div className="top-info-bar">
      <span><FaPhone /> +251-912-703-166</span>
      <span><FaEnvelope /> abarega66@gmail.com</span>
      <span><FaTelegram /> @yenegeteweldacdemy</span>
      <span className="motto">"creating an effective, competent & intelligent generation that can see tomorrow!"</span>
    </div>
  )
}

export default TopInfoBar