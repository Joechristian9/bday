function Balloons() {
  const balloons = [
    { left: '10%', delay: '0s', color: 'bg-blue-400/70' },
    { left: '50%', delay: '2s', color: 'bg-sky-300/70' },
    { left: '80%', delay: '4s', color: 'bg-blue-500/70' }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {balloons.map((balloon, index) => (
        <div
          key={index}
          className={`absolute w-16 h-20 ${balloon.color} rounded-[50%_50%_50%_50%/60%_60%_40%_40%] balloon`}
          style={{
            left: balloon.left,
            animationDelay: balloon.delay
          }}
        />
      ))}
    </div>
  )
}

export default Balloons
