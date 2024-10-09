import { useState } from 'react'

const Hamburger = () => {
  // Manage the active state for the hamburger menu
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="flex lg:hidden justify-end p-4">
      {/* Hamburger menu button */}
      <div
        className="relative z-10 w-8 h-8 cursor-pointer"
        onClick={toggleMenu}
      >
        <span
          className={`block absolute w-8 h-1 bg-white rounded transition-all duration-300 transform ${
            menuOpen ? 'translate-y-2 rotate-45' : '-translate-y-2'
          }`}
        ></span>
        <span
          className={`block absolute w-8 h-1 bg-white rounded transition-all duration-300 ${
            menuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`block absolute w-8 h-1 bg-white rounded transition-all duration-300 transform ${
            menuOpen ? '-translate-y-2 -rotate-45' : 'translate-y-2'
          }`}
        ></span>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`fixed top-0 left-0 w-full h-full p-5 bg-yellow-200 transform transition-transform duration-500 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="space-y-4">
          <li className="list-none">
            <a href="#" className="text-lg font-semibold">
              Главная
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="text-lg font-semibold">
              О нас
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="text-lg font-semibold">
              Услуги
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="text-lg font-semibold">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Hamburger
