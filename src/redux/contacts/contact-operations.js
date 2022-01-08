import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContact = createAsyncThunk(
  "contact/fetchContact",
  async () => {
    // fetchContact.pending();
    try {
      const resp = await axios.get("/contacts");
      return resp.data;
    } catch (error) {
      console.log(error.message);
      // return fetchContact.rejected(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contact/addContact",
  async ({ name, number }) => {
    const addedContact = {
      name,
      number,
    };

    const resp = await axios.post("/contacts", addedContact);
    return resp.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (contactId) => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);
