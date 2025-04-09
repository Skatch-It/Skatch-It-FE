import React, { useState } from "react";
import LoginUI from "../login/Login.container";

const homeUI=()=>{
    const [nickName, setNickName] = useState("");
    
    return(
        <div className="bg-[#5868E0] w-screen h-screen flex flex-col justify-center items-center">
            <p className="stroke text-3xl font-bold m-10 text-[#7458E0] text-7xl font-[CarterOne] cursor-pointer">Skatch-It</p>
            <LoginUI/>
        </div>
    )
}

export default homeUI