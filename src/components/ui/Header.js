import React, { useState } from "react";
import { AppBar, formControlClasses, Toolbar, useScrollTrigger} from "@mui/material";
import { Typography } from "@mui/material";
import SwitchMode from "./SwitchMode";
import Box from '@mui/material/Box';

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
          <Typography noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}>
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
