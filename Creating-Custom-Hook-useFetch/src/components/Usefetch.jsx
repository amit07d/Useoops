import { useEffect, useState } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(getUrl) {
    setLoading(true);
    try {
      const response = await fetch(getUrl, options); 
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.log(error);
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
