import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header>
        <nav className="flex  justify-evenly bg-slate-400 border h-24">
          <div className="flex  items-center ">
            <Link to={"/home"}>
              <img
                src="https://seeklogo.com/images/M/meesho-logo-2E20AB77E8-seeklogo.com.png"
                alt="logo"
                className="h-10"
              />
            </Link>
          </div>
          {/* SEARCH BAR */}
          <div className=" flex items-center  gap-2">
            <input
              type="text"
              placeholder="search for products,categories,etc..."
              className=" border-gray-800 p-2 rounded-md bg-slate-300 w-80 h-8"
            />
            <button className="border-slate-950 border-solid rounded-md text-zinc-100 p-1">
              search
            </button>
          </div>
          {/* link block */}
          <div className="flex items-center justify-evenly space-x-20 font-bold">
            {/* login */}
            <Link to={"/login"}>
              <b>login</b>/
              <Link to={"/customer/register"}>
                <b>signup</b>
              </Link>
            </Link>
            {/* become a seller */}
            <Link to={"/"}>Become a seller</Link>
            {/* cart */}
            <Link to={"/"}>
              <b>Cart</b>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
