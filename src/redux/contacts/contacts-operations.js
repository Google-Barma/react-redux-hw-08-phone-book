import axios from 'axios';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.massage));
  }
};

export const addContact = (name, number) => async dispatch => {
  const contact = { name, number };
  dispatch(addContactsRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(addContactsSuccess(data));
  } catch (error) {
    dispatch(addContactsError(error.massage));
  }
};

export const deleteContacts = id => async dispatch => {
  dispatch(deleteContactsRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(deleteContactsSuccess(id));
  } catch (error) {
    dispatch(deleteContactsError(error.massage));
  }
};
