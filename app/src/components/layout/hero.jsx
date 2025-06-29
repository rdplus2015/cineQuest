import LinkButton from "../form/LinkButton"
export default function Hero({}) {
        return (
              <div className="relative bg-[url(/img/tango.avif)] bg-cover bg-center min-h-[300px] md:min-h-[500px]">
                        <div className="absolute inset-0 bg-mainBlack/80"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                                <h2 className=" text-[clamp(2rem,2.5vw,4rem)] font-bold text-center font-mono">
                                        Tonight’s Perfect Movie Awaits! 
                                </h2>
                                <p className=" text-red-500 text-[clamp(2rem,2.5vw,4rem)] font-bold text-center font-mono weight-900 ">
                                        Discover, Watch, Love!
                                </p>
                                <LinkButton to={"https://www.netflix.com/ca-fr/"} className="bg-secondaryBlack text-gray-300 hover:bg-red-500 font-bold"> Watch </LinkButton>
                        </div>
              </div>  
        )
}

