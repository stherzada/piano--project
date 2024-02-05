import { useEffect, useState } from "react";
import { InstrumentContextProvider } from "../../state/Instrument";
import { InstrumentSelector } from "../InstrumentSelector";
import { KeyboardWithInstrument, infoMusics } from "../Keyboard";
import "./style.css";

export const Playground = () => {
    const [unlockedMusic, setUnlockedMusic] = useState<infoMusics>();

    useEffect(() => { }, [unlockedMusic]);

    return (
        <div className="container">
            <InstrumentContextProvider>
                {unlockedMusic && (
                    <>
                        <div className="unlocked">
                            <div className="unlocked-music">
                                <span className="close"> <button onClick={() => setUnlockedMusic(undefined)}> <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/x.png" alt="x"/> </button></span>
                                <div className="music">
                                <h1>{unlockedMusic.music}</h1>
                                <p>{unlockedMusic.author}</p>
                                </div>
                                <span className="describle">
                                    <p>{unlockedMusic.describle}</p>
                                </span>
                                <a href={unlockedMusic.url} className="secret" target="blank">
                                    Clique aqui para ouvir a música ✨
                                </a>
                            </div>
                        </div>
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
