import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abrtCon = new AbortController();

    fetch(url, { signal: abrtCon.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldn't fetch");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoad(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.log();
          setError(err.message);
          setLoad(false);
        }
      });
    return () => abrtCon.abort();
  }, [url]);
  return { data, load, error };
};

export default useFetch;
