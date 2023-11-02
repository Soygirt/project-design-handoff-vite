import JapaneseArcher from "../../../public/images/JapaneseArcher.png"
import "./Description.css";

export const Description = () => {
return(
<div className="description">

    <h2 className="descriptionH2">Kyudo means “way of the bow”. </h2> 
    <p className="descriptionText">Originally in Japan the “art of the bow” was discipline of the samurai, the Japanese warrior class. 
However today a way of life encompassing physical, spirutal and moral dimensions with a focus on self-improvement, fulfillment or personal focus.</p>

<div className="japaneseArcher.png">
     <img src={JapaneseArcher} alt="JapaneseArcher" />
     </div>

</div>

);}