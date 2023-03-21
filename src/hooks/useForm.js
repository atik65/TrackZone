import { useState } from "react";
import { deepClone, isObjectEmpty } from "../utils/objectUtil";
const useForm = (init, validate) => {
  const [state, setState] = useState(mapValuesToState(init));

  const handleChange = (e) => {
    const { name: key, value } = e.target;
    const clonedState = deepClone(state);

    clonedState[key].value = value;
    const { errors } = getErrors(validate);

    if (clonedState[key].touched && errors[key]) {
      clonedState[key].error = errors[key];
    } else {
      clonedState[key].error = "";
    }

    setState(clonedState);
  };

  const handleFocus = (e) => {
    const { name: key } = e.target;

    const clonedState = deepClone(state);

    clonedState[key].focused = true;

    if (!clonedState[key].touched) {
      clonedState[key].touched = true;
    }

    setState(clonedState);
  };

  const handleBlur = (e) => {
    const { name: key } = e.target;
    const clonedState = deepClone(state);
    clonedState[key].focused = false;

    const { errors } = getErrors(validate);

    if (clonedState[key].touched && errors[key]) {
      clonedState[key].error = errors[key];
    } else {
      clonedState[key].error = "";
    }

    setState(clonedState);
  };

  const handleSubmit = (e, cb) => {
    e.preventDefault();

    const { errors, hasError, values } = getErrors(validate);

    cb({
      errors,
      hasError,
      values,
      touched: mapStateToKey(state, "touched"),
      focused: mapStateToKey(state, "focused"),
    });
  };

  const getErrors = (validate) => {
    let hasError = false,
      errors = {};
    const values = mapStateToKey(state, "value");

    if (typeof validate == "boolean") {
      hasError = validate;
      errors = mapStateToKey(state, "error");
    } else if (typeof validate == "function") {
      errors = validate(values);
      hasError = !isObjectEmpty(errors);
    } else {
      throw new Error("validate must be boolean or function");
    }

    return {
      values,
      errors,
      hasError,
    };
  };

  const clear = () => {
    setState(mapValuesToState(init, true));
  };

  return {
    formState: state,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    clear,
  };
};

const mapValuesToState = (values, shouldClear = false) => {
  return Object.keys(values).reduce((acc, current) => {
    acc[current] = {
      value: shouldClear ? "" : values[current],
      error: "",
      focused: false,
      touched: false,
    };

    return acc;
  }, {});
};

const mapStateToKey = (state, key) => {
  return Object.keys(state).reduce((acc, current) => {
    acc[current] = state[current][key];

    return acc;
  }, {});
};

export default useForm;
