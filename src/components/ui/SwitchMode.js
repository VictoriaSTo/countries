import React from 'react';
import Switch from '@mui/material/Switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const SwitchMode = ({isDarkMode, onSetIsDarkMode}) => {
  return (
    <div 
    style={{
      display: 'flex',
      alignItems: 'center'
    }}>
    {isDarkMode ? <LightModeIcon /> : <DarkModeIcon /> }
    <Switch 
      checked={isDarkMode}
      onClick={onSetIsDarkMode}
    />
  </div>
  );
}

export default SwitchMode;
