import {
  GET_TABLES,
  GET_CURRENT_TABLE,
  CANCEL_TABLE,
} from "./types";
import axios from "axios";

export const GetTables = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/table");
      dispatch({ type: GET_TABLES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetCurrentTable = (table_id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/table/${table_id}`);
      dispatch({ type: GET_CURRENT_TABLE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const BookTable = (FormData) => {
  return async (dispatch) => {
    try {
      console.log(FormData);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post("/api/table", FormData, config);
    } catch (error) {
      console.log(error);
    }
  };
};

export const CancelTable = (table_id) => {
  return async (dispatch) => {
    try {
      console.log(table_id);
      const response = await axios.delete(`/api/table/${table_id}`);
      dispatch({ type: CANCEL_TABLE, payload: table_id });
    } catch (error) {
      console.log(error);
    }
  };
};
