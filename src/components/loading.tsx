import { styled } from "@mui/material/styles";
import Modal from "@mui/material/Modal";

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  return (
    <>
      <RootStyles open={loading}>
        <div>Loading...</div>
      </RootStyles>
    </>
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
