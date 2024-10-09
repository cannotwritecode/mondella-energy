import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { useEffect, useState } from 'react'
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../config/firebase'
import Hamburger from '../Hamburger'
const Navigation = () => {
  const [imageUrl, setImageUrl] = useState('')
  useEffect(() => {
    const fetchImages = async () => {
      const imageRef = ref(storage, 'logo/mondella-logo.svg')
      getDownloadURL(imageRef)
        .then((url) => {
          setImageUrl(url) // Set the image URL in the state
        })
        .catch((error) => {
          console.error('Error fetching image URL:', error)
        })
    }

    fetchImages()
  }, [imageUrl])
  return (
    <nav className="bg-nav h-32 w-full py-4 px-7 text-white font-poppins flex items-center">
      <ul className="flex items-center justify-between w-full">
        <li className="font-extrabold font-2xl">
          <Link to={ROUTES.LANDING}>
            <img
              src={imageUrl}
              alt="mondella-energy-logo-white"
              className="w-[160px] h-full lg:w-[303px] h-full"
            />
          </Link>
        </li>
        <div className="hidden lg:flex items-center justify-between space-x-4 font-semibold font-lg">
          <li className="hover:text-red-500 text-white text-base">
            <Link to={ROUTES.LANDING}>Home</Link>
          </li>
          <li className="hover:text-red-500 text-white text-base">
            <Link to={ROUTES.ABOUT}>About Us</Link>
          </li>
          <li className="hover:text-red-500 text-white text-base">
            <Link to={ROUTES.SERVICES}>Our Services</Link>
          </li>
        </div>
        <Link to={ROUTES.CAREERS}>
          <button className="hidden lg:flex bg-white rounded-lg text-nav font-montserrat text-base font-medium px-3 py-2">
            Get in Touch
          </button>
        </Link>
        <Hamburger />
      </ul>
    </nav>
  )
}

export default Navigation
