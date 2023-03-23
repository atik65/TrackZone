import { useState } from "react";
import shortid from "shortid";

const init = [
  {
    id: shortid.generate(),
    clockTitle: "",
    timeZone: "GMT",
    clockType: "Default",
    clockTime: `${new Date().getHours()}: ${new Date().getMinutes()}`,
    clockDate: new Date().toDateString(),
    meetings: [
      {
        id: shortid.generate(),
        meetingTitle: "",
        meetingDate: new Date().toISOString(),
        meetingTime: new Date().toISOString(),
        difference: 6,
      },
      {
        id: shortid.generate(),
        meetingTitle: "",
        meetingDate: new Date().toISOString(),
        meetingTime: new Date().toISOString(),
        difference: 6,
      },
    ],
  },
];

const useClocks = () => {
  const [clocks, setClocks] = useState(init);
  return {
    clocks,
  };
};

export default useClocks;
