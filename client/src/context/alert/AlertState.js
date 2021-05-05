import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AuthState = ({ children }) => {
  const intialState = [];

  const [state, dispatch] = useReducer(alertReducer, intialState);

  // Set alert
  const setAlert = (msg, type) => {
    const id = uuidv4();
    dispatch({ type: SET_ALERT, payload: { id, msg, type } });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: id });
    }, 4000);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AuthState;
