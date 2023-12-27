import Navbar from "./Navbar"

const Hero = () => {
    return (
        <div className="h-screen pl-20 items-center bg-hero-section bg-transparent bg-cover w-full">
        <Navbar />
            <div className="w-[600px] text-white text-[64px] mt-40 font-bold bg-transparent">
                Helps for your ideal body fitness
            </div>
            <div className="w-[530px] text-white text-opacity-50 text-lg font-medium mb-20 bg-transparent">
                Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.
            </div>
            {/* <div className="w-[374px] h-[46px] justify-start items-start gap-8 inline-flex">
                <div className="p-6 rounded-[10px] justify-center items-center gap-4 flex cursor-pointer text-white font-bold text-2xl" id="background">
                    Start Training
                </div>
            </div> */}
            <button className='glowing-btn bg-transparent'>
                <span className='glowing-txt bg-transparent'>
                    Sta
                    <span className='faulty-letter bg-transparent'>
                        rt &nbsp;
                    </span>Training
                </span>
            </button>
        </div>
    )
}

export default Hero