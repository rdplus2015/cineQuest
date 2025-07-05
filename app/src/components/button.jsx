export default function Button({children, className="", disabled, onClick}) {

        return (
                <button
                
                        className={
                                `
                                        mx-2 px-10 py-0
                                        rounded 
                                        disabled:opacity-40
                                        transition-all duration-400 ease-in-out
                                        hover:scale-105
                                        ${className}
                                `
                        }
                        type="button"
                        disabled = {disabled}
                        onClick={onClick}
                        
                >
                       {children}
                </button>
        )
}

