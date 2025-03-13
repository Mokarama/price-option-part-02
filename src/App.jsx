
import { LineChart } from 'recharts'
import './App.css'
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

  
     <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
     
      
    </>
  )
}

export default App
