import { useCallback, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeError, showError } from "../redux/error";
import { selectLoading, startLoading, stopLoading } from "../redux/loading";
import { selectScript } from "../redux/language";

export const useHttpClient = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const script = useSelector(selectScript);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      dispatch(startLoading());
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        //for production --> process.env.REACT_APP_SERVER_URL
        //for testing -----> process.env.REACT_APP_TEST_SERVER_URL
        const response = await fetch(process.env.REACT_APP_TEST_SERVER_URL + url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        dispatch(stopLoading());
        return responseData;
      } catch (err) {
        // let errorMsg
        // if (script === BG && err.message2) {
        //   errorMsg = err.message2
        // } else {
        //   errorMsg = err.message1
        // }
        dispatch(showError(err.message))
        setTimeout(() => dispatch(removeError()), 6000);
        dispatch(stopLoading());
        throw err;
      } 
    },
    []
  );

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { loading, sendRequest };
};
