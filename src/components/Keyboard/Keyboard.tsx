import { FunctionComponent, useEffect, useState } from "react";
import { selectKey } from "../../domain/keyboard";
import { notes, MidiValue } from "../../domain/note";
import { Key } from "../Key";
import "./style.css";
import data from "../../../musicas.json";

export interface KeyboardProps {
    loading: boolean;
    play: (note: MidiValue) => Promise<void>;
    stop: (note: MidiValue) => Promise<void>;
    setMessage: React.Dispatch<React.SetStateAction<infoMusics | undefined>>;
}

interface musicsStores {
    [key: string]: infoMusics;
}

export interface infoMusics{
    music: string;
    author: string;
    describle: string;
    url: string;
}

export const Keyboard: FunctionComponent<KeyboardProps> = ({
    loading,
    stop,
    play,
    setMessage,
}) => {
    const [sequence, setSequence] = useState("");
    const musics: musicsStores = data;

    useEffect(() => {
        console.log(sequence);
        const timeout = setTimeout(() => setSequence(""), 2500);
        
        if (Object.keys(musics).includes(sequence)) {
            setSequence("");
            setMessage(musics[sequence]);
            clearTimeout(timeout);
        }
      
        return () => {
            clearTimeout(timeout);
        };
    }, [sequence]);

    return (
        <div className="keyboard">
            {notes.map(({ midi, type, index, octave }) => {
                const label = selectKey(octave, index);
                return (
                    <Key
                        key={midi}
                        type={type}
                        label={label}
                        disabled={loading}
                        onDown={() => play(midi)}
                        onUp={() => stop(midi)}
                        sequence={sequence}
                        setSequence={setSequence}
                    />
                );
            })}
        </div>
    );
};
