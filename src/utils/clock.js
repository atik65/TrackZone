import { addMinutes, subMinutes } from "date-fns";

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

export { timeConvert };
