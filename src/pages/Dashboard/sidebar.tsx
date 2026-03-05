import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {  Car, CarFront, LayoutDashboard, ListIndentDecrease, LogOut, UserRoundPen } from "lucide-react";

const barItems = [
  {
    name: "Tableau de bord",
    icon: <LayoutDashboard strokeWidth={1.5} />,
    link: "/dashboard",
    end: true,
  },
  { name: "profil", icon: <UserRoundPen strokeWidth={1.5} />, link: "/dashboard/profil" },
  { name: "Vendre", icon: <CarFront strokeWidth={1.5} />, link: "/dashboard/avendre" },
  { name: "Louer", icon: <Car strokeWidth={1.5} />, link: "/dashboard/alouer" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col h-screen ">
      <div className="bg-orange-50 border-b border-orange-100 shadow-sm px-6 py-4 flex justify-between w-full">
        <Link to="/" className="text-xl flex md:text-4xl font-bold">
          SEN<span className="text-orange-500">AUTO</span>
        </Link>
        <h2 className="text-orange-500 text-xl font-bold">Admin</h2>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <nav
          className={`h-full relative pt-5  bg-orange-50 flex flex-col duration-300 px-4 shadow-sm ${open ? "w-64 " : "w-20"}`}
        >
          <ListIndentDecrease strokeWidth={1.5} 
            className="text-white absolute top-1/2 -right-4 bg-orange-500 p-1 rounded-full size-8 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <div className="flex-1 space-y-2">
            {barItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                end={item.end}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium ${
                    isActive
                      ? "bg-orange-500 text-white shadow-lg "
                      : " hover:bg-gray-800 hover:text-white"
                  } ${!open ? "justify-center" : "justify-start"}`
                }
              >
                {item.icon}{" "}
                <span className={`${!open && "hidden"}`}>{item.name}</span>
              </NavLink>
            ))}
          </div>

          <Link
            to="/"
            className="flex gap-5 items-center px-3 py-2 cursor-pointer rounded-md hover:bg-orange-300"
          >
            <LogOut strokeWidth={1.5}  className={`${open? "size-8" : "size-30"} text-orange-500`}/>
            <h2
              className={`${
                !open && "w-0 translate-x-24"
              } duration-500 overflow-hidden text-orange-400 font-bold text-lg`}
            >
              Deconnexion
            </h2>
          </Link>
        </nav>

        <main className="w-full overflow-auto p-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
