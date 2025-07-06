import LinkButton from "../LinkButton"
import { motion } from "framer-motion"
export default function Header() {
        return (
                <header className="py-4  border-b-1 border-gray-800">
                        <div className=" flex justify-around py-2 align-items-center">
                                <div className="flex items-center">
                                        <a href="http:/"> 
                                        <motion.h1 className=" text-[clamp(1.5rem,1.7vw,4rem)] font-bold text-white "
                                                initial={{ opacity: 0, x:-20}}
                                                animate={{ opacity: 1, x:0 }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                        > 
                                        CineQuest 
                                        </motion.h1> 
                                        </a>
                                </div>
                                <motion.span 
                                        initial={{ opacity: 0, x:20}}
                                        animate={{ opacity: 1, x:0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                >
                                        <LinkButton to={"/favorites"} className="bg-secondaryBlack text-gray-300 hover:bg-red-500 font-bold"> Favorites </LinkButton>
                                  </motion.span>
                                
                        </div>                  
                </header>
        )
}

