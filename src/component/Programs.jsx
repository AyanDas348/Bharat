import { zumba } from "../assets"
import { programs } from "../constants"
import { useState } from 'react'

const Programs = () => {
    const [card, setCard] = useState(1)
    return (
        <div className="flex bg-transparent h-[900px] bg-opacity-10 overflow-clip bg-no-repeat bg-cover items-center ml-10 gap-40 w-full services">
            {/* {programs.map((item) => (
                <div classNameName="bg-transparent" key={item.id}>
                    <p classNameName="heading text-white bg-transparent">
                        {item.title}
                    </p>
                    <p classNameName="text-white bg-transparent">
                        {item.description}
                    </p>
                </div>
            ))} */}
            <div className="founders-container relative items-center justify-start">
                <h2 className="hollow-text opacity-50">Programs</h2>
                <h2 className="hollow-text neon-red absolute bg-transparent left-10 top-14">Programs</h2>
            </div>

            <div className="neon-red cursor-pointer" onClick={() => setCard(card <= 0 ? programs.length - 1 : card - 1)}>
                &#8592;
            </div>

            <div className="program h-[75%] items-center justify-center">
                <div className="card bg-none mt-8">
                    <div className="face face1 bg-transparent">
                        <div className="content bg-transparent items-center justify-center">
                            <div className="neon-red bg-transparent relative">
                                <img src={zumba} alt="zumba" className="bg-transparent h-[300px]" />
                                <p className="bg-transparent card-title mx-10 relative bottom-2 mt-10">{programs[card].title}</p>
                                <p className="bg-transparent card-para mx-10 text-sm">{programs[card].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="neon-red mt-24 cursor-pointer" onClick={() => setCard(card >= programs.length - 1 ? 0 : card + 1)}>
                &#8594;
            </div>
        </div>
    )
}

export default Programs
