

import './App.css'
import Laptop from './component/Laptop/Laptop'
import LineChart from './component/LineChart/LineChart'
import Mobiles from './component/Mobiles/Mobiles'
import Phones from './component/Phones/Phones'
// import Navbar from './component/Navbar/Navbar'
//  import DaisyNav from './component/DaisyNav/DaisyNav'
import PriceOptions from './component/priceOptions/PriceOptions'

function App() {
  return (
    <>
      {/* <Navbar></Navbar>
     <DaisyNav></DaisyNav> */}
     <PriceOptions></PriceOptions>
     <LineChart></LineChart>
     <Phones></Phones>
    <Mobiles></Mobiles>
    <Laptop></Laptop>

  
     <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
     
      
    </>
  )
}

export default App
