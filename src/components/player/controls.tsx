import { styled } from "@mui/material/styles";
import PlayPause from "./play-pause";
import IconButton from "@mui/material/IconButton";

const SIZE = 60;
const INNER_SIZE = SIZE * 0.6;
const ICON_PATH = "/vinyl.png";

const Controls: React.FC<ControlsProps> = ({ playing }) => {
  return (
    <RootStyles>
      <InnerContainer>
        <PlayPause {...{ playing }} />
      </InnerContainer>
    </RootStyles>
  );
};

const RootStyles = styled(IconButton)(({ theme: { palette } }) => {
  const color = palette.common.purple;

  return {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    border: `2px solid ${color}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color,
    backgroundImage: `url('${ICON_PATH}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: 0,
  };
});

const InnerContainer = styled("span")(({ theme: { palette } }) => ({
  width: INNER_SIZE,
  height: INNER_SIZE,
  borderRadius: INNER_SIZE / 2,
  background: palette.common.white,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

type ControlsProps = {
  playing: boolean;
};

export default Controls;
