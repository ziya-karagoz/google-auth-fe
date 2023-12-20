import React from "react";
import { Navigate } from "react-router-dom";

const DashboardPage = () => {
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


            </section>
        </section>
    );
};

export default DashboardPage;
