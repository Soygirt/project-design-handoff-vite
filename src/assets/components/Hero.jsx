import Hero from "../../../public/images/Hero.png"
import "./Hero.css"

export const HeroImg = () => {
return (
    <div className="container">
<img src={Hero} alt="Hero" />
<div className="h1"><h1>Kuyod-o</h1></div>
<div className="h2"><h2>sthlm</h2></div>
<div className="text"><p>Uniting the bow, body and spirit.</p></div>

<div className="button"><button>Log in</button></div>
</div>
)};