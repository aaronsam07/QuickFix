import { createContext, useEffect, useReducer } from "react";

// const initial_state = {
//   user:
//     localStorage.getItem("user") !== undefined
//       ? JSON.parse(localStorage.getItem("user"))
//       : null,
//   worker:
//     localStorage.getItem("worker") !== undefined
//       ? JSON.parse(localStorage.getItem("worker"))
//       : null,
  
//   loading: false,
//   error: null,
// };

const initial_state = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  worker: JSON.parse(localStorage.getItem("worker")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };

    case "WORKER_LOGIN_START":
      return {
        ...state,
        worker: null,
        loading: true,
        error: null,
      };
    case "WORKER_LOGIN_SUCCESS":
      return {
        ...state,
        worker: action.payload,
        loading: false,
        error: null,
      };
    case "WORKER_LOGIN_FAILURE":
      return {
        ...state,
        worker: null,
        loading: false,
        error: action.payload,
      };
    case "WORKER_REGISTER_SUCCESS":
      return {
        ...state,
        worker: null,

        loading: false,
        error: null,
      };
    case "WORKER_LOGOUT":
      return {
        ...state,
        worker: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("worker", JSON.stringify(state.worker));
  }, [state.user, state.worker]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        worker: state.worker,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
