import { useState } from 'react';
import PhotoGallery from './components/PhotoGallery';
import BirthdayMessage from './components/BirthdayMessage';
import Confetti from 'react-confetti';
import './App.css';

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
      {showConfetti && <Confetti numberOfPieces={200} recycle={false} onConfettiComplete={() => setShowConfetti(false)} />}
      <div className="container mx-auto px-4 py-8">
        <BirthdayMessage />
        <PhotoGallery />
      </div>
    </div>
  );
}

export default App;