import { STARTED, SUCCESS,FILURE } from "./types";

const initialState = {
    loading: false,
    error: null,
    todos: { all: [] },
  };

  export default function todoReducer(state = initialState, action) {
    switch (action.type) {
      case FILURE: {
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
      }
  
      case STARTED: {
        return {
          ...state,
          loading: true,
        };
      }
  
      case SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
  
          todos: {
            all: [...action.payload.todos],
          },
        };
  
     
  
      default:
        return state;
    }
  }
  