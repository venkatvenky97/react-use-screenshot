import SideMenu from "../SideMenu/SideMenu"
import { useNavigate } from "react-router-dom";



const LineChart = () => {
  const navigate = useNavigate()
  return (
      <section className="LineChart">
        <button onClick={() =>navigate()}>
        <SideMenu />
        </button>
       
       </section>
       
   
       
  
  )
}

export default LineChart;