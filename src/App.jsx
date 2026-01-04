import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card"
import { WinMessage } from "./components/WinMessage"
import { useGameLogic } from "./hooks/useGameLogic";

// Load files ending in '_icon' from src/assets.
const icons = import.meta.glob('./assets/*_icon.{png,jpg,jpeg,svg}', { eager: true });
const uniqueValues = Object.values(icons).map((icon) => icon.default);
// Fill card Values with two of each icon
const cardValues = [...uniqueValues, ...uniqueValues];



function App() {

  const {
    cards,
    score,
    moves,
    isGameComplete,
    initializteGame,
    handleCardClick
  } = useGameLogic(cardValues)

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center py-10 ">
      <GameHeader score={score} moves={moves} onReset={initializteGame} />
      {isGameComplete && <WinMessage moves={moves} />}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 mt-4 sm:mt-8 w-full max-w-lg px-2 sm:px-4">
        {cards.map((card) => (
          <Card key={card.id} card={card} onclick={handleCardClick} />
        ))}
      </div>
    </div>
  )
}

export default App
