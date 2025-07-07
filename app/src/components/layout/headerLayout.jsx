import LinkButton from "../LinkButton"
import { motion } from "framer-motion"
import DarkModeToggle
 from "../darkModeToggle"
export default function Header() {
        return (
                <header className="sticky top-0 z-50 py-4  border-b-1 border-gray-400 dark:border-gray-800 bg-gray-200 dark:bg-mainBlack">
                        <div className=" flex justify-around py-2 align-items-center">
                                <div className="flex items-center">
                                        <a href="http:/"> 
                                        <motion.h1 className=" text-[clamp(1.5rem,1.7vw,4rem)] font-bold text-mainBlack dark:text-white transition-colors duration-500 ease-in-out"
                                                initial={{ opacity: 0, x:-20}}
                                                animate={{ opacity: 1, x:0 }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                        > 
                                        CineQuest 
                                        </motion.h1> 
                                        </a>
                                </div>
                                <motion.div 
                                        initial={{ opacity: 0, x:20}}
                                        animate={{ opacity: 1, x:0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="flex gap-5"
                                >
                                        
                                        <LinkButton to={"/favorites"} className="hover:text-white bg-gray-400 text-mainBlack dark:bg-secondaryBlack dark:text-gray-300 hover:bg-gray-700 dark:hover:bg-red-500 font-bold"> Favorites </LinkButton>
                                        <DarkModeToggle/>
                                  </motion.div>
                                
                        </div>                  
                </header>
        )
}

