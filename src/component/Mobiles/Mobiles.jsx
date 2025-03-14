import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const Mobiles = () => {
    const [mobiles, setMobiles] =useState([]);
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data =>setMobiles(data.data.data))



    },[])
    return (
        <div>
            <h2>Mobiles:{mobiles.length}</h2>
        </div>
    );
};

export default Mobiles;