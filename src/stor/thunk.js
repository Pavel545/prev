import axios from "axios";
import { allFilure, spacificSusccess } from "./creatos.js";
import { allSusccess } from "./creatos.js";
import { allStarted } from "./creatos.js";



const BASE_URL= "https://preview.agatech.ru/lists.php";

export const allPrev = () => async (dispatch) => {
    dispatch(allStarted())

    try {
      const { data } = await axios.get(`${BASE_URL}`);
      dispatch(allSusccess(data));
    } catch (error) {
      // dispatch(allFilure())
    }
};
export const spacificPrev = ({ id }) => async (dispatch) => {
    dispatch(allStarted())

    try {
      const { data } = await axios.get(`${BASE_URL}/?id=${id }`);
      dispatch(spacificSusccess(data));
    } catch (error) {
      console.log(error);
    }
};
