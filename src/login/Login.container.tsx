import React, { useState } from "react";
import LoginUI from "./Login.presenter";
import axios from "axios";

const login = ()=>{
    const [nickname, setNickname] = useState<string>('')
    const [result, setResult] = useState<string | null>(null)

    const checkNickname = async ()=>{
        console.log(nickname)
        try{
            const res = await axios.post<{
                success: boolean
                duplicate: boolean
            }>('http://localhost:3002/api/nickname-check', {nickname})

            if(res.data.duplicate){
                setResult("이미 사용 중인 닉네임입니다.")
                console.log('중복입니다.')
            } else{
                setResult('사용 가능한 닉네임입니다.')
                console.log('중복 아닙니다.')
            }
        } catch (err){
            console.error(err)
            setResult('오류가 발생했습니다.')
        }
    }

    return(
        <LoginUI nickname = {nickname} checkNickname = {checkNickname} setNickname = {setNickname}/>
    )
}

export default login