import Balloons from './Balloons'

function BirthdayCard({ onOpenMessage }) {
  const handleClick = () => {
    onOpenMessage()
  }

  return (
    <>
      <Balloons />
      
      <div className="bg-white/95 rounded-3xl shadow-2xl p-6 sm:p-12 w-full max-w-4xl animate-[fadeInUp_1s_ease-out]">
        <div className="mb-8 min-h-[60px] sm:min-h-[80px] flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 text-center typing-text-loop">
            Happy Birthday, Ali!
          </h1>
        </div>
        
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 rounded-lg overflow-hidden border-4 border-blue-500 shadow-lg animate-[glow_2s_ease-in-out_infinite]">
          <img 
            src="/assets/1.jpg" 
            alt="Birthday Person" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center leading-relaxed mb-6 sm:mb-8 px-2">
          Wishing you a day filled with joy, laughter, and all the things that make you smile!
        </p>
        
        <button
          onClick={handleClick}
          className="mx-auto block bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 active:scale-95 flex items-center gap-2 sm:gap-3 animate-pulse-slow"
        >
          <span className="text-xl sm:text-">✉️</span>
          Open Message
        </button>
      </div>
    </>
  )
}

export default BirthdayCard
