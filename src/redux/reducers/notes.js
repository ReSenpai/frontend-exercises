import { ADD_NOTE, SET_CURRENT_ARTWORK_ID, SET_NOTES_FROM_LOCAL_STORAGE } from "../actions/notes";

const initState = {
  notes: ["note 1", "note 2", "note 3", "note 4"],
  artworkId: 1
}

const notesReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, parseInt(action.afterIndex) + 1),
          action.text,
          ...state.notes.slice(parseInt(action.afterIndex) + 1)
        ]
      }
    case SET_NOTES_FROM_LOCAL_STORAGE:
      return {
        ...state,
        notes: [...action.notes]
      }
    case SET_CURRENT_ARTWORK_ID:
      return {
        ...state,
        artworkId: action.artworkId
      }
    default:
      return state;
  }
}

export default notesReducer;
