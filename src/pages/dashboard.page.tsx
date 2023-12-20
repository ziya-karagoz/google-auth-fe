import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const DashboardPage = () => {
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("user") || "{}");

    return (
        <section
            style={{
                fontFamily: "Montserrat",
            }}
            className=" bg-white flex font-medium items-center justify-center h-screen"
        >
            <section className="w-64 mx-auto bg-[#f4f5fa] rounded-2xl px-8 py-6 shadow-lg">
                <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{currentUser?.email}</span>

                </div>
                <div className="mt-6 w-fit mx-auto">
                    <img
                        src={currentUser?.image}
                        className="rounded-full w-28 "
                        alt="profile picture"
                    />
                </div>

                <div className="mt-8 ">
                    <h2 className="text-black font-bold text-2xl tracking-wide">{currentUser.name}</h2>
                </div>
                <p className="text-emerald-600 font-semibold mt-2.5">Active</p>
                {/* logout  */}
                <button
                    onClick={() => {
                        localStorage.removeItem("user");
                        navigate("/");
                    }}
                    type="button"
                    className="text-white w-full mt-12 bg-[#b81812] hover:bg-[#b81812]/90 focus:ring-4 focus:outline-none focus:ring-[#b81812]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#b81812]/55 mr-2 mb-2"
                >

                    <span className="text-center w-full">Logout</span>
                </button>

            </section>

        </section>
    );
};

export default DashboardPage;
