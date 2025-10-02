import "./App.css";
import { Stars } from "./components/Starsky";
import ChampagneNglas from "./assets/champange popping.png"

function App() {

  return (
    <>
      <main>
        <Stars />
        <h1>Helena</h1>
        <h2>60 ÅR</h2>
        <button className="happyBButton">Klicka på mig</button>

        <img src={ChampagneNglas} alt="Bild på en champange flaska" className="picture" />
      </main>
    </>
  );
}

export default App;
