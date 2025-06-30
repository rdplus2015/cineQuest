import PageLayout from "../components/layout/pageLayout"
import SearchBar from "../components/searchBar"
import LinkButton from "../components/LinkButton"
import MovieCard from "../components/movieCard"
import { Link } from "react-router-dom"


export default function MoviesList() {
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
                                        <SearchBar placeholder="Enter the film name" />
                                </div>
                                <div className="w-full items-center place-items-center flex justify-around flex-wrap grap-3 my-20 px-10">
                                        <Link to="/movieDetail"> <MovieCard title="Mr robot " year= "2016" imgUrl="/img/mrRobot.jpeg" /> </Link>
                                        <MovieCard title="Mr robot " year= "2016" imgUrl="/img/joker.jpeg" /> 
                                        <MovieCard title="Mr robot " year= "2016" imgUrl="/img/mrRobot.jpeg" /> 
                                        <MovieCard title="Mr robot " year= "2016" imgUrl="/img/joker.jpeg" /> 
                                        <MovieCard title="Mr robot " year= "2016" imgUrl="/img/tango.avif" /> 
                                        <MovieCard title="Mr robot " year= "2016" imgUrl="/img/mrRobot.jpeg" /> 
                                        <MovieCard title="Mr robot " year= "2016" imgUrl="/img/tango.avif" /> 
                                        <MovieCard title="Mr robot " year= "2016" imgUrl="/img/joker.jpeg" /> 
                                </div>
                       </main>
                </PageLayout>
                
        )
}
