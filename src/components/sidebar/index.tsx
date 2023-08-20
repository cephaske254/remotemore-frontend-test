import Drawer from "@mui/material/Drawer";
import { DRAWER_WIDTH } from "./constants";

export default function Sidebar() {
  return (
    <Drawer
      variant="persistent"
      open
      sx={{
        "& .MuiDrawer-paper": {
          width: `${DRAWER_WIDTH}px}`,
        },
      }}
    >
      lorem
    </Drawer>
  );
}
