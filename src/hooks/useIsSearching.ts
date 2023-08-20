import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useIsSearching = () => {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();

  const isSearching = useMemo(() => {
    return !!hash && hash.includes("search");
  }, [hash]);

  const toggleSearch = useCallback(() => {
    if (isSearching) navigate(pathname);
    else navigate(`${pathname}#search`);
  }, [isSearching, navigate]);

  return { isSearching, toggleSearch, navigate, hash };
};

export default useIsSearching;
