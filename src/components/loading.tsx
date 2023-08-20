import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Logo from "./logo";

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  return (
      <RootStyles open={loading}>
        <Box>
          <Logo />
        </Box>
      </RootStyles>
  );
};

const RootStyles = styled(Modal)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  transition: "all 0.3s ease",
  opacity: 1,

  "& .MuiBackdrop-root": {
    backgroundColor: "#ffffff",
  },
}));

export type LoadingProps = {
  loading: boolean;
};

export default Loading;
