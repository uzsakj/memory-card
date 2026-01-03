export const WinMessage = ({ moves }) => {
    return (
        <div className="
        bg-[rgba(15,23,42,0.95)] 
        p-[15px_20px]
        rounded-xl 
        text-center
        border border-[rgba(255,255,255,0.1)]
        shadow-[0_10px_30px_rgba(0,0,0,0.5)]
        animate-slideDown
        lg:p-[30px_40px]
        ">
            <h2 className=" mb-2.5 text-md lg: text-xl ">Congratulations</h2>
            <p className="text-sm text-[#a1a1aa] lg:text-xl">Your completed the game in {moves} moves! </p>
        </div>)
}