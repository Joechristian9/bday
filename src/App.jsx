import { useState } from 'react'
import BirthdayCard from './components/BirthdayCard'
import MessageCard from './components/MessageCard'
import PhotoGallery from './components/PhotoGallery'

function App() {
  const [showMessage, setShowMessage] = useState(false)
  const [showGallery, setShowGallery] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-blue-500 to-indigo-600 flex items-center justify-center p-5 overflow-hidden relative">
      {!showMessage && !showGallery && (
        <BirthdayCard onOpenMessage={() => setShowMessage(true)} />
      )}
      {showMessage && !showGallery && (
        <MessageCard 
          onBack={() => setShowMessage(false)}
          onShowGallery={() => setShowGallery(true)}
        />
      )}
      {showGallery && (
        <PhotoGallery onBack={() => setShowGallery(false)} />
      )}
    </div>
  )
}

export default App
