import SearchBar from "../form/searchBar"
import LinkButton from "../form/LinkButton"

export default function Header() {
        return (
    <header className="flex flex-col p-6 gap-4">
                        <div className=" flex justify-between py-2">
                                <a href="http:/"> 
                                        <h1 className=" text-[clamp(1.5rem,2vw,4rem)] font-bold text-white "> 
                                        CineQuest 
                                        </h1> 
                                </a>
                                <LinkButton to={"/favorites"} className="bg-secondaryBlack text-gray-300 hover:bg-red-500"> Favorites </LinkButton>
                        </div>

                        <SearchBar placeholder="Enter the film name" />
                       
                </header>
        )
}

