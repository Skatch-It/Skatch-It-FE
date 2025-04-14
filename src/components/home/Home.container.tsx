import React, { useState } from "react";
import HomeUI from "./Home.presenter";
import axios from "axios";

const home=()=>{
    const [nickname, setNickname] = useState<string>('')
    const [loginfrag, setLoginfrag] = useState<boolean>(false);

    const checkNickname = async ()=>{
        console.log(nickname)
        try{
            const res = await axios.post<{
                success: boolean
                duplicate: boolean
            }>('http://localhost:3002/api/nickname-check', {nickname})

            if(res.data.duplicate){
                console.log('중복입니다.')
                setLoginfrag(false);
            } else{
                console.log('중복 아닙니다.')
                setLoginfrag(true);
            }
        } catch (err){
            console.error(err)
        }
    }
    
    return(
        <div>
            <HomeUI loginfrag = {loginfrag} checkNickname = {checkNickname} setNickname = {setNickname}/>
        </div>
    )
}

export default home