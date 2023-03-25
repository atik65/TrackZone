import { format } from "date-fns";
import { useState } from "react";
import shortid from "shortid";
import { timeConvert, timeDifference } from "../utils/clock";
import { addToLocalStorage, getFromLocalStorage } from "../utils/localStorage";
import { deepClone } from "../utils/objectUtil";

const init = [
  // {
  //   id: shortid.generate(),
  //   clockTitle: "",
  //   timeZone: "UTC",
  //   clockType: "Default",
  //   clockTime: format(new Date(), "hh:mm:ss a"),
  //   clockDate: format(new Date(), "dd MMMM yyyy"),
  //   meetings: [
  //     {
  //       id: shortid.generate(),
  //       meetingTitle: "meeting title",
  //       meetingDate: new Date().toISOString(),
  //       meetingTime: new Date().toISOString(),
  //       difference: 6,
  //     },
  //     {
  //       id: shortid.generate(),
  //       meetingTitle: "meeting title",
  //       meetingDate: new Date().toISOString(),
  //       meetingTime: new Date().toISOString(),
  //       difference: 6,
  //     },
  //   ],
  // },
];

const useClocks = () => {
  const [clocks, setClocks] = useState(getFromLocalStorage("clocks") || init);

  const addClock = (clockData) => {
    const newClock = {
      id: shortid.generate(),
      clockTitle: clockData.clockTitle,
      timeZone: clockData.timeZone,
      clockType: clocks.length <= 0 ? "Default" : "Custom",
      clockTime: format(
        new Date(timeConvert(clockData.timeZone)),
        "hh:mm:ss a"
      ),
      clockDate: format(
        new Date(timeConvert(clockData.timeZone)),
        "dd MMMM yyyy"
      ),
      meetings: [],
    };

    const clonedState = deepClone(clocks);
    clonedState.push(newClock);
    setClocks(clonedState);
    addToLocalStorage("clocks", clonedState);
  };

  const updateClock = (updatedClock) => {
    let newClock = {
      ...updatedClock,
    };

    newClock.clockTime = format(
      new Date(timeConvert(newClock.timeZone)),
      "hh:mm:ss a"
    );

    newClock.clockDate = format(
      new Date(timeConvert(updateClock.timeZone)),
      "dd MMMM yyyy"
    );

    let clonedState = deepClone(clocks);

    clonedState = clonedState.map((clock) => {
      if (clock.id == newClock.id) {
        return {
          ...newClock,
        };
      }

      return clock;
    });

    setClocks(clonedState);
    addToLocalStorage("clocks", clonedState);
  };

  const deleteClock = (clockID) => {
    let clonedState = deepClone(clocks);
    clonedState = clonedState.filter((clock) => {
      if (clock.clockType == "Default") {
        return clock;
      } else if (clock.id != clockID) {
        return clock;
      }
    });

    setClocks(clonedState);
    addToLocalStorage("clocks", clonedState);
  };

  const addMeeting = (clockID, newMeeting) => {
    let clonedState = deepClone(clocks);

    clonedState = clonedState.map((clock) => {
      if (clock.id == clockID) {
        clock.meetings = [
          ...clock.meetings,
          {
            id: shortid.generate(),
            difference: timeDifference(clocks[0].timeZone, clock.timeZone),
            ...newMeeting,
          },
        ];
      }
      return clock;
    });

    setClocks(clonedState);
    addToLocalStorage("clocks", clonedState);
  };

  const updateMeeting = (clockID, updatedMeeting) => {
    // console.log(updatedMeeting);
    let clonedState = deepClone(clocks);
    const newMeeting = {
      id: updatedMeeting.id,
      meetingTitle: updatedMeeting.meetingTitle,
      meetingDate: updatedMeeting.meetingDate,
      meetingTime: updatedMeeting.meetingTime,
      difference: updatedMeeting.difference,
    };

    const targetClock = clonedState.find((clock) => {
      if (clock.id == clockID) {
        return clock;
      }
    });

    const newMeetings = targetClock.meetings.map((meet) => {
      if (meet.id == updatedMeeting.id) {
        return {
          ...newMeeting,
        };
      }

      return meet;
    });

    targetClock.meetings = [...newMeetings];

    clonedState = clonedState.map((clock) => {
      if (clock.id == clockID) {
        return {
          ...targetClock,
        };
      }
      return clock;
    });

    setClocks(clonedState);
    addToLocalStorage("clocks", clonedState);
  };

  const deleteMeeting = (clockID, meetingId) => {
    let clonedState = deepClone(clocks);

    const targetClock = clonedState.find((clock) => {
      if (clock.id == clockID) {
        return clock;
      }
    });

    const newMeetings = targetClock.meetings.filter((meet) => {
      return meet.id != meetingId;
    });

    targetClock.meetings = [...newMeetings];

    clonedState = clonedState.map((clock) => {
      if (clock.id == clockID) {
        return {
          ...targetClock,
        };
      }
      return clock;
    });

    setClocks(clonedState);
    addToLocalStorage("clocks", clonedState);
  };

  return {
    clocks,
    addClock,
    updateClock,
    deleteClock,
    addMeeting,
    updateMeeting,
    deleteMeeting,
  };
};

export default useClocks;
