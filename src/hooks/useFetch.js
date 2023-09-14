import { useEffect, useReducer } from "react";
import appReducer from "../functions/appReducer";
import axios from "axios";
const initVal = {
  loading: true,
  meme: {},
  err: "",
};
const useFetch = () => {
  const [{ loading, meme, err }, dispatch] = useReducer(appReducer, initVal);
  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((resp) => {
        dispatch({
          type: "FETCH_SUCC",
          payload: resp.data.data,
        });
      })
      .catch((rr) => {
        dispatch({
          type: "FETCH_FAILD",
          payload: rr,
        });
      });
  }, []);
  return { loading, meme, err };
};

export default useFetch;
