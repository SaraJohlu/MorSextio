import { Stars } from "./Starsky";
import "./../App.css";
import one from "./../assets/1.png";
import two from "./../assets/2.png";
import three from "./../assets/3.png";
import four from "./../assets/4.png";
import five from "./../assets/5.png";
import Kuvert from "./Paket";

export default function HerPage() {
  return (
    <main className="herPage">
      <Stars />

      <div className="scroller">
        <div className="scrollerBox">
          <img src={five} alt="Borås Logga" className="picInBox" />
          <img src={one} alt="Hotell" className="picInBox" />
          <img src={two} alt="Nappy Time" className="picInBox" />
          <img src={three} alt="FOOD" className="picInBox" />
          <img src={four} alt="Hemsökta museet" className="picInBox" />
          <img src={five} alt="Borås Logga" className="picInBox" />
          <img src={one} alt="Hotell" className="picInBox" />
          <img src={two} alt="Nappy Time" className="picInBox" />
          <img src={three} alt="FOOD" className="picInBox" />
          <img src={four} alt="Hemsökta museet" className="picInBox" />
          <img src={five} alt="Borås Logga" className="picInBox" />
          <img src={one} alt="Hotell" className="picInBox" />
          <img src={two} alt="Nappy Time" className="picInBox" />
          <img src={three} alt="FOOD" className="picInBox" />
          <img src={four} alt="Hemsökta museet" className="picInBox" />
        </div>
      </div>

      <section className="contentBox">
        <h1 className="herPageh1">Grattis vår älskade underbara Helena</h1>

        <Kuvert />
      </section>
    </main>
  );
}
