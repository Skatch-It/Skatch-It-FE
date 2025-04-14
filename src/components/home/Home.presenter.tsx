import React, { useState } from "react";
import { LobbyContainer } from "../lobby";
import { LoginContainer, LoginProps } from "../login";

const homeUI: React.FC<LoginProps>=({ loginfrag, checkNickname, setNickname })=>{
    
    return(
        <div className="bg-[#5868E0] w-screen h-screen flex flex-col justify-center items-center">
            <p className="stroke text-3xl font-bold m-10 text-[#7458E0] text-7xl font-[CarterOne] cursor-pointer">Skatch-It</p>
            { loginfrag ? 
            <LobbyContainer/> : <LoginContainer 
            loginfrag = {loginfrag} 
            checkNickname = {checkNickname} 
            setNickname = {setNickname}
            /> }
        </div>
    )
}

export default homeUI