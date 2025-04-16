import React from "react";

const generationUI = () =>{
    return(
        <div className="bg-[#5868E0] w-screen h-screen flex flex-col justify-center items-center">
            <p className="pl-20 self-start text-left stroke text-3xl font-bold m-10 text-[#7458E0] text-4xl font-[CarterOne] cursor-pointer">Skatch-It</p>
            <div className="rounded bg-[#35419F] w-7xl h-full mb-20 space-x-5 px-10 py-10 flex">
                <div className="rounded bg-[#FFFFFF] w-60 h-full">

                </div>
                <div className="rounded bg-[#FFFFFF] w-full h-full">
                    
                </div>
            </div>
        </div>
    )
}

export default generationUI