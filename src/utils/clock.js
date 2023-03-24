import {
  addMinutes,
  differenceInHours,
  differenceInMinutes,
  subMinutes,
} from "date-fns";

const timeConvert = (timeZone) => {
  let date = new Date();
  let timeOffset = date.getTimezoneOffset();
  switch (timeZone) {
    case "EST": {
      date = addMinutes(date, timeOffset);
      date = subMinutes(date, 240);
      return new Date(`${date}`).toISOString();
    }

    case "PST": {
      date = addMinutes(date, timeOffset);
      date = subMinutes(date, 420);
      return new Date(`${date}`).toISOString();
    }
    case "UTC": {
      date = addMinutes(date, timeOffset);
      date = subMinutes(date, 0);
      return new Date(`${date}`).toISOString();
    }
    default: {
      return new Date(`${date}`).toISOString();
    }
  }
};

const timeDifference = (baseZone, toZone) => {
  let baseTime = timeConvert(baseZone);
  let toTime = timeConvert(toZone);
  let result = differenceInHours(new Date(toTime), new Date(baseTime));

  // will return time difference from base time to toTime in min
  return result;
};

export { timeConvert, timeDifference };
