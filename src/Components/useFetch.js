import {useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
//useEffect cleanup
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) {  // error coming back from server
            throw Error("Could not fetch the data for the resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setData(data);          
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted")
          } else {
            // auto catches network / connection error
          setIsLoading(false);
          setError(err.message);
          }
        });
    }, 1000);
    //abort fetch
    return () => abortCont.abort()
  }, [url]);

  return {data, isLoading, error }
 
};

export default useFetch;
