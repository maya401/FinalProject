import { NavLink, Outlet } from "react-router-dom";
import type { menuType } from "../typage/types";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { useState } from "react";

const menuItems: menuType[] = [
  { name: "HOME", link: "/" },
  { name: "LOCATION", link: "/louer" },
  { name: " VENTE", link: "/vente" },
  { name: "BLOG", link: "/blog" },
  
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div >

        <div className="flex border-b border-orange-100  justify-between container py-5  items-center">
         
          <a href="/" className="text-xl flex md:text-2xl font-bold">
             SEN <span className="text-orange-600 font-bold ">AUTO</span>
          </a>

          <div className="flex items-center ">
            <ul
              className={`md:flex gap-3  border-r pr-4 hidden `}
            >
              {menuItems.map((item, index) => (
                <li key={index} className="">
                  <NavLink
                    title={item.name}
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                   className={
                    ({isActive}) => isActive ? "text-orange-600 transition-all text-sm duration-200 pb-2  font-medium underline " : "text-black"}
                  >
                    {item.name}
                  </NavLink>

                 

                </li>
              ))}
            </ul>

            <div className="md:flex gap-2 border-r items-center px-4 hidden ">
              <FaPhoneVolume className="text-lg text-orange-600" />
              <div className="flex flex-col  ">
                <span className="text-xs ms-1 ">Appeler-nous au</span>
                <span className="font-bold  text-sm">+221 77 234 45 64</span>
              </div>
            </div>
            <a href="/connexion" className="flex items-center ">
              <button className="md:flex hidden items-center ml-3 gap-2 bg-orange-600 text-white px-4 py-2  text-sm rounded hover:scale-105 transition-all duration-300 cursor-pointer">
                <FaUser className="text-white text-lg" />
                <span>Se connecter</span>
              </button>

            </a>
          </div>
          <RiMenuUnfoldFill
            className="text-2xl md:hidden block hover:scale-110 transition-all duration-300 cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          />
        </div>
{/* menu mobile */}
        <ul
          className={`${isOpen ? "flex flex-col gap-3 py-4 px-8 bg-white" : "hidden"} md:hidden border-r-2`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="">
              <NavLink
                title={item.name}
                to={item.link}
                onClick={() => setIsOpen(false)}
                className={`${"hover:text-orange-600 hover:border-b-2 transition-all duration-200 pb-2 font-medium border-orange-700 text-sm"}  `}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <Outlet/>
      </div>
    </>
  );
}
