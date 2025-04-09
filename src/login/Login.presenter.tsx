import React from "react";

const loginUI=()=>{

    return(
        <div className="bg-[#5868E0] w-screen h-screen flex flex-col justify-center items-center">
            <p className="stroke text-3xl font-bold m-10 text-[#7458E0] text-7xl font-[CarterOne] cursor-pointer">Skatch-It</p>
            <div className="bg-[#35419F] w-6xl h-full mb-20 mt-10 flex flex-col justify-center items-center" >
                <p className="text-white text-4xl mb-5 font-[NeoDunggeunmo]">닉네임을 만들어주세요!</p>
                <input type="text" className="border border-white text-3xl border-3 rounded-lg w-95 text-white"></input>
            </div>
        </div>
    )
}

export default loginUI