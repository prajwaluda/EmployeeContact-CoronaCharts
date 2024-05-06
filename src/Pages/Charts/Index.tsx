import Navbar from "../../Components/Navbar";
import WorldMap from "../../Components/Map";
import LineChart from "../../Components/LineGrapgh";
const Chart = () => {

  return(  
    <div className="w-screen-full top-0 sm:ml-72 items-center justify-center sm:justify-start">
      <Navbar/>
      {/*Line Chart*/}
      <LineChart/>
      {/*World Map*/}
      <WorldMap/>
    </div>
  )
}
export default Chart;