import { STARTED, SUCCESS,FILURE, SPECIFIC } from "./types";

const initialState = {
    loading: false,
    error: null,
    todos: { all: [], specific: [] },
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
        case SPECIFIC:
        return {
          ...state,
          loading: false,
          error: null,
  
          todos: {
            all: [...state.todos.all],
            specific: [...action.payload.specific],
          },
        };
  
     
  
      default:
        return state;
    }
  }
  