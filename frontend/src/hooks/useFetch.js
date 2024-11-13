import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const { user } = useContext(AuthContext);

  const refresh = useCallback(() => setShouldRefresh((prev) => !prev), []);

  const FetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(url, {
        headers: { Authorization: user?.token },
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [url, user?.token]);

  useEffect(() => {
    FetchData();
  }, [FetchData, shouldRefresh]);

  return { loading, error, data, refresh };
};

export default useFetch;
