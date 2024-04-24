import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {
    const [infoApi, setInfoApi] = useState();
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getApi = () => {
        setLoading(true);

        axios
            .get(url)
            .then((res) => {
                setInfoApi((prevInfo) => res.data);
                setHasError(false);
            })
            .catch((err) => {
                setHasError(true);
            })
            .finally(() => setLoading(false));
    };

    return [infoApi, getApi, hasError, setInfoApi, loading];
};

export default useFetch;
