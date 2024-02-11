import { useEffect, useState } from "react";
import { InstrumentContextProvider } from "../../state/Instrument";
import { InstrumentSelector } from "../InstrumentSelector";
import { KeyboardWithInstrument, infoMusics } from "../Keyboard";
import "./style.scss";

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
                                <div className="wrapper">
                                    <a onClick={() => setUnlockedMusic(undefined)} className="close-button">
                                        <div className="in">
                                            <div className="close-button-block"></div>
                                            <div className="close-button-block"></div>
                                        </div>
                                        <div className="out">
                                            <div className="close-button-block"></div>
                                            <div className="close-button-block"></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="music">
                                    <h1>{unlockedMusic.music}</h1>
                                    <p>{unlockedMusic.author}</p>
                                </div>
                                <span className="describle">
                                    <p>{unlockedMusic.describle}</p>
                                </span>

                                <a href={unlockedMusic.url} target="_blank" className="secret">Clique aqui para ouvir a música ✨</a>

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
