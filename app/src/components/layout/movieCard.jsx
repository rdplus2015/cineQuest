export default function MovieCard({title, year, imgUrl}) {
        
        return (
                <div className="w-full max-w-xs  my-10 rounded-xl overflow-hidden  bg-secondaryBlack shadow-lg shadow-black transition-transform duration-300 hover:scale-105">
                        <img src={imgUrl} alt={title}  className="w-full h-64 object-cover "/>
                        <div className="p-4 text-center text-white">
                                <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-semibold "> {title}</h3>
                                <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1"> {year} </p>
                        </div>
                </div>
        )
}