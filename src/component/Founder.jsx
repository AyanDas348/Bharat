import { founder } from "../assets";

const Founder = () => {
    return (
        <div className="founders-container relative ml-10">
            <h2 className="hollow-text opacity-50">Meet the Founder</h2>
            <h2 className="hollow-text neon-white absolute bg-transparent left-10 top-14">Meet the Founder</h2>
            <div className="justify-end flex mt-10">
            <img src={founder} alt="founder" />
            </div>
        </div>
    );
};

export default Founder;