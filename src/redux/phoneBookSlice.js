import { createSlice } from '@reduxjs/toolkit';

const INITIAL_PHONEBOOK_STATE = {
  contacts: [],
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState: INITIAL_PHONEBOOK_STATE,
  reducers: {
    addContact(state, { payload: newContact }) {
      state.contacts.push(newContact);
    },

    removeContact(state, { payload: contactId }) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== contactId
      );
    },

    filterContacts(state, { payload: filterValue }) {
      state.filter = filterValue;
    },
  },
});

export const { addContact, removeContact, filterContacts } =
  phoneBookSlice.actions;
export default phoneBookSlice.reducer;
