import PageLayout from "../components/layout/pageLayout";

export default function MovieDetail() {
        return (
                <PageLayout>
                        <div>
                                <div className="my-20 mx-10 sm:mx-10 md:mx-20 lg:mx-40 rounded-xl overflow-hidden  bg-secondaryBlack shadow-lg shadow-black transition-transform duration-300 hover:scale-105 ">
                                        <img src="/img/tango.avif" alt="" className="w-full h-100 object-cover"/>
                                        <div className="p-8 text-white" >
                                                <h3 className="text-[clamp(1rem,3vw,2.5rem)] font-semibold ">
                                                        La casa de papel 
                                                </h3>

                                                <p className="text-[clamp(1rem,1.5vw,2.5rem)] text-gray-400 my-8 "> 
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                                        Quas dignissimos hic voluptate incidunt ipsa. Magnam distinctio dolorum nobis officia et 
                                                        commodi, sit totam modi minima doloribus temporibus rerum deserunt voluptatibus!
                                                </p>
                                                <div className="flex gap-4 flex-wrap">
                                                        <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack p-4 "> year </p>
                                                        <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack p-4 "> release_date </p>
                                                        <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack p-4 "> runtime </p>
                                                        <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack p-4 "> vote_average </p>
                                                        <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack p-4 "> popularity </p>
                                                        <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400 mt-1 bg-mainBlack p-4 "> genres </p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </PageLayout>
        )       
}