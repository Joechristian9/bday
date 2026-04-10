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
        <div className="mb-8 min-h-[60px] flex items-center justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 text-center typing-text-loop">
            Happy Birthday, Ali!
          </h2>
        </div>

        {/* Photo Display */}
        <div className="relative mb-8">
          <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500">
            <img
              src={photos[currentIndex]}
              alt={`Memory ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Photo Counter */}
        <p className="text-center text-gray-600 mb-4">
          {currentIndex + 1} / {photos.length}
        </p>

        {/* Navigation Arrows - Below Photo */}
        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={prevPhoto}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all hover:scale-110 shadow-lg text-xl font-bold"
          >
            ← Previous
          </button>
          <button
            onClick={nextPhoto}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all hover:scale-110 shadow-lg text-xl font-bold"
          >
            Next →
          </button>
        </div>

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
