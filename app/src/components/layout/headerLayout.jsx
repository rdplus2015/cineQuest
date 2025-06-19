import SearchBar from "../form/searchBar"

export default function Header() {
        return (
                <div className="d-grid">
                      <h1> CineQuest </h1> 
                      <SearchBar placeholder="Enter the film name" />
                      <a href="/favorites"><img src="" alt="favoriteImg" /></a>
                </div>
        )
}