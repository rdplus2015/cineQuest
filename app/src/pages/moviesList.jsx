import PageLayout from "../components/pageLayout"
import SearchBar from "../components/form/searchBar"
export default function MoviesList() {
        return(
                
                <PageLayout>
                       <main className="flex-1">
                        <div className="flex flex-col w-auto mx-[clamp(1rem,10vw,9rem)] my-16">
                                <SearchBar placeholder="Enter the film name" />
                        </div>
                       </main>
                </PageLayout>
                
        )
}
