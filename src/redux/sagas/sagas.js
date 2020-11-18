import { put, takeEvery, select } from 'redux-saga/effects';
import { SET_INITIALIZATION } from '../actions/app';
import { ADD_NOTE, setNoteFromLocalStorage } from '../actions/notes';

export const NOTES_ARRAY = 'sagas/NOTES_ARRAY';


function* addNotesToLocalStorage(action) {
    const state = yield select();
    localStorage.setItem(NOTES_ARRAY, JSON.stringify(state.notesPage.notes));
}

function* getNotesFromLocalStorage(action) {
    const notes = localStorage.getItem(NOTES_ARRAY)
    if (notes && notes !== 'undefined') {
        yield put(setNoteFromLocalStorage(JSON.parse(notes)));
    }
}

function* mySaga() {
   yield takeEvery(ADD_NOTE, addNotesToLocalStorage);
   yield takeEvery(SET_INITIALIZATION, getNotesFromLocalStorage);
}

export default mySaga;