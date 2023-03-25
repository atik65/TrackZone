import { addMinutes, differenceInHours, subMinutes } from "date-fns";
import timeZoneData from "./timeZone";

const timeZones = timeZoneData.reduce((acc, curr) => {
  acc = {
    ...acc,
    [curr.label]: {
      ...curr,
    },
  };
  return acc;
}, {});

const timeConvert = (timeZone, offset = 0) => {
  let date = new Date();
  let timeOffset = timeZones[timeZone]?.offset || offset;
  let utc = addMinutes(date, new Date().getTimezoneOffset());

  utc = subMinutes(utc, timeOffset);

  return new Date(utc).toISOString();
};

const timeDifference = (baseZone, toZone) => {
  let baseTime = timeConvert(baseZone);
  let toTime = timeConvert(toZone);
  let result = differenceInHours(new Date(toTime), new Date(baseTime));

  // will return time difference from base time to toTime in min
  return result;
};

const timeConvertToDefaultZone = (defaultZone, currentZone, currentDate) => {
  let date = new Date(currentDate);
  date = addMinutes(date, timeZones[currentZone].offset);
  date = subMinutes(date, timeZones[defaultZone].offset);

  return date.toISOString();
};

export { timeConvert, timeDifference, timeConvertToDefaultZone };
