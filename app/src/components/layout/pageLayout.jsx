import Header from "./headerLayout"
import Footer from "./footerLayout"


export default function PageLayout({children}) {
        
        
        return (
               <div className="text-mainBlack bg-gray-200 dark:bg-mainBlack dark:text-gray-300 min-h-screen flex flex-col transition-colors duration-500 ease-in-out">
                <Header/>
                        {children} 
                <Footer/>
               </div>
        )
}

