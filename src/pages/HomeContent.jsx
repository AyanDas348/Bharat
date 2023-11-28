import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className="items-center justify-center pl-8">
      <div className="font-bold effect-block1 h-36 lg:h-52 text-4xl">
        <span>Random Call to Action</span>
        <div></div>
        <span>CTA follow-up</span>
      </div>
      <div className="font-medium effect-block2 h-32">
        <span>small description</span>
      </div>
      <div className="effect-block3 h-32">
        <Link
          // to="/module"
          className="button"
        >
          <span>Get Started</span>
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
