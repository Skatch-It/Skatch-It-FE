import React, { useState } from "react";
import LoginUI from "./Login.presenter";
import { LoginProps } from "./Login.types";

const Login: React.FC<LoginProps>=({ loginfrag, checkNickname, setNickname })=>{
    const [showWarning, setShowWarning] = useState<boolean>(false);

    return(
        <LoginUI 
        loginfrag = {loginfrag} 
        checkNickname = {checkNickname} 
        setNickname = {setNickname} 
        showWarning = {showWarning} 
        setShowWarning = {setShowWarning}
        />
    )
}

export default Login