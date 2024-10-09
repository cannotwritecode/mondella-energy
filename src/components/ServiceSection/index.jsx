import { useEffect, useState } from 'react'
import { storage } from '../../config/firebase' // Import firebase setup
import { ref, getDownloadURL } from 'firebase/storage'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const ServiceSection = () => {
  const [imageUrl, setImageUrl] = useState('')
  useEffect(() => {
    const fetchImages = async () => {
      const imageRef = ref(storage, 'section-images/services-img.png')
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
    <div className="relative w-full overflow-hidden font-montserrat bg-[#D9D9D9]/50 px-[4%] py-12 sm:py-7 mb-20 md:mb-40">
      <div className="mb-16">
        <h2 className="font-bold text-2xl sm:text-4xl text-orange text-center whitespace-nowrap ">
          {' '}
          Our Services
        </h2>
        <h3 className="font-normal text-base   text-black/70 text-center mt-5 sm:mt-10 whitespace-nowrap">
          {' '}
          What we offer at Mondella Energy?
        </h3>
      </div>
      <div className="flex flex-col-reverse gap-y-7 md:gap-y-0 md:flex-row md:gap-x-4 md:justify-between">
        <div className="md:max-w-1/2 max-h-[496px]">
          <img
            src={imageUrl}
            alt="Service Image"
            className="w-full h-[200px] sm:h-full object-cover"
          />
        </div>

        <div className="md:max-w-1/2">
          <div className="text-left font-montserrat text-black mb-7">
            <h3 className="font-bold text-lg">Product Trading:</h3>
            <p className="font-normal text-base max-w-[562px]">
              Through our integrated risk management strategies, we mitigate
              market fluctuations, ensuring pricing stability for our clients.
              With a commitment to compliance, transparency, and ethical
              practices, our petroleum trading services prioritize efficient and
              reliable transactions
            </p>
          </div>
          <div className="text-left font-montserrat text-black mb-7">
            <h3 className="font-bold text-lg">
              We supply quality PMS and AGO via road or barge:
            </h3>
            <p className="font-normal text-base max-w-[562px]">
              Our logistics team ensures that all safety regulations are adhered
              to, minimizing risk and maximizing operational efficiency. Whether
              delivering to remote locations or urban centers, we guarantee safe
              and prompt delivery of products.
            </p>
          </div>
          <div className="text-left font-montserrat text-black mb-7">
            <h3 className="font-bold text-lg">Consultancy:</h3>
            <p className="font-normal text-base max-w-[562px]">
              Our consultancy service is designed to provide expert guidance to
              individuals and organizations operating in or entering the
              petroleum trading and supply industry.
            </p>
          </div>
          <Link to={ROUTES.SERVICES}>
            <button className="px-4 py-2 border border-nav text-nav text-base font-medium rounded-lg">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
