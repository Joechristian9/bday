import { useEffect, useState } from 'react'

function Confetti() {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    const colors = ['bg-blue-500', 'bg-indigo-500', 'bg-sky-400', 'bg-blue-400', 'bg-indigo-400']
    const newPieces = []

    for (let i = 0; i < 100; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
        duration: Math.random() * 2 + 2
      })
    }

    setPieces(newPieces)

    const timer = setTimeout(() => {
      setPieces([])
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[999] overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={`absolute w-2.5 h-2.5 ${piece.color} -top-2.5 confetti-piece`}
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`
          }}
        />
      ))}
    </div>
  )
}

export default Confetti
