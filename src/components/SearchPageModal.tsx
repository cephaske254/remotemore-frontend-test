import MUIModal, { ModalProps } from "@mui/material/Modal";
import { alpha, styled } from "@mui/material/styles";
import useIsSearching from "hooks/useIsSearching";
import useNavbar from "hooks/useNavbar";
import { Helmet } from "react-helmet";

const HashPagePaper = ({ children, ...props }: Omit<ModalProps, "open">) => {
  const { isSearching, toggleSearch } = useIsSearching();
  const { padding } = useNavbar();

  return (
    <>
      {isSearching && (
        <Helmet>
          <title>Search</title>
        </Helmet>
      )}
      <Modal
        open={isSearching}
        navbarHeight={padding}
        {...props}
        disablePortal
        disableEnforceFocus
        onClose={toggleSearch}
      >
        {children}
      </Modal>
    </>
  );
};

const Modal = styled(MUIModal, {
  shouldForwardProp: (prop) => prop !== "navbarHeight",
})<{
  navbarHeight: number;
}>(({ theme, navbarHeight }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2,
  background: alpha(theme.palette.common.dark, 0.2),
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  paddingTop: `${navbarHeight}px`,

  "& .MuiModal-backdrop": {
    background: "transparent",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: `${navbarHeight + navbarHeight * 0.3}px`,
    paddingBottom: `${navbarHeight}px`,
    borderRadius: "20px",
  },
}));

export default HashPagePaper;
