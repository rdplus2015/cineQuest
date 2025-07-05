export default function Button({children, className="", disabled, onClick}) {

        return (
                <button
                
                        className={
                                `
                                        mx-2 px-10 py-0
                                        rounded 
                                        bg-secondaryBlack text-white 
                                        disabled:opacity-40
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

