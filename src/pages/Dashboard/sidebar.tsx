import React from "react";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { FaCarRear, FaUserPen } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import { NavBar } from "../../components/navbar";

const barItems = [
  { name: "profil", icon: <FaUserPen />, link: "profil" },
  { name: "Vendre", icon: <FaCarRear />, link: "avendre" },
  { name: "Louer", icon: <FaCarRear />, link: "alouer" },
  
];

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="flex flex-col h-screen ">
       <NavBar/>
     <div className="flex flex-1 overflow-hidden">
      <nav className={`h-full p-3 bg-orange-50 flex flex-col duration-300 border-r border-orange-100 shadow-sm ${open ? "w-64" : "w-20"}`}>  
        <div className="flex justify-between items-center mb-8 px-2 py-4">
          <a href="/"  className={`${open ? "text-2xl" : "hidden"}`}>
            SEN<span className="text-orange-500">AUTO</span>
          </a>
          <RiMenuUnfold4Line
            className="text-orange-400 size-5 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className="flex-1">
          {barItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 p-2 cursor-pointer rounded-md hover:bg-orange-300 mt-2"
            >
              <NavLink
                to={item.link}
                className="flex items-center gap-4 p-2 cursor-pointer rounded-md hover:bg-orange-300 mt-2"
              >
                <div className="text-orange-400">{item.icon}</div>
                <span
                  className={`${!open && "hidden"} origin-left duration-200 text-orange-400 font-bold`}
                >
                  {item.name}
                </span>
              </NavLink>
            </div>
          ))}
        </div>

        <div className="flex gap-5 items-center px-3 py-2">
          <div>
            <FiLogOut className="text-orange-400 " />
          </div>
          <h2
            className={`${
              !open && "w-0 translate-x-24"
            }duration-500 overflow-hidden text-orange-400 font-bold text-lg`}
          >
            Deconnexion
          </h2>
        </div>
      </nav>

      <main className="">
            <Outlet />
       
      </main>
    </div>
    </div>
  );
}



