import PageLayout from "../components/layout/pageLayout";
import MovieCard from "../components/movieCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../components/button";

export default function Favorites() {
        const [favorites, setFavorites] = useState([]);

        useEffect(() => {
                const data = JSON.parse(localStorage.getItem("favorites")) || [];
                setFavorites(data);
        }, []);

        return (
                
                <PageLayout>
                       <div className="flex flex-col justify-center items-center ">
                                <div>
                                        
                                        <Button className="bg-secondaryBlack hover:bg-red-500 mt-15" > Clean Favorites </Button>
                                </div>
                     
                                <div className=" flex flex-wrap gap-6 justify-center my-20 px-10">
                                {favorites.map(movie => (
                                                <Link to={`/moviedetail/${movie.id}`} key={movie.id}>
                                                        <MovieCard title={movie.title} year={movie.year} imgUrl={movie.imgUrl} />
                                                </Link>
                                        ))}
                                </div>
                        </div>
                </PageLayout>
        )
}
