import { useEffect, useState } from 'react'
import Confetti from './Confetti'

function MessageCard({ onBack, onShowGallery }) {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setShowConfetti(true)
  }, [])

  return (
    <div className="w-full max-w-4xl animate-[slideIn_0.8s_ease-out]">
      {showConfetti && <Confetti />}
      <div className="bg-white/95 rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Envelope flap */}
        <div className="relative h-32 bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 flex items-center justify-center" style={{clipPath: 'polygon(0 0, 100% 0, 100% 60%, 50% 100%, 0 60%)'}}>
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center px-4">
            A Special Message For You 💙
          </h1>
        </div>
        
        {/* Message content - scrollable */}
        <div className="p-6 sm:p-12 max-h-[60vh] overflow-y-auto">
          <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-5">
            <p>Dear Ali,</p>
            <p>
              On this special day, I want you to know how much you mean to me. 
            </p>
            <p>
              May this year bring you endless joy, amazing adventures, and all the happiness you deserve. 
              You are truly one of a kind, and I'm so grateful to have you in my life.
            </p>
            <p>I also want you to remember how strong and brave you are. I see everything you go through, even the struggles you don’t always talk about, and I admire how you keep moving forward with so much courage. No matter how heavy things get, please know you don’t have to carry it all alone, I’m always here for you, Ali.
            </p>
            <p>You deserve peace, comfort, and days that feel lighter. And even in your hardest moments, I hope you never forget how strong your heart is.</p>
            <p className="italic text-blue-500 text-right mt-8">
              With love and best wishes,<br />
              Aki
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={onShowGallery}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 active:scale-95 animate-pulse-slow"
            >
              Click me...
            </button>
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              ← Back
            </button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageCard
