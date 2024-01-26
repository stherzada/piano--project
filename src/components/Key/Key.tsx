import React, { FunctionComponent, ReactEventHandler, useEffect } from "react";
import clsx from "clsx";
import { NoteType } from "../../domain/note";
import { usePressObserver } from "../PressObserver";
import "./style.css";

interface KeyProps {
    type: NoteType;
    label: string;
    disabled?: boolean;

    onUp: ReactEventHandler<HTMLButtonElement>;
    onDown: ReactEventHandler<HTMLButtonElement>;
    sequence: string;
    setSequence: React.Dispatch<React.SetStateAction<string>>;
}

export const Key: FunctionComponent<KeyProps> = ({
    type,
    label,
    onDown,
    onUp,
    sequence,
    setSequence,
    ...rest
}) => {
    const pressed = usePressObserver({
        watchKey: label,
        onStartPress: onDown,
        onFinishPress: onUp,
    });

    useEffect(() => {
        if (!pressed) return;
        setSequence(sequence + label);
    }, [pressed, label]);

    return (
        <button
            className={clsx(`key key--${type}`, pressed && "is-pressed")}
            onMouseDown={onDown}
            onMouseUp={onUp}
            type="button"
            {...rest}
        >
            {label}
        </button>
    );
};
