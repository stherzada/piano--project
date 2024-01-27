import { useEffect, useState } from "react";
import { InstrumentContextProvider } from "../../state/Instrument";
import { InstrumentSelector } from "../InstrumentSelector";
import { KeyboardWithInstrument } from "../Keyboard";
import "./style.css";

export const Playground = () => {
    const [unlockedMusic, setUnlockedMusic] = useState("");

    useEffect(() => {}, [unlockedMusic]);

    return (
        <div className="container">
            <InstrumentContextProvider>
                {unlockedMusic && (
                    <a href={unlockedMusic} className="secret">
                        Você desbloqueou uma música, clique aqui para ouvi-la
                    </a>
                )}
                <div className="playground">
                    <KeyboardWithInstrument setMessage={setUnlockedMusic} />
                    <InstrumentSelector />
                </div>
            </InstrumentContextProvider>
        </div>
    );
};
