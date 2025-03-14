import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis} from 'recharts';
import { Audio,Bars,Blocks,Vortex,RotatingTriangles } from 'react-loader-spinner';

const Phones = () => {
    const [phones, setPhones]=useState([]);
    const [loading, setLoading] =useState(true)

    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phoneWidthFakeData = phoneData.map(phone =>{
                const obj ={
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                    
                }
               console.log(phone.slug)
                return obj
            })
            console.log(phoneWidthFakeData)
            setPhones(phoneWidthFakeData);
            setLoading(false)
        })
    },[])
    return (
        <div>
    

             {/* render(
            <Whirl
            preset='rainbow'
            speedInSecond={2}
            width='100'
            height='100'
            />) */}


           {loading && <RotatingTriangles
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="rotating-triangles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />}


            render(<Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />)
   
        <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
            />


                render(<Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />)

            render(<Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
            />)

            <h4 className="text-3xl font-bold">Phones:{phones.length}</h4>

        <BarChart width={800} height={600} data={phones} stroke="blue">
        <Bar dataKey={"price"} fill="#8884d8"></Bar>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        </BarChart>
        </div>
    );
};

export default Phones;