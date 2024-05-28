import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const refresh = () => setShouldRefresh(!shouldRefresh);

  useEffect(() => {
    setLoading(true);

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url, shouldRefresh]);

  return { loading, error, data, refresh };
};

export default useFetch;
