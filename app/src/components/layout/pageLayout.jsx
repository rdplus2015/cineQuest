import Header from "./headerLayout"
import Footer from "./footerLayout"


export default function PageLayout({children}) {
        
        
        return (
               <div className="bg-mainBlack text-gray-300 min-h-screen flex flex-col">
                <Header/>
                        {children} 
                <Footer/>
               </div>
        )
}

