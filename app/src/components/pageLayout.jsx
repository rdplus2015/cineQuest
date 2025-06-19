import Header from "./layout/headerLayout"
import Footer from "./layout/footerLayout"

export default function PageLayout({children}) {
        
        
        return (
               <div className="bg-gray-800">
                <Header/>
                        {children} 
                <Footer/>
               </div>
        )
}

