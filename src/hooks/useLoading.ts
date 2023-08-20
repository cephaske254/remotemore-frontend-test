import LoadingContext from "contexts/loading";
import { useContext, useEffect } from "react";

const useLoading = (loading?: boolean) => {
  const context = useContext(LoadingContext);

  if (!context)
    throw new Error("useLoading must be used within a LoadingProvider");

  useEffect(() => {
    if (loading == true || loading === false) context.setLoading(loading);
  }, [loading]);

  return context;
};

export default useLoading;
