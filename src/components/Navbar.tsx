import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src="\src\assets\Logo.jpg" alt="School Logo" />
      </Link>

      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/admissions" onClick={closeMenu}>Admissions</Link></li>
        <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
        <li><Link to="/staff" onClick={closeMenu}>Staff</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar