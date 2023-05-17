import { useCallback, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeError, showError } from "../redux/error";
import { selectLoading, startLoading, stopLoading } from "../redux/loading";
import { selectScript } from "../redux/language";
import { BG } from "../util/PAGE_SCRIPT";

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
        //for testing -----> "http://localhost:80/api/"
        const response = await fetch(process.env.REACT_APP_SERVER_URL + url, {
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
        let errorMsg
        if (script === BG && err.messages[1]) {
          errorMsg = err.messages[1]
        } else {
          errorMsg = err.messages[0]
        }
        dispatch(showError(errorMsg))
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
