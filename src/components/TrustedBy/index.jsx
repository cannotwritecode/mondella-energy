import { useState, useEffect } from 'react'
import { storage } from '../../config/firebase' // Import firebase setup
import { ref, listAll, getDownloadURL } from 'firebase/storage'

const TrustedBy = () => {
  const [imageUrls, setImageUrls] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, 'trusted-by') // Adjust to your folder path
      const result = await listAll(storageRef)

      const urls = await Promise.all(
        result.items.map((imageRef) => getDownloadURL(imageRef))
      )

      setImageUrls(urls)
    }

    fetchImages()
  }, [imageUrls])

  return (
    <div className="md:mb-40 bg-[#D9D9D9]/50 text-center pt-16 pb-4">
      <h4 className=" font-medium font-montserrat text-black mb-7">
        Trusted by leading companies
      </h4>
      <div className=" flex justify-between px-[4%] py-7">
        {imageUrls.map((image, index) => (
          <div className="h-9 sm:h-12 md:h-20" key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustedBy
