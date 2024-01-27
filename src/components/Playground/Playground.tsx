import { useEffect, useState } from "react";
import { InstrumentContextProvider } from "../../state/Instrument";
import { InstrumentSelector } from "../InstrumentSelector";
import { KeyboardWithInstrument, infoMusics } from "../Keyboard";
import "./style.css";

export const Playground = () => {
    const [unlockedMusic, setUnlockedMusic] = useState<infoMusics>();

    useEffect(() => {}, [unlockedMusic]);

    return (
        <div className="container">
            <InstrumentContextProvider>
                {unlockedMusic && (
                 <>   
                 <button onClick={() => setUnlockedMusic(undefined)}> X </button>
                 <p>{unlockedMusic.author}</p>
                 <a href={unlockedMusic.url} className="secret">
                 Você desbloqueou uma música, clique aqui para ouvi-la
             </a>
             </>
                 
                )}
                <div className="playground">
                    <KeyboardWithInstrument setMessage={setUnlockedMusic} />
                    <InstrumentSelector />
                </div>
            </InstrumentContextProvider>
        </div>
    );
};
