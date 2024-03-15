import axios from "axios";
import React, { useEffect, useState } from "react";

const useAxiosFetch = (dataURL) => {
  const [data, setData] = useState([]);
  const [FetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });

        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (error) {
        if (isMounted) {
          setFetchError(error.message);
          setData([]);
        }
      } finally {
        // you won't need the timeOut function in real apps ...this is just to see if the loading message shows up!1!!
        isMounted &&
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
      }
    };
    fetchData(dataURL);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataURL]);

  return { data, isLoading, FetchError };
};

export default useAxiosFetch;
