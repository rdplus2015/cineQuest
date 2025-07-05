import PageLayout from "../components/layout/pageLayout"
import SearchBar from "../components/searchBar"
import LinkButton from "../components/LinkButton"
import MovieCard from "../components/movieCard"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getPopularMovies } from "../services/tmdbAPI"
import Button from "../components/button"
import { searchMovies } from "../services/tmdbAPI"

export default function MoviesList() {

        const [totalPages, setTotalPages] = useState(null)
        const [page, setPage] = useState(1)
        const [movies, setMovies] = useState([])
        
        const [query, setQuery] = useState("");
        const [debouncedQuery, setDebouncedQuery] = useState("");

        const handleNextPage = () => {
                if (page < totalPages) setPage(page + 1);
        };

        const handlePreviousPage = () => {
              if (page > 1) setPage(page - 1);
        };
     
        
        useEffect(() => {
        const timeoutId = setTimeout(() => {
        setDebouncedQuery(query); // après 500ms d’inactivité
        }, 500);

        return () => clearTimeout(timeoutId); // annule si on retape vite
        }, [query]);


        useEffect(() => {
                const fetchData = async () => {
                        let data;

                        if (debouncedQuery.trim() !== "") {
                                // Recherche : on utilise le texte tapé
                                data = await searchMovies(debouncedQuery, page);
                        } else {
                                // Pas de recherche : on affiche les films populaires
                                data = await getPopularMovies({ page });
                        }

                                setMovies(data.results);
                                setTotalPages(data.total_pages);
                };

                fetchData();
        }, [page, debouncedQuery]);


        return(
                
                <PageLayout>
                       <main className="flex-1">
                                <div className="relative bg-[url(/img/tango.avif)] bg-cover bg-center min-h-[300px] md:min-h-[500px]">
                                        <div className="absolute inset-0 bg-mainBlack/80"></div>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                                                <h2 className=" text-[clamp(1.5rem,2.5vw,4rem)] font-bold text-center font-mono">
                                                                Tonight’s Perfect Movie Awaits! 
                                                </h2>
                                                <p className=" text-red-500 text-[clamp(1.5rem,2.5vw,4rem)] font-bold text-center font-mono weight-900 ">
                                                                Discover, Watch, Love!
                                                </p>
                                                <LinkButton to={"https://www.netflix.com/ca-fr/"} className="bg-secondaryBlack text-gray-300 hover:bg-red-500 font-bold"> Watch </LinkButton>
                                        </div>
                                </div> 
                                
                                <div className="flex flex-col w-auto mx-[clamp(1rem,10vw,9rem)] my-16">
                                        <SearchBar 
                                                placeholder="Enter the film name"
                                                onChange={(e) => {
                                                setQuery(e.target.value);
                                                setPage(1); // on revient à la page 1 pour chaque nouvelle recherche
                                                }} 
                                        
                                        />
                                </div>
                                
                                      <div className="w-full flex justify-center flex-wrap gap-6 my-10  px-5">
                                                {movies.map(movie => (
                                                        <Link key={movie.id} to={`/movieDetail/${movie.id}`}>
                                                                <MovieCard
                                                                        title={movie.title}
                                                                        year={movie.release_date?.split("-")[0] || "N/A"}
                                                                        imgUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                                />
                                                        </Link>
                                                ))}
                                        </div>

                                <div className="flex justify-center flex-wrap my-10">
                                        <Button  onClick={handlePreviousPage} className="  bg-secondaryBlack text-white " disabled={page <= 1}>  Previous </Button>
                                        <p className="font-bold p-4">{page} sur {totalPages}</p>
                                        <Button  onClick={ handleNextPage} className="  bg-secondaryBlack text-white " disabled={page >= totalPages}>  next  </Button>                                         
                                </div>                                  
                       </main>
                </PageLayout>
                
        )
}
