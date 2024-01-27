import React, { FunctionComponent, useEffect } from "react";
import { useInstrument } from "../../state/Instrument";
import { useSoundfont } from "../../adapters/Soundfont";
import { useAudioContext } from "../AudioContextProvider";
import { Keyboard, infoMusics } from "../Keyboard";
import "./style.css";

interface KeyboardWithInstrumentProps {
    setMessage: React.Dispatch<React.SetStateAction<infoMusics | undefined>>;
}

export const KeyboardWithInstrument: FunctionComponent<
    KeyboardWithInstrumentProps
> = ({ setMessage }) => {
    const AudioContext = useAudioContext()!;
    const { instrument } = useInstrument();
    const { loading, current, play, stop, load } = useSoundfont({
        AudioContext,
    });

    useEffect(() => {
        if (!loading && instrument !== current) load(instrument);
    }, [load, loading, current, instrument]);

    return (
        <Keyboard
            loading={loading}
            play={play}
            stop={stop}
            setMessage={setMessage}
        />
    );
};
