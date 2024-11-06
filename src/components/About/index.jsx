import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
const AboutPage = () => {
  const [imageUrl, setImageUrl] = useState('')
  useEffect(() => {
    const fetchImages = async () => {
      const imageRef = ref(storage, 'section-images/about-section-img.png')
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
    <div className="w-full font-montserrat px-[4%] py-7 mb-20 md:mb-40">
      <div className="flex flex-col gap-y-9 sm:gap-y-0 md:flex-row md:gap-x-4 md:justify-between">
        <div className="md:max-w-1/2">
          <div className="text-left font-montserrat text-black mb-7">
            <p className="font-normal text-base max-w-[562px]">
              Mondella Energy, an award-winning Nigerian company, specializes in
              the trading and supply of petroleum products. As an incorporated
              business, we are dedicated to providing seamless energy solutions
              nationwide, prioritizing commitment and reliability in every
              transaction. With a track record of efficiency and competence,
              Mondella Energy has consistently demonstrated our ability to
              deliver petroleum products across Nigeria. Our services are built
              on a foundation of trust, ensuring timely and dependable energy
              supply to meet the needs of various sectors
            </p>
          </div>

          <Link to={ROUTES.ABOUT}>
            <button className="px-4 py-2 border border-nav text-nav text-base font-medium rounded-lg hover: translate-y-2">
              View More
            </button>
          </Link>
        </div>
        <div className="max-h-[201px] md:max-w-1/2 sm:max-h-[496px]">
          <img
            src={imageUrl}
            alt="Service Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
