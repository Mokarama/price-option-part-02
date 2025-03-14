import axios from "axios";
import { useEffect, useState } from "react";

const Laptop = () => {
    const [laptop, setLaptop] =useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data =>setLaptop("laptop",data.data))

    },[])


    return (
        <div>
            <h2 className="text-3xl font-bold text-sky-600">Laptops:{laptop.length}</h2>
        </div>
    );
};

export default Laptop;