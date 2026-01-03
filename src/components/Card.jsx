export const Card = ({ card, onclick }) => {
    return (
        <div
            className={`card ${card.isFlipped ? "flipped" : ""}`}
            onClick={() => onclick(card)}>
            <div className="card-front">?</div>
            <div className="card-back">
                <img src={card.value} alt={`icon${card.id}`} style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain" }} />
            </div>
        </div>
    )
}