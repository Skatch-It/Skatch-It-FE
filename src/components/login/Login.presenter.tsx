import React from "react";
import { LoginProps } from "./Login.types"

const loginUI: React.FC<LoginProps>=({ loginfrag, checkNickname, setNickname, showWarning, setShowWarning })=>{

    return(
        <div className="bg-[#35419F] w-6xl h-full mb-20 mt-10 flex flex-col justify-center items-center" >
            <p className="text-white text-4xl mb-5 font-[NeoDunggeunmo]">닉네임을 만들어주세요!</p>
            <input type="text" className="border border-white text-3xl border-3 rounded-lg w-95 text-white" 
            onKeyDown={e=>{
                if(e.key === 'Enter'){
                    checkNickname();
                    if(!loginfrag && setShowWarning){
                        setShowWarning(true);
                    }
                }
            }}
            onChange={e=>{
                setNickname(e.target.value);
            }}></input>

            {showWarning && (
                <p className="text-red-400 text-xl mt-4 font-[NeoDuggeunmo]">
                    이미 사용중인 닉네임입니다.
                </p>
            )}
        </div>
    )
}

export default loginUI