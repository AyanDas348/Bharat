import { modules } from "../constants";

const Modules = () => {
    return (
        <div className="pt-10 pl-4 pr-4 lg:pl-44 lg:pr-44"> {/* Added margins for large devices */}
            <h1 className="font-bold text-7xl leading-10 mb-7">Modules</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {modules.map((item, index) => (
                    <div key={index} className="w-full overflow-hidden">
                        <div className="w-full h-[300px] rounded-lg cursor-pointer text-black flex-col grid justify-start bg-white p-4">
                            {/* Module content */}
                            <div className="flex justify-start items-center gap-3">
                                <div className="text-3xl font-bold">{item.id}</div>
                                <hr className="border-2 h-1 w-full bg-green-300 border-green-300" />
                            </div>
                            <div className="text-sm">{item.title}</div>
                            <div className="text-xs justify-center items-center">{item.chapters} chapters</div>
                            <div className="text-xs justify-center items-center">{item.description}</div>
                            <div className="flex justify-start">
                                <div className="w-4/5 h-8 flex rounded-full bg-slate-50 border-2 text-sm items-center justify-start">
                                    <div className="w-4/5 text-sm">{item.options[0]}</div>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="green"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="green"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Modules;
