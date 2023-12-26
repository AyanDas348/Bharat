const Hero = () => {
    return (
        <div className="mb-20 h-screen pl-20 items-center pt-40">
            <div className="w-[600px] text-white text-[64px] font-bold">
                Helps for your ideal body fitness
            </div>
            <div className="w-[530px] text-white text-opacity-50 text-lg font-medium mb-20">
                Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.
            </div>
            {/* <div className="w-[374px] h-[46px] justify-start items-start gap-8 inline-flex">
                <div className="p-6 rounded-[10px] justify-center items-center gap-4 flex cursor-pointer text-white font-bold text-2xl" id="background">
                    Start Training
                </div>
            </div> */}
            <button className='glowing-btn'><span className='glowing-txt'>Sta<span className='faulty-letter'>rt </span>Training</span></button>
        </div>
    )
}

export default Hero