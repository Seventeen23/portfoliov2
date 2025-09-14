import React from "react";
import myImg from "../assets/me-colored.png";

export default function Terminal() {
    return(
        <div className="flex z-10 bg-gray-600 w-screen h-screen justify-center items-top md:items-center">
            <div className="rounded-lg border border-white bg-black/50 w-[70vw] h-100 p-5">
                <div className="flex items-center gap-2 mb-4 mt-2 ">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm sm:text-md md:text-lg text-green-500 mb-4">
                    matt_kyutie@user:~$  neofetch
                </p>
                <div className="flex flex-col sm:flex-row">
                    <div className="w-[30%] ml-8">
                        <img src={myImg} alt="Image" className="w-70 h-auto"/>
                    </div>
                    <div className="w-[50%] ml-8">
                        <p>
                            <span className="text-2xl text-red-400">User </span>
                            <span className="text-3xl text-red-400">› </span>
                            <span className="text-2xl text-white">Matthew_Feri_Tanutan</span>
                        </p>
                        <p>
                            <span className="text-2xl text-green-400">Role </span>
                            <span className="text-3xl text-green-400">› </span>
                            <span className="text-2xl text-white">Backend_Dev_&_Data_Scientist</span>
                        </p>
                        <p>
                            <span className="text-2xl text-blue-400">FanFact </span>
                            <span className="text-3xl text-blue-400">› </span>
                            <span className="text-2xl text-white">Iro ni Desiree </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}