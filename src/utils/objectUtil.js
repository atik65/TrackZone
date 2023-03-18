const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const isObjectEmpty = (obj) => {
  const length = Object.keys(obj).length;

  if (length == 0) {
    return true;
  } else {
    return false;
  }
};

export { deepClone, isObjectEmpty };
