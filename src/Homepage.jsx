import { useParams } from "react-router-dom"
import HomeContent from "./pages/HomeContent";
import Modules from "./pages/Modules";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

const HomePage = () => {
    const { type } = useParams();
    return (
        <>
            <div className="my-5 w-full flex">
                {
                    type === null ? <HomeContent /> :
                    type === 'module' ? <Modules />:
                    type === 'about' ? <About /> :
                    type === 'courses' ? <Courses />:
                    type === 'contact' ? <Contact />:
                     "Error"
                }
            </div>
        </>
    )
}

export default HomePage
