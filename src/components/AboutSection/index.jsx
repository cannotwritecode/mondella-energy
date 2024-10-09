import { useEffect, useState } from 'react'
import { storage } from '../../config/firebase' // Import firebase setup
import { ref, getDownloadURL } from 'firebase/storage'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import '../../flip.css'
const AboutSection = () => {
  const [imageUrl, setImageUrl] = useState('')
  const [visionImageUrl, setVisionImageUrl] = useState('')
  const [missionImageUrl, setMissionImageUrl] = useState('')
  useEffect(() => {
    const fetchImages = async () => {
      const visionImageRef = ref(storage, 'section-images/vision-img.png')
      const missionImageRef = ref(storage, 'section-images/mission-img.png')
      getDownloadURL(visionImageRef)
        .then((url) => {
          setVisionImageUrl(url) // Set the image URL in the state
        })
        .catch((error) => {
          console.error('Error fetching image URL:', error)
        })

      getDownloadURL(missionImageRef)
        .then((url) => {
          setMissionImageUrl(url) // Set the image URL in the state
        })
        .catch((error) => {
          console.error('Error fetching image URL:', error)
        })

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
  }, [imageUrl, visionImageUrl, missionImageUrl])
  return (
    <div className="w-full font-montserrat px-[4%] py-7 mb-20 md:mb-40">
      <div className="mb-16">
        <h2 className="font-bold text-4xl text-orange text-center whitespace-nowrap ">
          {' '}
          About Us
        </h2>
        <h3 className="font-normal text-base  tracking-tight text-black/70 text-center mt-10 whitespace-nowrap">
          {' '}
          What is Mondella Energy about?
        </h3>
      </div>
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
      <div className="flex flex-col gap-y-7 md:gap-y-0 md:flex-row md:w-full md:justify-between md:gap-x-9 mt-40 sm:mt-20">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={visionImageUrl} alt="vision statement" className="" />
            </div>
            <div
              className="flip-card-back"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(36, 122, 189, 0.8), rgba(36, 122, 189, 0.8)), url(${visionImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="text-center font-montserrat">
                <h1 className="font-bold text-lg">John Doe</h1>
                <p>Architect & Engineer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={missionImageUrl} alt="Mission Statement" className="" />
            </div>
            <div
              className="flip-card-back"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(36, 122, 189, 0.8), rgba(36, 122, 189, 0.8)), url(${missionImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="text-center font-montserrat">
                <h1 className="font-bold text-lg">John Doe</h1>
                <p>Architect & Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
