import PauseIcon from "./icons/pause";
import PlayIcon from "./icons/play";

const ICON_SIZE = 30;

const PlayPause: React.FC<PlayPauseProps> = ({ playing }) => {
  if (playing) return <PauseIcon height={ICON_SIZE} width={ICON_SIZE} />;

  return <PlayIcon height={ICON_SIZE} width={ICON_SIZE} />;
};

export type PlayPauseProps = {
  playing?: boolean;
};
export default PlayPause;
