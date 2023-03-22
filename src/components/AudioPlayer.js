import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";

const WallPaper = styled("div")({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
});

const Widget = styled("div")(({ theme }) => ({
  borderRadius: 16,
  backdropFilter: "blur(40px)",
  width: "676px",
  maxWidth: "100%",
}));

const CoverImage = styled("div")({
  width: "75.84px",
  height: "82px",
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  fontWeight: 500,
  letterSpacing: 0.2,
  color: "#FFFFFF",
});

function AudioPlayer() {
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  return (
    <WallPaper
      sx={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        height: "130px",
        alignItems: "center",
        gap: "150px",
        paddingLeft: "32px",
        backgroundColor: "#121212",
        border: "1px solid #34C94B",
        borderRight: "hidden",
        borderLeft: "hidden",
      }}
    >
      <Box sx={{ display: "flex", width: "200px" }}>
        <CoverImage>
          <img
            alt="song_image"
            src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
          />
        </CoverImage>
        <Box
          sx={{
            ml: 1.5,
            minWidth: 0,
            color: "#FFFFFF",
          }}
        >
          <Typography variant="caption" fontWeight={500}>
            Jun Pulse
          </Typography>
          <Typography noWrap letterSpacing={-0.25}>
            Chilling Sunday
          </Typography>
        </Box>
      </Box>
      <Widget>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -1,
            gap: "6px",
            alignItem: "center",
          }}
        >
          {/* player pause , rewind and forward */}
          {/* <IconButton aria-label="previous song">
            <FastRewindRounded
              fontSize="large"
              sx={{
                border: "1px solid #FFFFFF",
                backgroundColor: "#FFFFFF",
                color: "black",
                borderRadius: "50%",
              }}
            />
          </IconButton> */}
          <IconButton
            aria-label={paused ? "play" : "pause"}
            onClick={() => setPaused(!paused)}
            sx={{
              border: "1px solid #FFFFFF",
              backgroundColor: "#FFFFFF",
              borderRadius: "50%",
              color: "black",
            }}
          >
            {paused ? (
              <PlayArrowRounded
                sx={{
                  fontSize: "2rem",
                  border: "1px solid #FFFFFF",
                  backgroundColor: "#FFFFFF",
                  color: "black",
                  borderRadius: "50%",
                }}
                //   htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded
                sx={{
                  fontSize: "2rem",
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid white",
                  borderRadius: "50%",
                }}
                //   htmlColor={mainIconColor}
              />
            )}
          </IconButton>
          {/* <IconButton aria-label="next song">
            <FastForwardRounded
              fontSize="large"
              sx={{
                border: "1px solid white",
                backgroundColor: "white",
                color: "black",
                borderRadius: "50%",
              }}
            />
          </IconButton> */}
        </Box>
        <Box>
          {/* player slider duration*/}
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value)}
            sx={{
              color: "green",
              height: 4,
              "& .MuiSlider-thumb": {
                width: 8,
                height: 8,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: "0px 0px 0px 8px",
                },
                "&.Mui-active": {
                  width: 20,
                  height: 20,
                },
              },
              "& .MuiSlider-rail": {
                color: "white",
              },
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: -2,
            }}
          >
            <TinyText>{formatDuration(position)}</TinyText>
            <TinyText>-{formatDuration(duration - position)}</TinyText>
          </Box>
          {/* volume control button */}
          {/* <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 1, px: 1 }}
          alignItems="center"
        >
          <VolumeDownRounded htmlColor={lightIconColor} />
          <Slider
            aria-label="Volume"
            defaultValue={30}
            sx={{
              color:
                theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              "& .MuiSlider-track": {
                border: "none",
              },
              "& .MuiSlider-thumb": {
                width: 24,
                height: 24,
                backgroundColor: "#fff",
                "&:before": {
                  boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none",
                },
              },
            }}
          />
          <VolumeUpRounded htmlColor={lightIconColor} />
        </Stack> */}
        </Box>
      </Widget>
    </WallPaper>
  );
}

export default AudioPlayer;
