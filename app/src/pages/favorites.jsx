import PageLayout from "../components/layout/pageLayout";
import MovieCard from "../components/movieCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../components/button";
import { motion } from "framer-motion";

export default function Favorites() {
        const [favorites, setFavorites] = useState([]);

        useEffect(() => {
                const data = JSON.parse(localStorage.getItem("favorites")) || [];
                setFavorites(data);
        }, []);

        const handleClick = ()=>{
                localStorage.removeItem("favorites");
                setFavorites([]);
                alert(" All Favorites deleted !");
        }
        return (
                
                <PageLayout>
                       <motion.main className=" flex flex-col  items-center "
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                       >
                  
                                        <Button className="bg-secondaryBlack hover:bg-red-500 py-5 mt-24" onClick={handleClick}> Clear Favorites </Button>
                     
                                <div className=" flex flex-wrap gap-6 justify-center my-20 px-10">
                                {favorites.map(movie => (
                                                <Link to={`/moviedetail/${movie.id}`} key={movie.id}>
                                                        <MovieCard title={movie.title} year={movie.year} imgUrl={movie.imgUrl} />
                                                </Link>
                                        ))}
                                </div>
                        </motion.main>
                </PageLayout>
        )
}
