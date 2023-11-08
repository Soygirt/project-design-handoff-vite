import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import PracticeArea1 from "/src/images/practicearea1.png"
import PracticeArea2 from "../../images/practicearea2.png"
import PracticeArea3 from "../../images/practicearea3.png"
import Practice from "../../images/practice.png"
/*import Facilities1 from "../../../public/images/Facilities1.png";
import Facilities2 from "../../../public/images/Facilities2.png";
import Facilities3 from "../../../public/images/Facilities3.png";*/

import "./Carousel.css"


export const CarouselImg = () => {
return (
    <div>
<Carousel>
    <Carousel.Item>
        <img src={Practice} alt="Practice" />
            </Carousel.Item>
    <Carousel.Item>
        <img src={PracticeArea1} alt="Practice area" />
            </Carousel.Item>
    <Carousel.Item>
        <img src={PracticeArea2} alt="Practice area" />
            </Carousel.Item>
    <Carousel.Item>
        <img src={PracticeArea3} alt="Practice area" />
            </Carousel.Item>


</Carousel>


</div>
)
}