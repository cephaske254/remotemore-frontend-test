import { NAVBAR_HEIGHT } from "components/navbar/constants";

const useNavbar = () => {
  // const { isSearching } = useIsSearching();

  // const height = isSearching ? 0 : NAVBAR_HEIGHT;
  return {
    padding: NAVBAR_HEIGHT,
  };
};

export default useNavbar;
