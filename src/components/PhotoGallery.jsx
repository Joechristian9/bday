import { useState } from 'react'

function PhotoGallery({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Add your photo paths here - automatically generates paths for 1.jpg to 21.jpg
  const photos = Array.from({ length: 21 }, (_, i) => `/assets/${i + 1}.jpg`)

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <div className="w-full max-w-4xl animate-[fadeInUp_1s_ease-out]">
      <div className="bg-white/95 rounded-3xl shadow-2xl p-6 sm:p-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 text-center mb-8">
          Beautiful Memories 📸
        </h2>

        {/* Photo Display */}
        <div className="relative mb-8">
          <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500">
            <img
              src={photos[currentIndex]}
              alt={`Memory ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevPhoto}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all hover:scale-110 shadow-lg"
          >
            ←
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all hover:scale-110 shadow-lg"
          >
            →
          </button>
        </div>

        {/* Photo Counter */}
        <p className="text-center text-gray-600 mb-6">
          {currentIndex + 1} / {photos.length}
        </p>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="mx-auto block bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 active:scale-95"
        >
          ← Back to Message
        </button>
      </div>
    </div>
  )
}

export default PhotoGallery
