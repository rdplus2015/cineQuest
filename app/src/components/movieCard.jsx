import {motion}  from "framer-motion"

export default function MovieCard({ title, year, imgUrl }) {
  
  return (
    <motion.div 
      className="w-[200px] h-[400px] flex flex-col mb-10 rounded-xl overflow-hidden bg-gray-200 dark:bg-secondaryBlack shadow-lg shadow-gray-500 dark:shadow-black transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-[270px] object-cover"
      />
      
      <div className="flex-1 p-4 text-center text-secondaryBlack dark:text-white flex flex-col justify-between  transition-colors duration-500 ease-in-out">
        <h3 className="text-[clamp(1rem,1vw,1.3rem)] font-semibold leading-tight min-h-[28px] overflow-hidden ">
          {title}
        </h3>

        <div className="mt-2  bg-gray-400 dark:bg-mainBlack rounded flex justify-center items-center px-3 py-1  transition-colors duration-500 ease-in-out">
          <p className="text-[clamp(0.75rem,1.5vw,1rem)]  text-white dark:text-gray-400"  transition-colors duration-500 ease-in-out>{year}</p>
        </div>
      </div>
    </motion.div>
  );
}
