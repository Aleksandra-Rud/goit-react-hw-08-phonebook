import { combineReducers, createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, filterContact } from "./actions";
import { filterContact } from "./contact-actions";
import { fetchContact, addContact, deleteContact } from "./contact-operations";

const items = createReducer([], {
  [fetchContact.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [action.payload, ...state],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const loading = createReducer(false, {
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer("", {
  [filterContact]: (_, action) => action.payload,
});

const error = createReducer(null, {});

const rootReducer = combineReducers({
  items,
  loading,
  filter,
  error,
});

export default rootReducer;
