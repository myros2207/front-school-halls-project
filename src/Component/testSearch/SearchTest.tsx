import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';

const SearchTest = () => {
    const [youIp, setYouIp] = useState("")

    const GetIp = async () => {
        try {
            const ipUser = await axios.get("http://api.ipify.org/?format=json")
            setYouIp(ipUser.data.ip)
            console.log(ipUser.data)

        }
        catch{

        }
        console.log(youIp)
        if (youIp === "188.147.104.128"){
            console.log("ypu admin")
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

export default SearchTest;
