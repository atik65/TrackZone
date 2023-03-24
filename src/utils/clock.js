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

const timeConvertToDefaultZone = (defaultZone, currentZone, currentDate) => {
  let date = new Date(currentDate);

  if (currentZone == "PST") {
    date = addMinutes(date, 420);
  } else if (currentZone == "EST") {
    date = addMinutes(date, 240);
  } else if (currentZone == "UTC") {
    date = addMinutes(date, 0);
  } else if (currentZone == "SYSTEM TIME") {
    date = addMinutes(date, new Date().getTimezoneOffset());
  }

  if (defaultZone == "PST") {
    date = subMinutes(date, 420);
  } else if (defaultZone == "EST") {
    date = subMinutes(date, 240);
  } else if (defaultZone == "UTC") {
    date = subMinutes(date, 0);
  } else if (defaultZone == "SYSTEM TIME") {
    if (new Date().getTimezoneOffset() < 0) {
      date = addMinutes(date, new Date().getTimezoneOffset() * -1);
    } else {
      date = subMinutes(date, new Date().getTimezoneOffset());
    }
  }

  return date.toISOString();
};

export { timeConvert, timeDifference, timeConvertToDefaultZone };
