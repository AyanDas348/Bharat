import { PlayCircle } from "@mui/icons-material";
import { modules } from "../constants";

const Modules = () => {
    return (
        <div className="pt-20 items-center justify-center">
            {
                modules.map((item, index) => {
                    return (
                        <div key={index} className="pb-3 items-center justify-center ml-4">
                            <div className="w-full h-[300px] rounded-lg cursor-pointer text-black flex flex-col justify-start">
                                <div className="flex justify-start items-center gap-3">
                                    <div className="text-3xl font-bold">{item.id}</div>
                                    <hr className="border-2 h-1 w-full bg-green-300 border-green-300 mr-4"></hr>
                                </div>
                                <div className="px-4 text-sm">
                                    {item.title}
                                </div>
                                <div className="text-xs m-2 ml-4 justify-center items-center mr-4">
                                    {item.chapters} chapters
                                </div>
                                <div className="text-xs m-2 ml-4 justify-center items-center mr-4">
                                    {item.description}
                                </div>
                                <div className="flex justify-start ml-4 mr-10">
                                    <div className="w-4/5 h-8 flex rounded-full bg-slate-50 border-2 text-sm items-center justify-start pl-8">
                                        <div className="w-4/5 text-sm">
                                            {item.options[0]}
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Modules;
