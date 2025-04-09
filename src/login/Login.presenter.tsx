import React from "react";
import Login from "./Login.container";

type loginProps = {
    nickname: string
    checkNickname: () => void
    setNickname: (nickname: string) => void
}

const loginUI: React.FC<loginProps>=({ nickname, checkNickname, setNickname })=>{

    return(
        <div className="bg-[#35419F] w-6xl h-full mb-20 mt-10 flex flex-col justify-center items-center" >
            <p className="text-white text-4xl mb-5 font-[NeoDunggeunmo]">닉네임을 만들어주세요!</p>
            <input type="text" className="border border-white text-3xl border-3 rounded-lg w-95 text-white" 
            onKeyDown={e=>{
                if(e.key === 'Enter'){
                    checkNickname()
                }
            }}
            onChange={e=>{
                setNickname(e.target.value)
            }}></input>
        </div>
    )
}

export default loginUI