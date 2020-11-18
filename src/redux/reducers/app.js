import { SET_INITIALIZATION } from "../actions/app";

const initState = {
    isInitialized: false
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_INITIALIZATION:
        return {
            ...state,
            isInitialized: action.isInitialization
        };
    default:
      return state;
  }
}

export default appReducer;
