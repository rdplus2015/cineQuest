import Header from "./layout/headerLayout"
import Footer from "./layout/footerLayout"
import Hero from "./layout/hero"

export default function PageLayout({children}) {
        
        
        return (
               <div className="bg-mainBlack text-gray-300 min-h-screen flex flex-col">
                <Header/>
                <Hero/>
                        {children} 
                <Footer/>
               </div>
        )
}

