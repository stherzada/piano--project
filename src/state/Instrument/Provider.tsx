import React, { useState,ReactNode  } from "react";
import { DEFAULT_INSTRUMENT } from "../../domain/sound";
import { InstrumentContext } from "./Context";
interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
  children?: ReactNode;
}

export const InstrumentContextProvider = ({ children, ...props }: Props) => {
  const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT);

  return (
    <InstrumentContext.Provider
      value={{ instrument, setInstrument }}
      {...props}
    >
      {children}
    </InstrumentContext.Provider>
  );
};
