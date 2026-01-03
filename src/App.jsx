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
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializteGame} />
      {isGameComplete && <WinMessage moves={moves} />}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onclick={handleCardClick} />
        ))}
      </div>
    </div>
  )
}

export default App
