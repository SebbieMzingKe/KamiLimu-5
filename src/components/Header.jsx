import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function Header() {

  const MenuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Other Stories",
      link: "/",
    },
    {
      name: "Explore Story",
      link: "/",
    },
    {
      name: "Buy a Story",
      link: "/",
    },
    // {
    //   name: "Other Stories"
    // },
    // {
    //   name: "Explore Story"
    // },
    // {
    //   name: "Buy Story"
    // }
  ];

  return (
    <div className="flex p-4 w-full bg-slate-400">
      <img src={logo} alt="" className="w-10 h-10"/>
      <div className=" flex gap-6 w-full items-center justify-center">
      {
        MenuList.map((item,index)=><div>
            <a href={item.link} className="font-bold">{item.name}</a>
        </div>)
      }
      </div>
      <img src="icon.png" alt="" className="w-10 h-10"/>

    </div>

  );
}

export default Header;
