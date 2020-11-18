export const ADD_NOTE = "notes/ADD_NOTE";
export const SET_NOTES_FROM_LOCAL_STORAGE = 'notes/SET_NOTES_FROM_LOCAL_STORAGE';
export const SET_CURRENT_ARTWORK_ID = 'notes/SET_CURRENT_ARTWORK_ID';

// Actions
export const addNote = (text, afterIndex) => ({type: ADD_NOTE, text, afterIndex});
export const setNoteFromLocalStorage = (notes) => ({type: SET_NOTES_FROM_LOCAL_STORAGE, notes});
export const setCurrentArtworkId = (artworkId) => ({type: SET_CURRENT_ARTWORK_ID, artworkId});

