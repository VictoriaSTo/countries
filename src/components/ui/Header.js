import React, { useState } from "react";
import { AppBar, formControlClasses, Toolbar, useScrollTrigger} from "@mui/material";
import { Typography } from "@mui/material";

const Header = () => {


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
        <Toolbar>
          <Typography>
            <h3>Where in the world?</h3>
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
