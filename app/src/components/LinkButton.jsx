import {Link} from "react-router-dom";

export default function LinkButton({to, children, className=""}) {
        
        if (!to) return null;

        return (
                <Link
                
                 to={to}
                        className={
                                `
                                inline-block
                                px-[clamp(3rem,1vw,5rem)]
                                py-[clamp(0.7rem,0.1vw,1rem)]
                                text-[clamp(1rem,0.2vw,1.25rem)]
                                rounded-lg 
                                focus:ring-2 
                                focus:ring-red-300 
                                transition-all duration-400 ease-in-out
                                hover:scale-105
                                ${className}
                          `
                        }
                        
                        
                >
                       {children}
                </Link>
        )
}