import GardenImg from "../../../public/images/garden1.png"
import "./Garden.css";

export const Garden = () => {
return(
    <div className="gardenContainer">
<img src={GardenImg} alt="OurGarden" />
<h1 className="strollTxt">Take a stroll in our</h1>
<h2 className="gardenTxt">Garden</h2>
    </div>

)}