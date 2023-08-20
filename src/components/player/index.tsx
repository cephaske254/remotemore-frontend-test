import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { getFontWeight } from "theme/fonts";
import Controls from "./controls";

export default function Player() {
  const playing = true;

  return (
    <Card elevation={0}>
      <CardContent>
        <Stack direction="row" spacing={4}>
          <Controls {...{ playing }} />

          <Box display="flex" flexDirection="column" justifyContent='space-evenly'>
            <Typography variant="subtitle2">Something playing</Typography>
            <Typography
              variant="caption"
              color="grey.A700"
              fontWeight={getFontWeight("poppins", "medium")}
            >
              Artist Name
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
