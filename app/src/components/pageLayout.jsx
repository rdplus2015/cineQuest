import Header from "./layout/headerLayout"
import Footer from "./layout/footerLayout"


export default function PageLayout({children}) {
        
        
        return (
               <div className="bg-mainBlack text-gray-300 min-h-screen flex flex-col">
                <Header/>
                        {children} 
                <Footer/>
               </div>
        )
}

