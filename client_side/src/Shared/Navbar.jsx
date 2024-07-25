import React, { useEffect, useState } from "react";
import darklogo from "../assets/darklogo.png";
import whitelogo from "../assets/whitelogo.png";
import { IoMenu } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { VscHistory } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";
import {
  getEmailFromLocalStroage,
  removeEmailFromLocalStroage,
} from "../Utils/localStroage";
import { Link, useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdOutlineManageAccounts } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const { data = {}, refetch } = useQuery({
    queryKey: ["info", getEmailFromLocalStroage()],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5000/info/${getEmailFromLocalStroage()}`
      );
      return response.data;
    },
  });
  useEffect(() => {
    setEmail(getEmailFromLocalStroage());
  }, [data]);
  console.log(data);
  const handleLogOut = async () => {
    removeEmailFromLocalStroage();
    await axios
      .post(
        "http://localhost:5000/logout",
        { email: getEmailFromLocalStroage() },
        { withCredentials: true }
      )
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header>
      <nav className="bg-slate-200 px-4 py-2 w-full flex justify-between items-center">
        <div className="w-[150px]">
          <img src={darklogo} className="" />
        </div>
        <div className="">
          <div className="drawer z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}

              <label htmlFor="my-drawer" className="drawer-button">
                <IoMenu className="text-4xl" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <div className="space-y-3">
                  {
                    email && <> <div className="p-6 rounded-full border flex items-center gap-x-2">
                    <CiUser className="text-3xl" />
                    <p className="text-base">{data?.name}</p>
                  </div> 
                  <Link
                      to="/home"
                      className="p-6 rounded-full border flex items-center gap-x-2"
                    >
                      <GoHome className="text-3xl" />
                      <p className="text-base">Home</p>
                    </Link>
                    <Link
                      to="/paymenthistory"
                      className="p-6 rounded-full border flex items-center gap-x-2"
                    >
                      <VscHistory className="text-3xl" />
                      <p className="text-base">Payments History</p>
                    </Link>
                    {data?.role === "Admin" && (
                    <Link
                      to="/management"
                      className="p-6 rounded-full border flex items-center gap-x-2"
                    >
                      <MdOutlineManageAccounts className="text-3xl" />
                      <p className="text-base">Manage User & Agent</p>
                    </Link>
                  )}
                  <div
                      onClick={handleLogOut}
                      className="p-6 rounded-full border flex items-center gap-x-2"
                    >
                      <CiLogout className="text-3xl" />
                      <p className="text-base">Log Out</p>
                    </div>
                  </>
                  }
                  {!email && (
                    <>
                      <Link to='/register' className="p-6 rounded-full border flex items-center gap-x-2">
                        <CiLogin className="text-3xl" />
                        <p className="text-base">Register</p>
                      </Link>
                      <Link to='/' className="p-6 rounded-full border flex items-center gap-x-2">
                        <CiLogin className="text-3xl" />
                        <p className="text-base">Log In</p>
                      </Link>{" "}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
