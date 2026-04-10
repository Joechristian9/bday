import { useState, useEffect } from 'react'

function BirthdayGreeting() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const greetings = [
    "🎉 Happy Birthday! 🎉",
    "🎂 Make a wish! 🎂",
    "🎈 Celebrate your special day! 🎈",
    "✨ You're amazing! ✨",
    "🎁 Enjoy every moment! 🎁"
  ]

  return (
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full shadow-2xl animate-pulse">
          <p className="text-2xl font-bold text-center whitespace-nowrap">
            {greetings[0]}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BirthdayGreeting
