export const GameHeader = ({ score, moves, onReset }) => {
    return (
        <div className="
        flex
        flex-col
        items-center
        gap-5
        bg-[rgba(15,23,42,0.9)]
        p-7 pt-0
        rounded-2xl
        shadow-lg
        w-full
        border-solid
        border-[rgba(255,255,255,0.1)]
         ">
            <div className="flex gap-7 justify-center w-full">
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-[0.9rem] text-zinc-400 font-semibold uppercase tracking-[1px]">
                        Score
                    </p>

                    <p className="text-[2rem] font-bold text-indigo-400">
                        {score}
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-[0.9rem] text-zinc-400 font-semibold uppercase tracking-[1px]">
                        Moves
                    </p>

                    <p className="text-[2rem] font-bold text-indigo-400">
                        {moves}
                    </p>

                </div>
            </div>
            <div>
                <button className="
                text-white
                 p-[12px_30px]
                 text-lg
                 font-semibold
                 rounded-2xl
                 cursor-pointer
                 transition-shadow
                 duration-200
                 shadow-[0_4px_15px_rgba(0,0,0,0.2)]
                 active:scale-95 bg-linear-to-br from-[#667eea] to-[#764ba2]
                 hover:-translate-y-0.5
                 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]"
                    onClick={onReset}>
                    New Game
                </button>
            </div>
        </div>)
};
