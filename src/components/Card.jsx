export const Card = ({ card, onclick }) => {
    return (
        <div
            className="relative w-full aspect-square cursor-pointer perspective-[1000px]"
            onClick={() => onclick(card)}>
            <div className={`w-full h-full transition-all duration-500 transform-3d ${card.isFlipped ? "transform-[rotateY(180deg)]" : ""}`}>
                <div className="absolute inset-0 flex items-center justify-center bg-slate-700 rounded-lg border-2 border-slate-600 backface-hidden">
                    <span className="text-3xl font-bold text-slate-400">?</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-slate-800 rounded-lg border-2 border-blue-500 backface-hidden transform-[rotateY(180deg)]">
                    <img src={card.value} alt={`icon${card.id}`} className="w-[90%] h-[90%] object-contain" />
                </div>
            </div>
        </div>
    )
}