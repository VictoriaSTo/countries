import React from "react";
import { AppBar, Toolbar, useScrollTrigger} from "@mui/material";
import { Typography } from "@mui/material";
import SwitchMode from "./SwitchMode";

const Header = ({ isDarkMode, onSetIsDarkMode }) => {


  function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography noWrap>
            <h3>Where in the world?</h3>
          </Typography>
          <div sx={{ display: "flex", marginTop: "0px" }}>
          <SwitchMode isDarkMode={isDarkMode} onSetIsDarkMode={onSetIsDarkMode} />
          </div>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
