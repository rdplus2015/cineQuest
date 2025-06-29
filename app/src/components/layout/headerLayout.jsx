import SearchBar from "../form/searchBar"
import LinkButton from "../form/LinkButton"

export default function Header() {
        return (
                <header className="my-4">
                        <div className=" flex justify-around py-2 align-items-center">
                                <div className="flex items-center">
                                        <a href="http:/"> 
                                        <h1 className=" text-[clamp(1.5rem,1.7vw,4rem)] font-bold text-white "> 
                                        CineQuest 
                                        </h1> 
                                        </a>
                                </div>
                                <LinkButton to={"/favorites"} className="bg-secondaryBlack text-gray-300 hover:bg-red-500"> Favorites </LinkButton>
                        </div>                  
                </header>
        )
}

