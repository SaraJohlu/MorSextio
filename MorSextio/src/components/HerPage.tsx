import { Stars } from "./Starsky";
import one from "./../assets/1.png";
import two from "./../assets/2.png";
import three from "./../assets/3.png";
import four from "./../assets/4.png";
import five from "./../assets/5.png";

export default function HerPage() {
  return (
    <main className="herPage">
      <Stars />

      <div className="scroller">
        <ul className="PictureBox">
          <li className="picBoxList">
            <img src={five} alt="Borås Logga" className="picInBox" />
          </li>
          <li className="picBox">
            <img src={one} alt="Hotell" className="picInBox" />
          </li>
          <li className="picBox">
            <img src={two} alt="Nappy Time" className="picInBox" />
          </li>
          <li className="picBox">
            <img src={three} alt="FOOD" className="picInBox" />
          </li>
          <li className="picBox">
            <img src={four} alt="Hemsökta museet" className="picInBox" />
          </li>

          <li className="picBox">
            <img src={five} alt="Borås Logga" className="picInBox" />
          </li>
          <li className="picBox">
            <img src={one} alt="Hotell" className="picInBox" />
          </li>
          <li className="picBox">
            <img src={two} alt="Nappy Time" className="picInBox" />
          </li>
          <li className="picBox">
            <img src={three} alt="FOOD" className="picInBox" />
          </li>
          <li className="picBox">
            <img src={four} alt="Hemsökta museet" className="picInBox" />
          </li>
        </ul>
      </div>
    </main>
  );
}
