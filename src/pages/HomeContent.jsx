import Founder from "../component/Founder";
import Hero from "../component/Hero";
import Offer from "../component/Offer";
import Programs from "../component/Programs";

const HomeContent = () => {
  return (
    <div className="items-center h-full justify-center">
      <Hero />
      <Programs />
      <Founder />
      <Offer />
    </div>
  );
};

export default HomeContent;
