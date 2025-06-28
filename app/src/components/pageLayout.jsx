import Header from "./layout/headerLayout"
import Footer from "./layout/footerLayout"

export default function PageLayout({children}) {
        
        
        return (
               <div className="bg-mainBlack text-gray-300">
                <Header/>
                        {children} 
                <Footer/>
               </div>
        )
}

