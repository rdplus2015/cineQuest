import LinkButton from "../LinkButton"

export default function Header() {
        return (
                <header className="py-4  border-b-1 border-gray-800">
                        <div className=" flex justify-around py-2 align-items-center">
                                <div className="flex items-center">
                                        <a href="http:/"> 
                                        <h1 className=" text-[clamp(1.5rem,1.7vw,4rem)] font-bold text-white "> 
                                        CineQuest 
                                        </h1> 
                                        </a>
                                </div>
                                <LinkButton to={"/favorites"} className="bg-secondaryBlack text-gray-300 hover:bg-red-500 font-bold"> Favorites </LinkButton>
                        </div>                  
                </header>
        )
}

