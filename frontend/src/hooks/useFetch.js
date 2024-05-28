import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const { user } = useContext(AuthContext);

  const refresh = () => setShouldRefresh(!shouldRefresh);

  useEffect(() => {
    setLoading(true);

    axios
      .get(url, { headers: { Authorization: user?.token } })
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
