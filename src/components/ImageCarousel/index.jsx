import { useState, useEffect } from 'react'
import { storage } from '../../config/firebase' // Import firebase setup
import { ref, listAll, getDownloadURL } from 'firebase/storage'

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageUrls, setImageUrls] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, 'carousel-images') // Adjust to your folder path
      const result = await listAll(storageRef)

      const urls = await Promise.all(
        result.items.map((imageRef) => getDownloadURL(imageRef))
      )

      setImageUrls(urls)
    }

    fetchImages()
  }, [imageUrls])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change every 3 seconds

    return () => clearInterval(intervalId) // Cleanup interval on unmount
  }, [imageUrls.length])

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {imageUrls.map((image, index) => (
          <div className="min-w-full h-[400px] flex-shrink-0" key={index}>
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

export default ImageCarousel
