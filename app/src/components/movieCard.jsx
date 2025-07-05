export default function MovieCard({ title, year, imgUrl, onFavoriteClick }) {
  return (
    <div className="w-[200px] h-[400px] flex flex-col mb-10 rounded-xl overflow-hidden bg-secondaryBlack shadow-lg shadow-black transition-transform duration-300 hover:scale-105">
      
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-[270px] object-cover"
      />
      
      <div className="flex-1 p-4 text-center text-white flex flex-col justify-between">
        <h3 className="text-[clamp(1rem,1vw,1.3rem)] font-semibold leading-tight min-h-[28px] overflow-hidden">
          {title}
        </h3>

        <div className="mt-2 bg-mainBlack rounded flex justify-between items-center px-3 py-1">
          <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400">{year}</p>

          <button
            onClick={onFavoriteClick}
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Ajouter aux favoris"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.75A5.25 5.25 0 0121.75 9c0 6.25-9 11.25-9 11.25S3.75 15.25 3.75 9A5.25 5.25 0 0116.5 3.75z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 *  // old version of layout:  to check 
 * nn
 * 
 * export default function MovieCard({title, year, imgUrl}) {
        
        return (
                <div className="w-full max-w-xs  my-10 rounded-xl overflow-hidden  bg-secondaryBlack shadow-lg shadow-black transition-transform duration-300 hover:scale-105">
                        <img src={imgUrl} alt={title}  className="w-full h-64 object-cover "/>
                        <div className="p-4 text-center text-white">
                                <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-semibold "> {title}</h3>
                                <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack "> {year} </p>
                        </div>
                </div>
        )
}
 */