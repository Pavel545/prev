import axios from "axios";
import { allFilure, spacificSusccess } from "./creatos.js";
import { allSusccess } from "./creatos.js";
import { allStarted } from "./creatos.js";



const BASE_URL= "http://127.0.0.1:3003";

export const allPrev = () => async (dispatch) => {
    dispatch(allStarted())

    try {
      const { data } = await axios.get(`${BASE_URL}/?users`);
      dispatch(allSusccess(data));
    } catch (error) {
      dispatch(allFilure())
    }
  };

export const spacificPrev =
  ({ pages, limit }) =>
  async (dispatch) => {
    dispatch(allStarted());

    try {
      const { data } = await axios.get(
        `${BASE_URL}/paintings?_page=${pages}&_limit=${limit}`
      );

      dispatch(spacificSusccess(data));
    } catch (error) {
      dispatch(allFilure(error));
    }
  };