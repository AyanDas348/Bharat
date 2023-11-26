import { useParams } from "react-router-dom"
import HomeContent from "./pages/HomeContent";
import Modules from "./pages/Modules";

const HomePage = () => {
    const { type } = useParams();
    return (
        <>
            <div className="my-5 w-full flex">
                {
                    type === null ? <HomeContent /> :
                    type === 'module' ? <Modules />:
                     "Error"
                }
            </div>
        </>
    )
}

export default HomePage
