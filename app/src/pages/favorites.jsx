import PageLayout from "../components/layout/pageLayout";
import MovieCard from "../components/movieCard";
import { Link } from "react-router-dom";

export default function Favorites() {
        return (
                
                <PageLayout>
                        <div className=" flex flex-wrap gap-6 justify-center my-20 px-10">
                                <Link to="/movieDetail">
                                        <MovieCard title="Mr robot " year= "2016" imgUrl="/img/mrRobot.jpeg" /> 
                                </Link>
                                <Link to="/movieDetail">
                                        <MovieCard title="Mr robot " year= "2016" imgUrl="/img/mrRobot.jpeg" /> 
                                </Link>
                                <Link to="/movieDetail">
                                        <MovieCard title="Mr robot " year= "2016" imgUrl="/img/mrRobot.jpeg" /> 
                                </Link>
                        </div>
                </PageLayout>
        )
}

