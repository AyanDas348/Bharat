import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { close, logo, menu } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-5 top-0 mb-[30px] relative z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        } z-10`}
    >
      <div className='w-full flex justify-start items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2 justify-self-start w-1/2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
        </Link>

        {/* desktop menu */}
        <ul className='list-none hidden lg:flex flex-row gap-10 justify-self-end'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title
                ? 'text-white bg-slate-600 transition duration-300 delay-75'
                : 'text-secondary hover:text-white hover:bg-slate-400 transition duration-300 delay-75'
                } px-14 py-2 rounded-lg text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link
                to={`/${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`${active === nav.title ? 'text-white' : ''}`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>


        {/* mobile menu */}
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${toggle ? 'menu-slide-in' : 'menu-slide-out'
              } p-6 border-2 bg-slate-50 absolute top-20 mx-4 my-2 min-w-[140px] z-10 rounded-xl sm:overflow-hidden`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? 'text-black' : 'text-secondary'
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <Link to={`/${nav.id}`} onClick={() => setActive(nav.title)}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
