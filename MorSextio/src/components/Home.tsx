import ChampagneNglas from "./../assets/champange popping.png"
import { Stars } from "./Starsky";
import { Link } from "react-router-dom";
export default function Home() {

    return(
        <main className="homePage">
            <Stars />
            <h1>Helena</h1>
            <h2>60 ÅR</h2>
            <Link to={"/her-page"}><button className="happyBButton">Klicka på mig</button></Link>

            <img src={ChampagneNglas} alt="Bild på en champange flaska" className="picture" />
        </main>
    ) 
}
