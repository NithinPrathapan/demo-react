import React from "react";
import LogoImage from "../../assets/logo.png";
import { Link } from "react-router-dom";
import cartLogo from "../../assets/cartlogo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white h-[60px] absolute right-0 left-0 top-0">
      <div>
        {/* left section */}

        <Link to={"/"}>
          <img width={100} src={LogoImage} alt="logo_image" />
        </Link>
      </div>
      <div>
        <form action="">
          <input type="text" name="search" />
        </form>
        {/* middle section */}
      </div>
      <div>
        {/* right section */}

        <ul className=" flex gap-4 items-center">
          <li>About</li>
          <li>Home</li>
          <li>Login</li>
          <Link to="/cart">
            <li className="relative ">
              <img width={25} src={cartLogo} alt="" />
              <span className="absolute -top-4 -right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
                5
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
