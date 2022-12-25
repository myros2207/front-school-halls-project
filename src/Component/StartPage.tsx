import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const StartPage = () => {
    const [youIp, setYouIp] = useState("")
    const navigate = useNavigate()
    const GetIp = async () => {
        try {
            const ipUser = await axios.get("http://api.ipify.org/?format=json")
            setYouIp(ipUser.data.ip)
            console.log(ipUser.data)
        }
        catch{

        }
        // ip mk
        if (youIp === "188.147.104.128"){
            console.log("ypu admin")
            navigate("/book")
        }
        else {
            navigate("/home")
        }
    }

    useEffect(() => {
        GetIp()
    }, []);
    return (
        <div>

        </div>
    );
};

export default StartPage;
