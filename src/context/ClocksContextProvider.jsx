import { createContext } from "react";
import useClocks from "../hooks/useClocks";

export const ClocksContext = createContext();

const ClocksContextProvider = (props) => {
  const { clocks, addClock, updateClock, deleteClock, addMeeting } =
    useClocks();

  return (
    <ClocksContext.Provider
      value={{
        clocks,
        addClock,
        updateClock,
        deleteClock,
        addMeeting,
      }}
    >
      {props.children}
    </ClocksContext.Provider>
  );
};

export default ClocksContextProvider;
