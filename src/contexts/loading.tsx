import Loading from "components/loading";
import { createContext, useState } from "react";

const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData
);

type LoadingContextData = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <Loading {...{ loading }} />
      <LoadingContext.Provider value={{ loading, setLoading }}>
        {children}
      </LoadingContext.Provider>
    </>
  );
};

export type LoadingProviderProps = {
  children: React.ReactNode;
};

export default LoadingContext;
