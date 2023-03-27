import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw Error('Error loading the resource');
      })
      .then(data2 => {
        setData(data2);
        setIsPending(false);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          return;
        }

        setError(err.message);
        setIsPending(false);
      });

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
