import { useState } from "react";
import "./kuvert.css";

export default function Kuvert() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <p className="herpageP">Öppna mig!</p>
      <section onClick={() => setOpen(!open)} className="kuvert-box">
        <div className={`kuvert ${open ? "open" : ""}`}>
          <div className="kuvert-ficka">
            <div className="kuvert-flärp">
              <div className="brevet">
                <h1 className="bh1">Kära du &#10084;&#65039;!</h1>
                <p>
                  Det är svårt att komma på något att ge dig när man helst vill
                  ge dig allt det fina och goda i livet! Men vi hoppas att du
                  ska tycka detta kan vara ett litet roligt äventyr. Det är
                  ingen utlandsresa, tyvärr. MEN
                </p>
                <p>
                  {" "}
                  Tillsammans med din dotter, mig/jaget/skaparen av denna sida, ska du få åka på en weekend
                  trip till Borås. Ja undra vad vi ska göra i Borås? På senare
                  dagar har du ju gått och blivit litet fan av två män och
                  spöken. Därför har vi sett till att köpa ett presentkort som
                  kan användas som inträde för museet, vi kan också fixa så att
                  vi får en guidad tur med bröderna LAXTON själva. Ska vi vara
                  lite extra modiga så kan vi även köra vår egna lilla
                  spökutredning, eller vill vi verkligen köra på ett wild card,
                  varför inte åka till självaste Prästgården / Borgvattnet. Men
                  tillsammans kan vi lista ut exakt hur, när och vad såklart.{" "}
                </p>
                <p>
                  MEN det är inte slut där, utöver presentkortet har vi tänkt
                  att vi ska ta in på hotell, lyxigt och mysigt, kanske gå ut
                  och käka och bara ha det bra. Jag, din dotter, kör till och
                  från Borås, mellan hotell och Laxton Museet, Förhoppningsvis i
                  din bil, hehe! Det finns en Helena 60 år "kassa" som många av
                  oss varit med och bidragit till och denna kan vi alltså röra
                  oss med för din trivsel. Jag kommer att stå för mig själv.
                </p>
                <p>
                    Vi älskar dig! Kära du &#10084;&#65039;!
                </p>
                <strong>Önskar</strong>
                <p>Sara och Simon med familj, Jimmi och Jennifer med familj, Mor och Far, Linda med familj och Tommy</p>
                <p>Penga pungen kan du fråga om ifall du vill</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
