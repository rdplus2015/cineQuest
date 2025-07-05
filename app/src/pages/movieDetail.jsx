import { useEffect, useState } from "react";
import PageLayout from "../components/layout/pageLayout";
import LinkButton from "../components/LinkButton";
import { getMovie } from "../services/tmdbAPI";
import { useParams } from "react-router-dom";


export default function MovieDetail() {

        const {movieId} = useParams()
        const [movie, setMovie] = useState(null)

        useEffect(()=>{
                getMovie({movieId}).then(data=>{
                        setMovie(data) 
                })
                
        }, [movieId])

        console.log(movie);
        

        if (movie) {
                 return (
                        <PageLayout>
                                <div>
                                        <div className="my-20 mx-10 sm:mx-10 md:mx-20 lg:mx-40 rounded-xl overflow-hidden  bg-secondaryBlack shadow-lg shadow-black">
                                                <img
                                                        src={
                                                        movie.backdrop_path
                                                        ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
                                                        : movie.poster_path
                                                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                                        : "/img/tango.avif" 
                                                        }
                                                        alt={movie.title}
                                                        className="w-full h-[300px] md:h-[500px] object-cover"
                                                        />

                                                <div className="p-8 text-white" >
                                                        <h3 className="text-[clamp(1rem,3vw,2.5rem)] font-semibold ">
                                                                                
                                                                       {movie.title}  
                                                                                 
                                                        </h3>

                                                        <p className="text-[clamp(1rem,1.5vw,2.5rem)] text-gray-400 my-8 "> 
                                                                                            {movie.overview}
                                                        </p>
                                                        <div className="flex gap-4 flex-wrap">
                                                                <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack p-4 "> <span className="font-bold"> Status: </span>  {movie.status}      </p>
                                                                <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack p-4 "> <span className="font-bold"> Original language: </span>   {movie.original_language}  </p>
                                                                <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack p-4 "> <span className="font-bold"> Adult : </span> {movie.adult ? "Yes" : "No"} </p>
                                                                <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack p-4 "> <span className="font-bold">Release date: </span> {movie.release_date}</p>
                                                                <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack p-4 "> <span className="font-bold">Runtime: </span> {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m </p>
                                                                <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack p-4 "> <span className="font-bold">Vote: </span> {movie.vote_average}/10 </p>
                                                                <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack p-4 "> <span className="font-bold">Popularity: </span> {movie.popularity} </p>
                                                                <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack p-4 font-stretch-105%"> <span className="font-bold">Genres: </span>{movie.genres.map(genre => genre.name).join(' | ')} </p>
                                                        </div>
                                                        <div className=" flex gap-4 mt-8">
                                                                <LinkButton to={"https://www.netflix.com/ca-fr/"} className="bg-red-500"> Watch </LinkButton>
                                                                <LinkButton to={"/"} className="bg-mainBlack"> See all movies </LinkButton>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </PageLayout>
                ) 
        }
             
}