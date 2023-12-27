import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { close, logo, menu } from '../assets';

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
    <nav className={`w-full flex items-center top-0 mb-[30px] relative z-20 bg-transparent py-5`}>
      <div className='w-full flex justify-start items-center max-w-7xl mx-auto bg-transparent'>
        <Link
          to='/'
          className='flex items-center gap-2 justify-self-start w-1/2 bg-transparent'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain bg-transparent' />
        </Link>

        {/* desktop menu */}
        <ul className='list-none hidden lg:flex flex-row gap-10 justify-self-end bg-transparent'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title
                ? 'text-[#BCC6CC] transition duration-300 delay-75'
                : 'hover:text-[#BCC6CC] transition duration-300 delay-75'
                } px-14 py-2 rounded-lg text-[18px] font-medium cursor-pointer bg-transparent`}
              onClick={() => setActive(nav.title)}
            >
              <Link
                to={`/${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`${active === nav.title ? 'text-[#BCC6CC]' : 'text-[#BCC6CC]'} bg-transparent`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
          <li
            className="rounded-3xl bg-white px-14 py-2 text-lg w-48 bg-transparent"
          >
            Sign Up
          </li>
          <li
            className="rounded-3xl bg-white px-14 py-2 text-lg bg-transparent"
          >
            Login
          </li>
        </ul>

        {/* mobile menu */}
        <div className='lg:hidden flex flex-1 justify-end items-center bg-transparent'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain bg-transparent'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${toggle ? 'menu-slide-in' : 'menu-slide-out'
              } p-6 border-2 text-white absolute top-20 mx-4 my-2 min-w-[140px] z-10 rounded-xl sm:overflow-hidden bg-transparent`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4 bg-transparent'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? 'text-black' : 'text-secondary'
                    } bg-transparent`}
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
              <li
                key={'signup'}
                className={`font-poppins font-medium cursor-pointer text-[16px] bg-transparent`}
              >
                Sign Up
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] bg-transparent`}
              >
                Login
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
